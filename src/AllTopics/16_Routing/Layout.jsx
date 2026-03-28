import React from 'react'
import Nav from './Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>Layout
        <Nav />

        {/* used to render children route */}
        <Outlet /> 
    </div>
  )
}

export default Layout;