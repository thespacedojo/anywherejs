import React from 'react'
import { graphql } from 'gatsby'
import Talk from '../components/Talk'
import Signup from '../components/Signup'
import Layout from '../components/Layout'
import './index.css'

const IndexPage = ({ data }) => {
  const event = data.allEvents ? data.allEvents.edges[0].node : data.events
  const date = new Date(event.eventStart)
  return (
    <Layout>
      <Talk event={event} date={date} />
      <Signup />
    </Layout>
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
