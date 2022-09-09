import React, { useEffect, useState } from 'react'
import PostTile from './PostTile'
import lofipfp2 from '../assets/lofipfp2.png'
import axios from 'axios'
import { useSelector } from 'react-redux'
// import { useParams } from 'react-router-dom'

const PostContainer = () => {
  
  const { currentUser } = useSelector(state => state.user)
  const [posts, setPosts] = useState([])
  const [text, setText] = useState('')

  //get all posts of current user
  const getPosts = async () => {
    const res = await axios.get('http://localhost:4000/api/users/find/' + currentUser._id)
    // console.log(res.data.posts)
    setPosts(res.data.posts)
  }

  //render all posts of current user 
  useEffect(() => {
    try {
      getPosts()
    } catch (err) {

    }
  }, [])


  //function to upload a post 
  const uploadPost = async () => {
    try {
      await axios.post('http://localhost:4000/api/posts', {
        user: currentUser,
        content: text
      }, { withCredentials: true })
      // alert('post has been made!')

    } catch (err) {
      console.log(err)
    }
    getPosts()
  }

  //function to update a post 
  const updatePost = async () => {
    try {
      await axios.put('http://localhost:4000/api/posts/' + posts.id, {
        // user: currentUser, 
        content: posts
      }, { withCredentials: true })
    } catch (err) {
      console.log(err)
      alert('could not update post!')
    }
  }

  //function to delete a post 
  const deletePost = async () => {
    try {
      await axios.delete('http://localhost:4000/api/posts/' + posts._id,
        { withCredentials: true })
    } catch (err) {
      console.log(err)
      alert('could not delete post!')
    }
  }



  //map each individual post in post tile component
  const mappedPosts = posts.map(singlePost => <PostTile key={singlePost._id} updatePost={updatePost} deletePost={deletePost} content={singlePost.content} />)


  return (
    <div className='w-full lg:w-2/3 xl:w-2/5 pt-32 lg:pt-16 px-2 bg-red-200 '>
      <div className='px-4 mt-4 shadow rounded-lg bg-white'>
        <div className='p-2 border-b border-gray-300'>
          <img src={lofipfp2} className='w-10 h-10 rounded-full' />
          <div >
            <input className='flex-1 w-full bg-gray-100 rounded-full flex items-center justify-start pl-4 cursor-pointer' placeholder='What is on your mind?' onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <div className='p-2 flex mb-5'>
          {/* <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100'>
            <button className='text-xs sm-text-sm font-semibold text-gray-600' onClick={updatePost}>Update post</button>
          </div> */}
          {/* <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100'>
            <span className='text-xs sm-text-sm font-semibold text-gray-600'>Upload image</span>
          </div> */}
          <div className='w-1/3 flex space-x-2 justify-center items-center hover:bg-gray-100'>
            <button className='text-xs sm-text-sm font-semibold text-gray-600' onClick={uploadPost}>Upload post</button>
          </div>
        </div>
      </div>
      {mappedPosts}
    </div>
  )
}

export default PostContainer