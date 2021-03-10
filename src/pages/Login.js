import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

import { setLogin } from '../store/actions/login'

const Login = () => {
    let history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    
    const sendForm = async () => {
        try {
            const res = await axios.post('http://localhost:3001/users/login', {
                email,
                password
            })
    
            console.log(res)

            dispatch(setLogin(res.data.user, res.data.token))

            history.push('/tasks')
            
        }
        catch (err) {
            console.log(err)
        }
        
        
    }


    return (
        <div className="container justify-content-center">
            <br />
            <h1>Tasks app</h1>
            <form>
                <div className="form-group">
                    <label>Email address</label>
                    <input onChange={ e => setEmail(e.target.value) } value={ email } type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input onChange={ e => setPassword(e.target.value) } value={ password } type="password" className="form-control" name="password" placeholder="Password" />
                </div>
                <button onClick={ sendForm } type="button" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login