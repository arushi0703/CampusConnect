import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Tasks from '../pages/Tasks'
import EditProfile from '../pages/EditProfile'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit-profile" element={<EditProfile/>} />
        <Route path="/tasks" element={<Tasks />} />
      </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}

export default AppRoutes