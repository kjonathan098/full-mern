/*

In this lessons were going to register a new user to our twitter app. 

Our user schema from the backend requires this things 

    -name
    -surName
    -Email
    -password 

    * if one of this are missing then our request will be rejected 


A - Make inputs and capture users info (W're not doing it here to keep it clean )


B - Now the route to register a new user is http://localhost:5000/api/auth/

    - make an async function and call axios.post with the url 

    const registerUser = async() => {

        try{
            const res = await axios.post('http://localhost:5000/api/auth/')s
        }
        catch(e){console.log(e.response.data.message)}
    
    }


C - After the url add a "comma" and pass and object with your new user info

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
			console.log(e.response.data.error.message)
		}
	}

    *Remember to write the the key's of the obj exacly how its declared in your schema from the backend 

    FOR NOW WE ARE ONLY CONSOLE LOG THE ERROR MESSAGE OR THE 200 STATUS 
*/

import React from 'react'

const PostwAxios = () => {
	const registerUser = async () => {
		const res = await axios.post('http://localhost:5000/api/auth/', {
			name,
			surname,
			password,
			email,
		})
	}

	return (
		<div>
			<input type="text" placeholder="name" />
			<input type="text" placeholder="surname" />
			<input type="text" placeholder="email" />
			<input type="text" placeholder="password" />
			<input type="text" placeholder="re-password" />
			<button onSubmit={registerUser}>REGISTER</button>
		</div>
	)
}

export default PostwAxios
