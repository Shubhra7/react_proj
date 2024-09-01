import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Header />
        {/* Outlet will take the inputs and header-footer will same for ever page */}
        <Outlet />  
        <Footer />
    </>
  )
}

export default Layout