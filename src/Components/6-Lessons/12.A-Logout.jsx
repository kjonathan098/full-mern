/*

Lets handdle logut 

The idea of a logout button is that when its clicked then it will delete the store tokens. This will mean that in our app logic a user is not logged in and automatically re-directing to login page and securing all other routes who require login users 


A - We will create a component with logout button 

B - create our auth context     

    import { useContext } from 'react'
    import { authContext } from './9.B-authContext'

    const authData = useContext(authContext) || const {handleLogout} = useContext(authContext)

C - In our AuthProvider we will add another function to handdle logout event & pass ass a value the function

	const handleLogout = () => {}

	<authContext.Provider value={{ isLoggedIn, handleLoging , handleLogout}}>


D - The logic of the logut functoin is to tell local storage to delete the a/r tokens & set isLoggedIn to false 

		const handleLogout = () => {
			
			setIsLoggedIn(false)
			localStorage.removeItem('access_token')
			localStorage.removeItem('refresh_token')
		}



*/

import React from 'react'
import { createContext } from 'react'
import { authContext } from './9.B-authContext'

const Logout = () => {
	const { handleLogout } = createContext(authContext)

	return (
		<div>
			<button onClick={handleLogout}>Logout</button>
		</div>
	)
}

export default Logout
