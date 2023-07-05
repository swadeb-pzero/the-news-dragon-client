import React from 'react'
import NavigationBar from '../Pages/Shared/NavigationBar/NavigationBar'
import { Outlet } from 'react-router-dom'

const LoginLayOut = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  )
}

export default LoginLayOut
