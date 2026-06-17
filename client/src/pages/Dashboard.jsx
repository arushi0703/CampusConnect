import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import api from '../services/api'
import UserCard from '../components/UserCard'
import TaskCard from '../components/TaskCard'
import './Dashboard.css'

const Dashboard = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [tasks, setTasks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [assignedUserFilter, setAssignedUserFilter] = useState("")
  const [dateFilter, setDateFilter] = useState("")

  const navigate = useNavigate()

  useEffect(() => {

    const token = localStorage.getItem("token")

    if (!token) {
      navigate("/login")
      return
    }

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

  const filteredUsers = users.filter((user) =>

    user.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    ||

    user.email
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

  )

  const filteredTasks = tasks.filter((task) => {

    const statusMatch =

      statusFilter === ""

      ||

      task.status === statusFilter

    const userMatch =

      assignedUserFilter === ""

      ||

      task.assignedUser
        .toLowerCase()
        .includes(
          assignedUserFilter.toLowerCase()
        )

    const dateMatch =

      dateFilter === ""

      ||

      new Date(task.createdAt)
        .toISOString()
        .split("T")[0] === dateFilter

    return (
      statusMatch
      &&
      userMatch
      &&
      dateMatch
    )

  })

  const totalUsers = users.length

  const totalTasks = tasks.length

  const completedTasks = tasks.filter(

    task => task.status === "Completed"

  ).length

  const pendingTasks = tasks.filter(

    task => task.status === "Pending"

  ).length

  return (

    <div className='dashboard'>

      <h3>Total Users: {totalUsers}</h3>

      <h3>Total Tasks: {totalTasks}</h3>

      <h3>Completed Tasks: {completedTasks}</h3>

      <h3>Pending Tasks: {pendingTasks}</h3>
      <br />

      <input type="text" placeholder="Search Student By Name Or Email" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} />
      <br /><br />
      <h2>Registered Students</h2>

      {
        filteredUsers.length === 0 ? <p>No Students Found</p> :
          filteredUsers.map((user) => (

            <UserCard
              key={user._id}
              user={user}
              refreshUsers={fetchUsers}
            />

          ))
      }
      <br />

      <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>

        <option value="">All Status</option>

        <option value="Pending">Pending</option>

        <option value="In Progress">In Progress</option>

        <option value="Completed">Completed</option>

      </select>
      <br /><br />
      <input type="text" placeholder="Filter By Assigned User" value={assignedUserFilter} onChange={(event) => setAssignedUserFilter(event.target.value)} />
      <input type="date" value={dateFilter} onChange={(event) => setDateFilter(event.target.value)} />
      <br /> <br />
      <h2>Tasks</h2>

      {
        tasks.length === 0 ? <p>No tasks available</p> :
          filteredTasks.map((task) => (

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