import React from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import { authContext } from '../../context/AuthContext'
import './Home.css'
import axios from 'axios'

const Home = () => {
	const { handdleLogout } = useContext(authContext)

	useEffect(() => {
		getMe()
	}, [])

	const getMe = async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/tweets', {
				headers: { authorization: localStorage.getItem('access_token') },
			})
			console.log(res)
		} catch (e) {
			console.log(e)
			console.log('fired')
			handdleLogout()
		}
	}

	return (
		<div>
			<h1>Home</h1>
		</div>
	)
}

export default Home
