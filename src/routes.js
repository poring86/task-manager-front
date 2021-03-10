import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'


import Login from './pages/Login'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'

import { config } from './config'

import { setLogout } from './store/actions/login'



const Routes = () => {
    const token = useSelector( state => state.login.token )

    const dispatch = useDispatch()

    const logout = async () => {
        try {
            await axios.post(`${config.baseUrl}/users/logout`)

            dispatch(setLogout())
        }
        catch (err){
            console.log(err)
        }
    }
    return (
        <Router>
            <div>
                { token && 
                    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/tasks">Tasks</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/profile">Profile</Link>
                            </li>
                        </ul>
                        <Link to="/" class="btn btn-outline-info my-2 my-sm-0 float-right" type="submit" onClick={ logout }>Logout</Link>
                    </nav>
                }
                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/tasks">
                        <Tasks />
                    </Route>
                    <Route path="/">
                        <Login />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes