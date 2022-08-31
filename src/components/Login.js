import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <div>
                <h1>Sign In</h1>
                <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <button onSubmit={handleSubmit}>Sign In</button>

                <h1>Create an account</h1>
                <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
            </div>
        </div>
    )
}

export default Login