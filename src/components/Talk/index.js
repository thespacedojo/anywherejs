import React from 'react'
import Link from 'gatsby-link'
import './talk.css'

const Talk = ({event, date}) => {
  return (
    <div className="talk">
      <div className="talkInfo">
        <h2>{event.title}</h2>
        <h4 style={{color: 'rgb(166, 133, 191)'}}>{date.toLocaleDateString()} at {date.toLocaleTimeString()} (local time)</h4>
        <p>{event.description}</p>
      </div>
      <div className="speakerInfo">
        <img src={`https://media.graphcms.com/resize=w:100,h:100/${event.speaker.avatar.handle}`} alt={`${event.speaker.name} image`}/>
        <h3>{event.speaker.name}</h3>
      </div>
    </div>
  )
}

export default Talk;
