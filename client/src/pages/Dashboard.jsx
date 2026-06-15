import React from 'react'
import './Dashboard.css'
import AnnouncementCard from '../components/AnnouncementCard'
import { announcements } from '../services/announcementsData'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h2>Student Dashboard</h2>
      <p>Welcome Student</p>
      <h3>Campus Announcements</h3>
      {
        announcements.map(announcement => (
          <AnnouncementCard key={announcement.id}  title={announcement.title} description={announcement.description}/>
        ))
      }
    </div>
  )
}

export default Dashboard