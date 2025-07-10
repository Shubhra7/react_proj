import React from 'react'
import { Login as LoginComponent } from '../components'

const Login = () => {
  console.log("Hi from login page");
  
  return (
    <div className='py-8'>
      <LoginComponent />
    </div>
  )
}

export default Login
