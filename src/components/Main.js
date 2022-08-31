import React from 'react'
import lofibg from '../assets/lofibg.mp4'

const Main = () => {
    return (
        <div className='main'>
            <div className='overlay'></div>
            <video src={lofibg} autoPlay loop muted/>
            <div className='content'>
            
                {/* <h1 style={{fontSize: '80px'}}>Welcome</h1>
                <p style={{fontSize: '50px'}}>To Cafe Heiwa</p> */}
            </div>
        </div>
    )
}

export default Main
