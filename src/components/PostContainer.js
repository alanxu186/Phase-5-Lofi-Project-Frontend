import React, { useEffect, useState } from 'react'
import PostTile from './PostTile'
import lofipfp2 from '../assets/lofipfp2.png'
import axios from 'axios'

const PostContainer = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`users/$`)
    }
  })

  return (
    <div className='w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2 bg-red-200 '>
      <PostTile/>

    </div>
  )
}

export default PostContainer