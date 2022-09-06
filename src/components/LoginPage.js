import React from 'react'
import Login from './Login'
import Register from './Register'
import axios from 'axios'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginStart, loginFailure, loginSuccess} from '../redux/userSlice'

const LoginPage = () => {
    const { currentUser } = useSelector(state => state.user)


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [register, setRegister] = useState(false)
    const dispatch = useDispatch()

    // const showRegister = () => {
    //     setRegister(!register)
    // }


    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const res = await axios.post('http://localhost:4000/api/auth/signin', { email, password })
            dispatch(loginSuccess(res.data))
        } catch (err) {
            dispatch(loginFailure())
            alert('Wrong Credentials!')
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:4000/api/auth/signup',{name, email, password})
            console.log(res.data)
        } catch (err) {
            alert('Account already taken!')
            // console.log('account has already been taken!')
        }

    }

    return (
        <div>
        {!currentUser ? 
            <Login handleLogin={handleLogin} setEmail={setEmail} setPassword={setPassword}/>

            :

            <Register setName={setName} setEmail={setEmail} setPassword={setPassword} handleRegister={handleRegister} />
        }
        </div>
    )
}

export default LoginPage