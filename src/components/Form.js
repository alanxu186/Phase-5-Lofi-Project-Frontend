import React from 'react'

const Form = () => {
    return (
        <div className='bg-[#E2CCC6] px-10 py-20 rounded-3xl border-gray-200'>
            <h1 className='text-5xl font-semibold'>Welcome Back</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Welcome back! Please enter your details.</p>
            <div className='mt-8'>
                <div className='text-lg font-medium'>
                    <label>Email</label>
                    <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your email'/>
                </div>
                <div className='text-lg font-medium'>
                    <label>Password</label>
                    <input className='w-full border-2 border-gray-500 rounded-xl p-4 mt-1 bg-transparent' placeholder='Enter your password' type='password'/>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-4 rounded-xl bg-[#EF798E] text-white text-lg font-bold'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Form