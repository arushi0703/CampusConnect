import React, { useState } from 'react'
import api from '../services/api'

const Tasks = () => {

  const [createData,setCreateData] = useState({
    title:"",
    description:"",
    assignedUser:""
  })

  const [updateData,setUpdateData] = useState({
    taskId:"",
    title:"",
    description:"",
    assignedUser:""
  })

  const [message,setMessage] = useState("")

  const createChangeHandler = (event) => {

    const {name,value} = event.target

    setCreateData({
      ...createData,
      [name]:value
    })

  }

  const updateChangeHandler = (event) => {

    const {name,value} = event.target

    setUpdateData({
      ...updateData,
      [name]:value
    })

  }

  const createTask = async (event) => {

    event.preventDefault()

    try{

      const response = await api.post("/tasks",{

        ...createData,

        status:"Pending"

      })

      setMessage(response.data.message)

      setCreateData({
        title:"",
        description:"",
        assignedUser:""
      })

    }
    catch(error){

  console.log(error.response.data)

  setMessage("Task Creation Failed")

}

  }

  const updateTask = async (event) => {

    event.preventDefault()

    try{

      await api.put(`/tasks/${updateData.taskId}`,{

        title:updateData.title,

        description:updateData.description,

        assignedUser:updateData.assignedUser

      })

      setMessage("Task Updated Successfully")

      setUpdateData({
        taskId:"",
        title:"",
        description:"",
        assignedUser:""
      })

    }
    catch(error){

      setMessage("Task Update Failed")

    }

  }

  return (

    <div>

      <br />
      <h2>Create Task</h2>

      <form onSubmit={createTask}>

        <input type="text" name="title" value={createData.title} placeholder="Title" onChange={createChangeHandler} />

        <input type="text" name="description" value={createData.description} placeholder="Description" onChange={createChangeHandler} />

        <input type="text" name="assignedUser" value={createData.assignedUser} placeholder="Assigned User" onChange={createChangeHandler} />
        <br />
        <button type="submit">Create Task</button>

      </form>

      <hr />

      <br /><br />

      <h2>Update Task</h2>

      <form onSubmit={updateTask}>

        <input type="text" name="taskId" value={updateData.taskId} placeholder="Task ID" onChange={updateChangeHandler} />

        <input type="text" name="title" value={updateData.title} placeholder="New Title" onChange={updateChangeHandler} />

        <input type="text" name="description" value={updateData.description} placeholder="New Description" onChange={updateChangeHandler} />

        <input type="text" name="assignedUser" value={updateData.assignedUser} placeholder="Assigned User" onChange={updateChangeHandler} />

        <br />
        <button type="submit">Update Task</button>

      </form>

      {message && <p>{message}</p>}

    </div>

  )

}

export default Tasks