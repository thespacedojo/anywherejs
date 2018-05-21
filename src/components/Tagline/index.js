import React, { Component, Fragment } from 'react';

class Tagline extends Component {
  constructor() {
    super();
    this.state = { show: false };
  }

  showInfo = (event) => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <Fragment>
        <h2 style={{ margin: '2rem 0 2rem 0', fontWeight: '400'}} >{this.props.tagline} <span onClick={this.showInfo} style={{fontSize: '0.7em', color: '#A685BF'}}>(what?)</span></h2>
        <p style={{ display: this.state.show ? 'block' : 'none' }}>AnywhereJS is a 100% online meetup that you can attend for free. You can watch a livestream on youtube and see the best speakers talking about cool stuff they are doing with Javascript. Just sign up below.</p>
      </Fragment>
    )
  }
}

export default Tagline;
