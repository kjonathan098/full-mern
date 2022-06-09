/*

Now lets say you successfully registered a new user.. you should auto send the user to the login page so we can generate a token for him 


A - import 

    import {useNavigate} from 'react-router-dom'

B - inside your react function component call : 

    const navigate = useNavigate()

C - In your try block if everything is ok then call navigate and in the () write what page you want ti re-direct

    navigate('/login')

*/

import { useNavigate } from 'react-router-dom'
const navigate = useNavigate()

import React from 'react'
import { useState } from 'react'

const PostwAxios = () => {
	const [error, setError] = useState()
	const navigate = useNavigate()

	const handleRegister = async () => {
		try {
			const res = await axios.post('http://localhost:5000/api/auth/', {
				email,
				name,
				password,
				surName,
			})
			navigate('/login')
		} catch (e) {
			setError(e.response.data.error.message)
		}
	}

	return (
		<div>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="surname" />
			<input type="text" placeholder="email" />
			<input type="text" placeholder="password" />
			<input type="text" placeholder="re-password" />
			{error && <h4>{error}</h4>}
			<button onSubmit={registerUser}>REGISTER</button>
		</div>
	)
}

export default PostwAxios
