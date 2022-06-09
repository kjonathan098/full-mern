import { useState } from 'react'
import { authContext } from './AuthContext'
import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsloggedin] = useState(false)
	const [loading, setIsLoading] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		setIsLoading(true)
		const access_token = localStorage.getItem('access_token')
		if (access_token) setIsloggedin(true)
		setIsLoading(false)
		navigate('/')
	}, [])

	// LOGIN FUNCTION
	const handdleLogin = (res) => {
		localStorage.setItem('access_token', res.access_token)
		localStorage.setItem('refresh_token', res.refresh_token)
		setIsloggedin(true)
	}

	//LOGOUT

	const handdleLogout = () => {
		console.log('loggin out')
		setIsloggedin(false)
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
	}

	return (
		<authContext.Provider
			value={{ loading, isLoggedIn, handdleLogin, handdleLogout }}
		>
			{children}
		</authContext.Provider>
	)
}

export default AuthProvider
