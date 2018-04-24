import React from 'react'
import Link from 'gatsby-link'
import './index.css'

const IndexPage = ({data}) => {
  const event = data.allEvents.edges[0].node
  const date = new Date(event.eventStart);
  return (
    <div className="talk">
      <div className="talkInfo">
        <h2>{event.title}</h2>
        <h4 style={{color: 'rgb(166, 133, 191)'}}>{date.toLocaleDateString()} at {date.toLocaleTimeString()}</h4>
        <p>{event.description}</p>
      </div>
      <div className="speakerInfo">
        <img src={event.speaker.avatar.url} />
        <h3>{event.speaker.name}</h3>
      </div>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query UpcomingEvent {
    allEvents(
      limit: 1
      filter: {
       nextEvent: { eq: true }
      }
    ) {
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
            }
          }
        }
      }
    }
  }
`
