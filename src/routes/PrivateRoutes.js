import React from 'react'
import { Navigate } from 'react-router-dom'

export const PrivateRoutes = ({children}) => {
    const token = localStorage.getItem('token');
	const isAuthenticated = !!token;

    return (
        (isAuthenticated)?
        children :
        <Navigate to='/' />
    )
}