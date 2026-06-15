import React, { useState } from 'react'
import './Login.css'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'

const Login = () => {

  const [formData,setFormData] = useState({
    email:"",
    password:""
  })

  const [error,setError] = useState({})
  const [success,setSuccess] = useState("")
  const [loading,setLoading] = useState(false)

  const changeHandler = (event) => {
    const {name,value} = event.target
    setFormData({ ...formData, [name]:value})
  }

  const clickHandler = () => {
    console.log("Login button clicked")
  }

  const validations = () => {
    const errorMessage = {}
    if(!formData.email.trim()){
      errorMessage.email = "Email is required"
    }

    if(!formData.password.trim()){
      errorMessage.password = "Password is required"
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
        setSuccess("Login Successful")
        console.log(formData)
      },1500)
    }
  }

  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>

        <InputField type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={changeHandler} />
        {error.email && <p style={{color:"red"}}>{error.email}</p>}

        <InputField type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={changeHandler} />
        {error.password && <p style={{color:"red"}}>{error.password}</p>}

        <CustomButton text="Login" type="submit" onClick={clickHandler} />
      </form>

      {loading && <p>Loading...</p>}
      {success && <p style={{color:"green"}}>{success}</p>}
    </div>
  )
}

export default Login