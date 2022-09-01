import React from 'react'
import lofipfp2 from '../assets/lofipfp2.png'

const PostContainer = () => {
  return (
    <div className='w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2 bg-red-200 '>
      <div className='px-4 mt-4 shadow rounded-lg bg-white'>
        <div className='p-2 border-b border-gray-300'>
          <img src={lofipfp2} className='w-20 h-20 rounded-full' />
          <div >
            <input className='flex-1 w-full bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer' placeholder='What is on your mind?'/>
          </div>
        </div>
        <div className='p-2 flex'>
          <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100'>
            <span className='text-xs sm-text-sm font-semibold text-gray-600'>Upload music</span>
          </div>
          <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100'>
            <span className='text-xs sm-text-sm font-semibold text-gray-600'>Upload image</span>
          </div>
          <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100'>
            <span className='text-xs sm-text-sm font-semibold text-gray-600'>Upload post</span>
          </div>
        </div>
      </div>
      
      <div>
        <div>
          
        </div>
      </div>

    </div>
  )
}

export default PostContainer