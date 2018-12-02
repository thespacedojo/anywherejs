import React from 'react'
import Link from 'gatsby-link'
import Talk from '../components/Talk'
import Signup from '../components/Signup'
import './index.css'

const IndexPage = ({ data }) => {
  const event = data.allEvents.edges[0].node
  const date = new Date(event.eventStart)
  return (
    <div>
      <Talk event={event} date={date} />
      <Signup />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query UpcomingEvent {
    allEvents(limit: 1, filter: { nextEvent: { eq: true } }) {
      edges {
        node {
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
    }
  }
`
