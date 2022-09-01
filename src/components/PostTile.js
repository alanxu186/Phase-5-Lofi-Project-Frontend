import React from 'react'
import lofipfp2 from '../assets/lofipfp2.png'

const PostTile = () => {
  return (
    <div>

      <div className='px-4 mt-4 shadow rounded-lg bg-white'>
        <div className='p-2 border-b border-gray-300'>
          <img src={lofipfp2} className='w-10 h-10 rounded-full' />
          <div >
            <input className='flex-1 w-full bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer' placeholder='What is on your mind?' />
          </div>
        </div>
        <div className='p-2 flex mb-5'>
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

      <div className='shadow bg-white'>

        <div className='flex items center justify-between px-4 py-2'>
          <div className='flex space-x-2 items-center'>
            <div className='relative'>
              <img src={lofipfp2} className='w-10 h-10 rounded-full' />
              <span className='bg-green-500 w-3 h-3 rounded-full absolute right-0 top-3/4 border-white border-2'></span>
            </div>

            <div>
              <div className='text-md font-semibold'>Koji</div>
              <span className='text-md text-gray-500'>40 minutes ago</span>
            </div>

          </div>
        </div>


        <div className='text-justify px-4 py-2 text-md'>
          This is my first post
        </div>

        <div className='py-2'>
          <img className='w-full' src={lofipfp2} />
        </div>

        <div className='py-2 px-4'>
          <div className='border border-gray-200'>
            <div className='flex space-x-2'>
              <div className='w-1/3 flex space-x-2 justify-center items-center'>
                <button className='text-md font-semibold'>Like</button>
              </div>
              <div className='w-1/3 flex space-x-2 justify-center items-center'>
                <button className='text-md font-semibold'>Comment</button>
              </div>
              <div className='w-1/3 flex space-x-2 justify-center items-center'>
                <button className='text-md font-semibold'>Share</button>
              </div>
            </div>
          </div>
        </div>

        <div className='py-2 px-4'>
          <div className='flex space-x-2'>
            <img src={lofipfp2} className='w-9 h-9 rounded-full' />
            <div className='flex-1 bg-gray-100'>
              <input className='outline-none bg-transparent flex-1' type='text' placeholder='Write a comment...' />
            </div>
          </div>
        </div>



      </div>

    </div>
  )
}

export default PostTile