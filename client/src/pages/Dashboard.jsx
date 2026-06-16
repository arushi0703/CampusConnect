import React, { useEffect, useState } from 'react'
import api from '../services/api'
import UserCard from '../components/UserCard'
import TaskCard from '../components/TaskCard'
import './Dashboard.css'

const Dashboard = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [tasks, setTasks] = useState([])

  useEffect(() => {

    fetchUsers()
    fetchTasks()

  }, [])

  const fetchTasks = async () => {

    try {

      const response = await api.get("/tasks")

      setTasks(response.data.data)

    }
    catch (error) {

      console.log(error)

    }

  }

  const fetchUsers = async () => {

    try {

      const response = await api.get("/students")

      setUsers(response.data.data)

      setLoading(false)

    }
    catch (error) {

      setError("Failed to load users")

      setLoading(false)

    }

  }

  if (loading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (

    <div className='dashboard'>

      <h2>Registered Students</h2>

      {
        users.length === 0
          ?
          <p>No users found</p>
          :
          users.map(user => (

            <UserCard
              key={user._id}
              user={user}
              refreshUsers={fetchUsers}
            />

          ))
      }

      <h2>Tasks</h2>

      {
        tasks.length === 0
          ?
          <p>No tasks available</p>
          :
          tasks.map(task => (

            <TaskCard
              key={task._id}
              task={task}
              refreshTasks={fetchTasks}
            />

          ))
      }

    </div>

  )

}

export default Dashboard