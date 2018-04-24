import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import background from './remote-background.jpeg';
import './index.css'

const Layout = ({ children, data }) => (
  <div style={{
      backgroundImage: `url(${background})`,
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: '50% 20%'
    }}>
    <Helmet
      title={data.site.siteMetadata.name}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.name} />
    <div
      style={{
        margin: '0 auto',
        padding: '0px 5rem 1.45rem',
        paddingTop: 0,
      }}
    >
      <h2 style={{ margin: '2rem 0 2rem 0', fontWeight: '400'}} >{data.site.siteMetadata.tagline} <span style={{fontSize: '0.7em', color: '#A685BF'}}>(what?)</span></h2>
      <div className="nextUp">
        
      </div>
      {children()}
      <div className="signup">
        <form>
          <fieldset style={{ padding: '25px 25px 35px 25px', borderRadius: '5px', textAlign: 'center'}}>
            <legend style={{ padding: '0 15px', textAlign: 'center' }}>Tell me when and how to join</legend>
            <input type="text" name="name" placeholder="Jill Smith"/>
            <input type="email" name="email" placeholder="Jill@javascript.com" />
            <input type="submit" value="Join for free" />
          </fieldset>
        </form>
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query siteData{
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`
