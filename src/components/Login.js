import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import coffeeshop from "../assets/coffeeshop.gif"
import { loginStart, loginFailure, loginSuccess, logout } from '../redux/userSlice'

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    // const [form, showForm] = useState(false)

    // const handleForm = () => {
    //     showForm(!form)
    // }

    const handleLogin = async (e) => {
        e.preventDefault()
        dispatch(loginStart())
        try {
            const res = await axios.post('http://localhost:4000/api/auth/signin', {email,password})
            dispatch(loginSuccess(res.data))
        } catch (err) {
            dispatch(loginFailure())
        }
    }


    return (
        <div className='flex w-full h-screen'>
            {/* <video src={coffeeshop}/> */}
            <div className='w-full flex items-center justify-center '>
                <form className='bg-[#E2CCC6] px-10 py-20 rounded-3xl border-gray-200'>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
                    <div className='mt-8'>
                        <div className='text-lg font-medium'>
                            <label>Email</label>
                            <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' type='email' required onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='text-lg font-medium'>
                            <label>Password</label>
                            <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' required onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold' onClick={handleLogin}>Login</button>
                        </div>
                    </div>
                </form>

                {/* <div className='w-full flex items-center justify-center '>
                    <div className='bg-[#E2CCC6] px-10 py-20 rounded-3xl border-gray-200'>
                        <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                        <p className='font-medium text-lg text-gray-500 mt-4'>Create your account!.</p>
                        <div className='mt-8'>
                            <div className='text-lg font-medium'>
                                <label>Name</label>
                                <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your name' onChange={(e) => { setName(e.target.value) }} />
                            </div>

                            <div className='text-lg font-medium'>
                                <label>Email</label>
                                <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                            </div>

                            <div className='text-lg font-medium'>
                                <label>Password</label>
                                <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
                            </div>
                            <div className='mt-8 flex flex-col gap-y-4'>
                                <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold'>Create account</button>
                            </div>
                        </div>
                    </div>

                </div> */}
            </div>
        </div>
    )
}

export default Login