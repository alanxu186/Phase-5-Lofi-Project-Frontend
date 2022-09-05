import React, { useEffect, useState } from 'react'
import PostTile from './PostTile'
import lofipfp2 from '../assets/lofipfp2.png'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

const PostContainer = () => {
  // const {id} = useParams
  // const {currentUser} = useSelector(state => state.user)

  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/posts/find/`);
        console.log(res.data)
        setPosts(res.data)
      } catch (error) {

      }
    }
    fetchPosts();
  },[])

  // const mappedPosts = posts.map((item) => (item))

  return (
    <div className='w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2 bg-red-200 '>
      <PostTile/>
      {posts.title}
    {posts.content}
    </div>
  )
}

export default PostContainer