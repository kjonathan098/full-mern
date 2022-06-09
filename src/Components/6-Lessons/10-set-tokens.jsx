/*

Now that we have our Auth Context with a function to handdle login and pass info to other ones. Lets use that auth context to save our tokens and pass it it on


We will store aour access_token & refresh_token in our local storage. 

0.A We will create a function inside our auth context that will take a parameter and save the a/r tokens in local storage 

A - Call local storage and pass two arguments 

  - name of the key
  - value of the key 

  localstorage.setItem('access_token' , access_token)
  localstorage.setItem('refresh' , refresh_token)


  const handdleLogin = (res) => {
		localStorage.setItem('access_token', res.access_token)
		localStorage.setItem('refresh_token', res.refresh_token)
    setIsLoggedIn(true)
	}

B - This function will be passed as a value and extract in the login file to send back the resp 


  <------------------------ LOGIN COMPONENT ---------------------------------->

  const authData = useContext(authContext)

	const handdleLogin = async () => {

		try {
			const res = await axios.post('http://localhost:5000/api/auth/login', {
				email,
				password,
			})

			return authData.handdleLogin(res.data)

		} 
    catch (error) {
			setLoading(false)
			return setError(error.response.data.error.message)
		}
	}

  <------------------------ LOGIN COMPONENT ---------------------------------->


C - Now lets create a state in our authContext to check if a user is logged in 

  - if state is false then user is not 
  - if state is true then user is logged in 
  - this state will be shared to any component who needs it 

  const [isLoggedIn, setIsLoggedIn] = useState(false)


D - We will use a useEffect to check if access_token exist in our localStorage

  - if it does then we can change isLoggedIn to true 


  	useEffect(() => {
		const access_token = localStorage.getItem('access_token')
		if (access_token) setIsLoggedIn(true)
	}, [])




*/

import React, { useEffect } from 'react'
import { useState } from 'react'
import { authContext } from './9.B-authContext'

const AuthProvider = ({ children }) => {
	const [isLoggedIn, setIsLoggedIn] = useState(false)
	const [userName, setUserName] = useState(null)

	useEffect(() => {
		const access_token = localStorage.getItem('access_token')
		if (access_token) return setIsLoggedIn(true)
	}, [])

	// The idea is that I can send this function to loggin component and add user name so any component that needs can have access to it
	const handleLoging = (res) => {
		setUserName(res.user.name || null)

		// set access-token
		//set refresh_token
		localStorage.setItem('access_token', res.access_token)
		localStorage.setItem('refresh_token', res.refresh_token)

		setIsLoggedIn(true)
	}

	return (
		<authContext.Provider value={{ isLoggedIn, handleLoging }}>
			{children}
		</authContext.Provider>
	)
}

export default AuthProvider
