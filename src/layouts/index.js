import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import Signup from '../components/Signup'
import Tagline from '../components/Tagline'
import background from './remote-background.jpeg';
import './index.css';
import './background.css';

const Layout = ({ children, data }) => (
  <div id="main" style={{
      backgroundImage: `url(${background})`
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
      <Tagline tagline={data.site.siteMetadata.tagline} />
      {children()}
      <Signup />
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
