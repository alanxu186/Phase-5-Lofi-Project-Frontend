import React from 'react'
import coffeeshop from '../assets/coffeeshop.gif'
import lofipfp5 from '../assets/lofipfp5.jpeg'

const Profile = () => {
  return (
    <div className='shadow'>
      <div className='relative h-96 rounded-b flex justify-center'>
        <img className='object-cover w-full h-full rounded-b' src={coffeeshop} alt='cover' />
        <div className='absolute -bottom-20'>
          <img className='object-cover border-4 border-white w-64 h-64 rounded-full' src={lofipfp5} />
          <div className='text-center mt-6 text-3xl font-bold text-fBlack'>Ken</div>
        </div>
      </div>

    <div>
      <p>Name</p>
      <p>This my bio i guess</p>
      <p>Followers:</p>
      <p>Following:</p>
    </div>

    </div>
  )
}

export default Profile