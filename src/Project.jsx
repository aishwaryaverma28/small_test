import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from './Navigation'

const Project = () => {
  return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
  )
}

export default Project