/*

Now that we have succesfully register and logged in we recieved our token. 

Home page should only render if user is actaully logged in 


TO DO THIS WE'RE FINALLY GONNA TACKlE HOW TO USE "USECONTEXT" IS NOT AS HARD AS IT SEEMS 

  * This context will hold various states and functions that will be usefull to other components 

A - first thing well do as create a folder called context (in our case 9.B) & create file called authContext.jsx

B - import hook to file 

	import { createContext } from 'react'

C - Now declare your context and call the function createContext 

	export const authContext = createContext({})

D - add another file in context folder that will be a react function and will  provide the values & functions to others (9.C)

	AuthProvider.jsx

E - import AuthContext 

	import {authContext} from 'filepath'

F - Create a react function that has and argument children and returns authContext.Provider as a wrapper 

	import React from 'react'
	import { authContext } from './9.B-authContext'

	const AuthProvider = ({ children }) => {
		return (
			<authContext.Provider>
				{children}
			</authContext.Provider>
		)
	}

	export default AuthProvider


G - Now we can add any state and pass it as a value


	import React from 'react'
	import { authContext } from './9.B-authContext'

	const AuthProvider = ({ children }) => {
		const [isLoggedIn, setIsLoggedIn] = useState(false)
		return (
			<authContext.Provider value ={{isLoggedIn}}>
				{children}
			</authContext.Provider>
		)
	}

	export default AuthProvider


H - Go to your app file & import AuthProvider 

	import AuthProvider from 'filepath'

J - Finally wrap all the components inside AuthProvider 

	<AuthProvider>
		<OtherComponents>
	</AuthProvider> 

K - Now any other component has access to any function or value from AuthProvider to access them just declare a new constant and assign useContext(authContext)

	`const authData = useContext(authContext)`

	EXAMPLE 

	HomePage component 

	const HomePage = () => {
		const authData = useContext(authContext)

		return(
			<div>
			{authData.isLoggedIn && <h4>user allow to view</h4>}
			{!authData.isLoggedIn && <h4>re-direct to loggin page </h4>}
			</div>
		)
	}

CREATE A LOADING STATE AND GOT TO FILE 11 TO UNDERSTAND WHY


*/

import React from 'react'
import {useContext} from 'react'
import {useState} from 'react'
import {authContext} from './9.B-authContext'
import './Home.css'

const Home = () => {
	const authData = useContext(authContext)
	console.log(authData.isLogedIn)
	return (
		<div>
			{authData.isLogedIn && <h4>User is logged in show homepage</h4>}
			{!authData.isLogedIn && <h4>No user logged in re-direct</h4>}
		</div>
	)
}

export default Home
