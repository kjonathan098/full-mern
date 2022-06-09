import React from 'react'
import { useState } from 'react'
import { authContext } from './9.B-authContext'

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userName, setUserName] = useState(null)

	// The idea is that I can send this function to loggin component and add user name so any component that needs can have access to it

	//LOGIN FUNCTION
	const handleLoging = ({ user, access_token, refresh_token }) => {
		setUserName(user)
		// set access-token
		localStorage.setItem('access_token', access_token)
		//set refresh_token
		localStorage.setItem('refresh_token', refresh_token)
	}

	//LOGOUT FUNCTION

	const handdleLogout = () => {
        isLoggedIn
		localStorage.removeItem('access_token')
		localStorage.removeItem('refresh_token')
	}

	return (
		<authContext.Provider value={{ isLoggedIn, handleLoging, handdleLogout }}>
			{children}
		</authContext.Provider>
	)
}

export default AuthProvider
