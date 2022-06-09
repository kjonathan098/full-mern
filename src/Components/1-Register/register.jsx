import React from 'react'
import './register.css'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
	const [name, setName] = useState()
	const [email, setEmail] = useState()
	const [surName, setSurName] = useState()
	const [password, setPassword] = useState()
	const [rePasswrod, setRepasswrord] = useState()
	const [error, setError] = useState()

	const navigate = useNavigate()

	const handleRegister = async () => {
		if (password !== rePasswrod) return setError('Passwords do not match')
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
		<div className="registerMain">
			<div className="formBox">
				<form
					className="form"
					onSubmit={(e) => {
						e.preventDefault()
						handleRegister()
					}}
				>
					<input
						type="text"
						placeholder="name"
						onChange={(e) => {
							setName(e.target.value)
						}}
					/>
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
					<input
						type="text"
						placeholder="re-passwrod"
						onChange={(e) => {
							setRepasswrord(e.target.value)
						}}
					/>
					<input
						type="text"
						placeholder="sur name"
						onChange={(e) => {
							setSurName(e.target.value)
						}}
					/>
				</form>
			</div>
			<div>
				<button onClick={handleRegister}>Register</button>
				{error && <h4>{error}</h4>}
			</div>
		</div>
	)
}

export default Register
