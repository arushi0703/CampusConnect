import React, { useState } from 'react'
import api from '../services/api'

const EditProfile = () => {

  const [userId,setUserId] = useState("")
  const [name,setName] = useState("")
  const [message,setMessage] = useState("")

  const submitHandler = async (event) => {

    event.preventDefault()

    try{

      await api.put(`/students/${userId}`,{
        name:name
      })

      setMessage("Profile Updated Successfully")

    }
    catch(error){

      setMessage("Update Failed")

    }

  }

  return (

    <div>

      <h2>Edit Profile</h2>

      <form onSubmit={submitHandler}>

        <input type="text" placeholder="User ID" value={userId} onChange={(e)=>setUserId(e.target.value)} />

        <input type="text" placeholder="New Name" value={name} onChange={(e)=>setName(e.target.value)} />

        <button type="submit">
          Update Profile
        </button>

      </form>

      {message && <p>{message}</p>}

    </div>

  )

}

export default EditProfile