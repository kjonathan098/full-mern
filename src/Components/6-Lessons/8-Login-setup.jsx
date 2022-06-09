/*

Now we have our loggin setup lets do the same and do a post request with axios to login and handle the next steps 

*/

import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const Login = () => {
	const [error, setError] = useState()

	const handdleLogin = async () => {
		try {
			const res = await axios.post('http://localhost:5000/api/auth/login', {
				name,
				password,
			})
		} catch (error) {
			setError(error.response.data.error.message)
		}
	}
	return (
		<div>
			<input type="text" placeholder="email" />
			<input type="text" placeholder="password" />
			<button>Login</button>
			{error && <h4>{error}</h4>}
		</div>
	)
}

export default Login
