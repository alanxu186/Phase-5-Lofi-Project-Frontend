import React, { useState } from 'react'
import Form from './Form'
import coffeeshop from "../assets/coffeeshop.gif"

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [form, showForm] = useState(false)

    const handleForm = () => {
        showForm(!form)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className='flex w-full h-screen'>
            {/* <video src={coffeeshop}/> */}
            <div className='w-full flex items-center justify-center '>
                <div className='bg-[#E2CCC6] px-10 py-20 rounded-3xl border-gray-200'>
                    <h1 className='text-5xl font-semibold'>Welcome Back</h1>
                    <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
                    <div className='mt-8'>
                        <div className='text-lg font-medium'>
                            <label>Email</label>
                            <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email' onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className='text-lg font-medium'>
                            <label>Password</label>
                            <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password' onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <div className='mt-8 flex flex-col gap-y-4'>
                            <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold'>Login</button>
                        </div>
                    </div>
                </div>

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
                                <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold'>Login</button>
                            </div>
                        </div>
                    </div>

                </div> */}

                {/* <div className='hidden relative lg:flex w-1/2 h-full items-center justify-center bg-gray-200'>
                <div className='w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full'></div>
                <div className='w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg'></div>
            </div> */}

            </div>
            {/* // <div>
        //     <div>
        //         <h1>Sign In</h1>
        //         <input placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        //         <input placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        //         <button onSubmit={handleSubmit}>Sign In</button>

        //         <h1>Create an account</h1>
        //         <input placeholder='Name' onChange={(e) => setName(e.target.value)} />
        //     </div>
        // </div> */}
        </div>
    )
}

export default Login