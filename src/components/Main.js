import React from 'react'
import lofibg from '../assets/lofibg.mp4'
import Typed from 'react-typed'

const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={lofibg} autoPlay loop muted/>
            <div className='content'>
                <Typed className='md:text-5xl sm:text-4xl text-xl font-bold'
                    strings={['Welcome to Cafe Heiwa']}
                    typeSpeed={120}
                    backSpeed={140}
                    loop
                />
            
                {/* <h1 style={{fontSize: '80px'}}>Welcome</h1>
                <p style={{fontSize: '50px'}}>To Cafe Heiwa</p> */}
            </div>
        </div>
    )
}

export default Main
