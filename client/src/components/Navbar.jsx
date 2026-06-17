import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

  const navigate = useNavigate()

  const token = localStorage.getItem("token")

  const role = localStorage.getItem("role")

  const name = localStorage.getItem("name")

  const logout = () => {

    localStorage.removeItem("token")

    localStorage.removeItem("role")

    localStorage.removeItem("name")

    navigate("/login")

  }

  return (

    <nav className='navbar'>

      <h2>CampusConnect</h2>

      <div className='nav-links'>

        <Link to="/">Home</Link>

        {
          !token
          &&
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        }

        {
          token
          &&
          <>
            <Link to="/dashboard">Dashboard</Link>

            <Link to="/tasks">Tasks</Link>
          </>
        }

        {
          role === "Faculty"
          &&
          <Link to="/students">Students</Link>
        }

        {
          role === "Admin"
          &&
          <Link to="/users">Users </Link>
        }

        {
          token
          &&
          <>
            <button type="button" onClick={logout}>
              Logout
            </button>
          </>
        }
      </div>
    </nav>

  )

}

export default Navbar