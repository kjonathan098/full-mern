import './App.css'
import {NavLink, Route, Routes} from 'react-router-dom'
import Home from './Components/3-Home-Page.jsx/Home'
import Login from './Components/2-Login/Login'
import Register from './Components/1-Register/register'
import AuthProvider from './context/AuthProvider'
import AuthRoute from './Components/4-AuthRoute.jsx/AuthRoute'
import Logout from './Components/5-Logout/Logout'

function App() {
	return (
		<AuthProvider>
			<div className="App">
				<div className="navBar">
					<div className="menuMain">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/Login">Login</NavLink>
						<NavLink to="/Register">Register</NavLink>
					</div>
					<div>
						<Logout />
					</div>
				</div>
				<div>
					<Routes>
						<Route
							path="/"
							element={
								<AuthRoute>
									<Home />
								</AuthRoute>
							}
						/>
						<Route path="/Login" element={<Login />} />
						<Route path="/Register" element={<Register />} />
					</Routes>
				</div>
			</div>
		</AuthProvider>
	)
}

export default App
