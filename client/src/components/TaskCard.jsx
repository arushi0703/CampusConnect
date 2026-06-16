import React from 'react'
import api from '../services/api'
import './TaskCard.css'

const TaskCard = ({task,refreshTasks}) => {

  const deleteTask = async () => {

    try{

      await api.delete(`/tasks/${task._id}`)

      alert("Task Deleted Successfully")

      refreshTasks()

    }
    catch(error){

      alert("Failed To Delete Task")

    }

  }

  return (

    <div className='task-card'>

      <h3>{task.title}</h3>

      <p>{task.description}</p>

      <p>Status: {task.status}</p>

      <p>Assigned To: {task.assignedUser}</p>

      <button onClick={deleteTask}>
        Delete Task
      </button>

    </div>

  )

}

export default TaskCard