import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { name, email, age } = useSelector( state => state.login.user )

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Profile</h1>
                
                    Name: { name } <br />
                    Email: { email } <br />
                    Age: { age } <br />
                </div>
            </div>
        </div>
    )
    
}

export default Profile