import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const Protectedroutes = () => {
    const auth = localStorage.getItem('loggedIn')
    return auth ? <Outlet/> : Navigate('/Login')
  
}

export default Protectedroutes
