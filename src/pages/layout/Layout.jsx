import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import Hero from '../../components/hero/Hero'
import About from '../about/About'

const Layout = () => {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <About />
    </div>
  )
}

export default Layout