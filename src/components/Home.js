import React, { useEffect, useState } from 'react'
import PostContainer from './PostContainer'
import LeftContainer from './LeftContainer'
import RightContainer from './RightContainer'

const Home = () => {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {

  // })

  return (
    <div className='flex justify-center h-screen'>
      <LeftContainer/>
      <PostContainer/>
      <RightContainer/>  
    </div>
  )
}

export default Home
