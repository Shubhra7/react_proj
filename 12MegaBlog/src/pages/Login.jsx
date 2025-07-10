import React from 'react'
import { Login as loginComponent } from '../components'

const Login = () => {
  console.log("Hi from login page");
  
  return (
    <div className='py-8'>
      <loginComponent />
    </div>
  )
}

export default Login
