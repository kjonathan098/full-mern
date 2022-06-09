import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { authContext } from '../../context/AuthContext'

const AuthRoute = ({ children }) => {
	const { isLoggedIn, loading } = useContext(authContext)

	if (loading) return <>loading</>
	else if (isLoggedIn) return children
	else return <Navigate to={'/login'} />
}

export default AuthRoute
