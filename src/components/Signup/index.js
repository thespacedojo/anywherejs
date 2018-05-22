import React from 'react'
import './signup.css'

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {dcq: [], loading: true};
  }

  componentDidMount() {
    window._dcq = window._dcq || [];
    window._dcs = window._dcs || {};
    window._dcs.account = '3428480';
    window._dcs.debug = 1;
    const script = document.createElement("script");

    script.type = 'text/javascript';
    script.src = "//tag.getdrip.com/3428480.js";
    script.async = true;

    const firstScript = document.getElementsByTagName('script')[0];
    firstScript.parentNode.insertBefore(script, firstScript);
		window._dcq.push(['identify', { success: this.dripResponse }]);
  }

	dripResponse = (payload) => {
    this.setState({loading: false})
		if (!payload.anonymous) {
      this.setState({ 'dripPayload': payload })
			if (this.email && payload.email)
				this.email.value = payload.email;
			if (this.fullName && payload.custom_fields.full_name)
				this.fullName.value = payload.custom_fields.full_name;
		}
	}

  saveEmail = (event) => {
    event.preventDefault();
		window._dcq.push(["identify", {
			email: this.email.value,
			full_name: this.fullName.value,
			tags: ["Anywherejs"],
      success: (payload) => {
        this.setState({ 'dripPayload': payload });
			}
		}]);

  }

  render() {
    if(this.state.loading) {
      return (
        <div className="signup">
          <p className="signedUp">
            Loading...
          </p>
        </div>
      )
    } else {
      if(this.state.dripPayload && !this.state.dripPayload.anonymous) {
        return (
          <div className="signup">
            <p className="signedUp">
              You are signed up, we will email you the link to the event, the day of the talk.
            </p>
          </div>
        )
      } else {
        return (
          <div className="signup">
            <form onSubmit={ this.saveEmail } action="https://www.getdrip.com/forms/866148695/submissions" method="post" data-drip-embedded-form="866148695">
              <h4>Tell me when and how to join</h4>
              <label id="drip-full-name-label" htmlFor="drip-full-name" >Name</label>
              <input type="text" id="drip-full-name" placeholder="Jill Smith"name="fields[full_name]" ref={(el) => this.fullName = el}/>
              <label id="drip-email-label" htmlFor="drip-email" >Email Address</label>
              <input type="email" id="drip-email" placeholder="Jill@javascript.com" name="fields[email]" ref={(el) => this.email = el}/>
              <input type="submit" value="Join for free" />
            </form>
          </div>
        )
      }
    }
  }
}

export default Signup
