import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
const ProtectedLogin = ({children}) => {
    const location = useLocation()
    const token =localStorage.getItem("token")
    if(!token)
    {
        return <Navigate to= "/" state={{from:location}} replace/>
    }
  return children
}

export default ProtectedLogin
