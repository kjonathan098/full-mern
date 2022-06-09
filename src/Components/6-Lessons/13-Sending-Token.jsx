/*

Up until now we havent send a request to a url that needs a valid token 

    - What we did was send request to register and saved our user in DB 
    - Login our user and received a token & saved it in our local storage
    - Home page checks of a token is saved in local storage if it does then its ok to access if not then re-direct 

    BUT THE AUTH-ROUTE UP UNTIL NOW IT DOESNT VERIFY THE TOKEN SO IT DOESNT MATTER WHAT YOU PUT IN THERE AS LONG AS "ACCES_TOKEN" EXISTS IT WILL ACCEPT IT 

Now lets send a request to server that needs a valid token to get a ok response 

IN our Home component lets load the tweets from http://localhost:5000/api/tweets 

    - this route goes through a middleware that expects to recieve a token in the header as "Authorization"
    * if no token provided it will return error 
    * if decoded is good it will continue to fetch the tweets 
    * if you sent decoded contains token.refresh then it will return ('please login)
    * if any other error it will return error 


THE logic in our home component will be 

    - When Home is loaded we will do a useEffect to fetch tweets 
    - fetchTweets is an axios.get method with key of Authorization and acces_token as value 
    - if there is any error ( invalid token, etc. ) we will call handdleLogout from our Auth context and re-direct user to login page && delete any token saved


A - In home page file create context 

    const { handdleLogout } = useContext(authContext)

B - Create request method 

    const getTweets = async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/tweets ')
            -------> C STEP <--------------
		} catch (e) {
			console.log(e)
			console.log('fired')
			handdleLogout()
		}
	}

C - Add a "comma" after request url pass on object that has an object called headers wich contains our access_token

    {
        headers{
            authorization : localstorage.getItem('access_token')
        }
    }

D - Create your useEffect and call getTweets()

    	useEffect(() => {
		getTweets()
	    }, [])






A - 

*/

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
