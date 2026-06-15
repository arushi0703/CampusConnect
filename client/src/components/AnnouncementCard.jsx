import React from 'react'
import './AnnouncementCard.css'

const AnnouncementCard = ({title,description}) => {
  return (
    <div className='announcement-card'>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default AnnouncementCard