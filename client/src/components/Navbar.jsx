import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>

      <h2>CampusConnect</h2>

      <div className='nav-links'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/tasks">Task</Link>
        <Link to="/edit-profile">Profile</Link>
      </div>

    </nav>
  )
}

export default Navbar