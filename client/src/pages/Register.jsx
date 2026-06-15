import React, { useState } from 'react'
import './Register.css'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

const Register = () => {

  const [formData,setFormData] = useState({ name:"", email:"", password:"", confirmPassword:""})
  const [error,setError] = useState({})
  const [success,setSuccess] = useState("")
  const [loading,setLoading] = useState(false)

  const changeHandler = (event) => {
    const {name,value} = event.target
    setFormData({...formData, [name]:value})
  }

  const clickHandler = () => {
    console.log("Register button clicked")
  }

  const validations = () => {
    const errorMessage = {}
    if(!formData.name.trim()){
      errorMessage.name = "Name is required"
    }

    if(!formData.email.trim()){
      errorMessage.email = "Email is required"
    }
    else if(!/\S+@\S+\.\S+/.test(formData.email)){
      errorMessage.email = "Invalid email format"
    }

    if(!formData.password.trim()){
      errorMessage.password = "Password is required"
    }
    else if(formData.password.length < 6){
      errorMessage.password = "Password must be at least 6 characters"
    }

    if(!formData.confirmPassword.trim()){
      errorMessage.confirmPassword = "Confirm Password is required"
    }
    else if(formData.password !== formData.confirmPassword){
      errorMessage.confirmPassword = "Passwords do not match"
    }
    
    return errorMessage
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const validErrors = validations()
    if(Object.keys(validErrors).length > 0){
      setError(validErrors)
      setSuccess("")
    }
    else{
      setError({})
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        setSuccess("Registration Successful")
        console.log(formData)
      },1500)
    }
  }

  return (
    <div className='register'>
      <h2>Register</h2>
      <form onSubmit={submitHandler}>

        <InputField type="text" name="name" placeholder="Enter Name" value={formData.name} onChange={changeHandler} />
        {error.name && <p style={{color:"red"}}>{error.name}</p>}

        <InputField type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={changeHandler} />
        {error.email && <p style={{color:"red"}}>{error.email}</p>}

        <InputField type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={changeHandler} />
        {error.password && <p style={{color:"red"}}>{error.password}</p>}

        <InputField type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={changeHandler} />
        {error.confirmPassword && <p style={{color:"red"}}>{error.confirmPassword}</p>}

        <CustomButton text="Register" type="submit" onClick={clickHandler} />
      </form>

      {loading && <p>Loading...</p>}
      {success && <p style={{color:"green"}}>{success}</p>}
    </div>
  )
}

export default Register