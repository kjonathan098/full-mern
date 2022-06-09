/*

Now that we have our Auth.Provider and state all setup lets see a technique to protect routes and blocking them depending if there is an active user 


0.A - Basically the idea is to create a component that validates wether a user is Logged In or not 

    - if user is logged in then we call the Home page component 
    - if not we re-direct to login

    ITS A BIT CONFUSING BUT IF YOU WATCH THE CODE THEN IT MAKE SENSE 


A - Create a component called AuthRoute 

    -This will be a wrapper 

B - The first thing we need to do is import our authContext to read wether isLoggedIn is true or false 

    const authData = useContext(authContext)

        authData.isLoggedIn = ...?

    * ANOTHER TECHNIQUE IS TO DECONSTRUCT AND GET THE VALUE YOU WANT STRAIGH AWAY

        const {isLoggedIn} = useContext(authContext)

        isLoggedIn = ...? 

C - Create your if statements and we will render any children (we will do this below)

    const AuthRoute = ({ children }) => {

	const authData = useContext(authContext)

        if (authData.isLoggedIn) {
            return children
            }
	
        else return 'Go to loggin'
    }

D - Import Navigate && if user is not login then navigate to login page 

    import { Navigate } from 'react-router-dom'

    const AuthRoute = ({ children }) => {

	const authData = useContext(authContext)

        if (authData.isLoggedIn) {
            return children
            }
	
	   else return <Navigate to={'/login'} />
    }

E - Also extract loading from authData 

    - if loading is true we want to render nothing. This is bc while app is loading and our authcontext is verifying if a user is logged in our local storage "isLoggedIn" state is false then it will re-direct to us to login page. So if is loading we can prevent that 

    -LOOK BELOW IN CODE FOR EXAMPLE

 - Now go to your app and in the route home wrap <Home/> in <AuthRoute></AuthRoute>

	<Route path="/" element={ <AuthRoute><Home /></AuthRoute>} />





BASICALLY ANY CHILD FROM AUTHROUTE WILL BE RENDERED IF authData.isLoggedIn IS TRUE ELSE IT WILL RE-DIRECT. 

THIS CAN BE APPLIED TO ANY ROUTE YOU WANT TO PROTECT





*/

import React from 'react'
import { useContext } from 'react'
import { authContext } from './9.B-authContext'
import { Navigate } from 'react-router-dom'

const AuthRoute = ({ children }) => {
	const authData = useContext(authContext)
	if (authData.loading) return <>Loading...</>
	if (authData.isLoggedIn) {
		return children
	}
	return <Navigate to={'/login'} />
}

export default AuthRoute
