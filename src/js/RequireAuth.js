import React from "react"
import { useLocation, Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import {selectCurrentUser } from "./features/auth/authSlice"


const RequireAuth = () => {
    const token = useSelector(selectCurrentUser)
    const location = useLocation()

    return (
        token
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
    )
}
export default RequireAuth
