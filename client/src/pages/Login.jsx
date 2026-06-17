import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import './LoginRegister.css'
import InputField from '../components/InputField'
import CustomButton from '../components/CustomButton'
import api from '../services/api'

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const [error, setError] = useState({})
  const [success, setSuccess] = useState("")
  const [loading, setLoading] = useState(false)

  const changeHandler = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const clickHandler = () => {
    console.log("Login button clicked")
  }

  const validations = () => {
    const errorMessage = {}
    if (!formData.email.trim()) {
      errorMessage.email = "Email is required"
    }

    if (!formData.password.trim()) {
      errorMessage.password = "Password is required"
    }
    return errorMessage
  }

  const submitHandler = async (event) => {
    event.preventDefault()
    const validErrors = validations()
    if (Object.keys(validErrors).length > 0) {
      setError(validErrors)
      return
    }
    try {
      setLoading(true)
      const response = await api.post("/students/login", {
        email: formData.email,
        password: formData.password
      })
      setLoading(false)
      setError({})
      localStorage.setItem(
        "token",
        response.data.token
      )
      setSuccess(response.data.message)
      setTimeout(() => {
        navigate("/")
      }, 1000)

    }
    catch (error) {
      setLoading(false)
      setSuccess("")
      setError({
        api: error.response?.data?.message || "Login Failed"
      })
    }
  }
  return (
    <div className='login'>
      <h2>Login</h2>
      <form onSubmit={submitHandler}>

        <InputField type="email" name="email" placeholder="Enter Email" value={formData.email} onChange={changeHandler} />
        {error.email && <p style={{ color: "red" }}>{error.email}</p>}

        <InputField type="password" name="password" placeholder="Enter Password" value={formData.password} onChange={changeHandler} />
        {error.password && <p style={{ color: "red" }}>{error.password}</p>}

        <CustomButton text="Login" type="submit" onClick={clickHandler} />
      </form>

      {error.api && (<p style={{ color: "red" }}>{error.api}</p>)}
      {loading && <p>Loading...</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </div>
  )
}

export default Login