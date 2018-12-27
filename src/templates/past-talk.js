import React from 'react'
import { graphql } from 'gatsby'
import IndexPage from '../pages/index'

export default ({ data }) => <IndexPage data={data} />

export const query = graphql`
  query PastEvent($titleslug: String) {
    events(titleslug: { glob: $titleslug }) {
      id
      title
      titleslug
      description
      eventStart
      nextEvent
      speaker {
        name
        avatar {
          url
          handle
        }
      }
    }
  }
`
