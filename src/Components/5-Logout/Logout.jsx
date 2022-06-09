import React from 'react'
import { useContext } from 'react'
import { authContext } from '../../context/AuthContext'
import { useEffect } from 'react'
import axios from 'axios'

const Logout = () => {
	const { handdleLogout } = useContext(authContext)

	return (
		<div>
			<button onClick={handdleLogout}>Logout</button>
		</div>
	)
}

export default Logout
