import React from 'react'
import './Login.css'
import { useState } from 'react'
import axios from 'axios'
import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
	const [password, setPassword] = useState()
	const [email, setEmail] = useState()
	const [error, setError] = useState()
	const [loading, setLoading] = useState(false)
	const navigate = useNavigate()

	const authData = useContext(authContext)

	const handdleLogin = async () => {
		setLoading(true)
		setError('')
		try {
			const res = await axios.post('http://localhost:5000/api/auth/login', {
				email,
				password,
			})
			setLoading(false)
			navigate('/')
			return authData.handdleLogin(res.data)
		} catch (error) {
			console.log(error.response)
			setLoading(false)
			return setError(error.response.data || 'Error')
		}
	}

	return (
		<div className="registerMain">
			<div className="formBox">
				<form
					className="form"
					onSubmit={(e) => {
						e.preventDefault()
						handdleLogin()
					}}
				>
					<input
						type="text"
						placeholder="email"
						onChange={(e) => {
							setEmail(e.target.value)
						}}
					/>
					<input
						type="text"
						placeholder="password"
						onChange={(e) => {
							setPassword(e.target.value)
						}}
					/>
				</form>
			</div>
			<div>
				<button onClick={handdleLogin}>Register</button>
				{error && <h4 style={{ color: 'red' }}>{error}</h4>}
				{loading && <h4>Loading...</h4>}
			</div>
		</div>
	)
}

export default Login
