import React from 'react'
import api from '../services/api'
import './UserCard.css'

const UserCard = ({user,refreshUsers}) => {

  const deleteUser = async () => {

    try{

      await api.delete(`/students/${user._id}`)

      alert("User Deleted Successfully")

      refreshUsers()

    }
    catch(error){

      alert("Failed To Delete User")

    }

  }

  return (

    <div className='user-card'>

      <h3>{user.name}</h3>

      <p>Email: {user.email}</p>

      <p>
        Registered:
        {" "}
        {new Date(user.registrationDate).toLocaleDateString()}
      </p>

      <button onClick={deleteUser}>
        Delete User
      </button>

    </div>

  )

}

export default UserCard