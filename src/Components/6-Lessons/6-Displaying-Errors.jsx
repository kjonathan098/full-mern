/*

Roey shoed us a way to capture all errors and display them together (name is missing & password & invalid email). Currently my code only display one error at a time. (if name is missing and email as well first it will only display "name is required")

I NEED TO GO BACK TO THIS AND REVIEW HOW TO DO ALL THE ERRORS TOGETHER BUT WITH FORMIK I DONT THINK IT WILL BE NECCESARY 

0.A The most important thing to learn in this lesson is the && functionality of JS 

A - create a useState error state of error to store any error 

    const [error, setError] = useState()


B - Now in your catch block setError to any error you recieve 

C - In JS we have a functionilty call && basically means that if the thing we decalre before is truthy then execute the next code.. if not then ignore it. 

    - Knowing this we can write if use state of error is truthy then display and h4 with the error message 

    {error && <h4>{error}<h4>}




*/

import React from 'react'
import { useState } from 'react'

const PostwAxios = () => {
	const [error, setError] = useState()
	const handleRegister = async () => {
		try {
			const res = await axios.post('http://localhost:5000/api/auth/', {
				email,
				name,
				password,
				surName,
			})
			console.log('fafa')
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
