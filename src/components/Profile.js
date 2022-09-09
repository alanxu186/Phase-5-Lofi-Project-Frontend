import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import coffeeshop from '../assets/coffeeshop.gif'
import lofipfp5 from '../assets/lofipfp5.jpeg'
import axios from 'axios'
import PostTile from './PostTile'


const Profile = () => {
  const { currentUser } = useSelector(state => state.user)

  const [bio, setBio] = useState('')
  const [posts, setPosts] = useState([])

  // console.log(bio)


  useEffect(() => {
    fetch('http://localhost:4000/api/users/find/' + currentUser._id)
      .then(res => res.json())
      // .then(data => console.log(data.posts))
      .then(posts => setPosts(posts.posts))
  }, [])

 
 
  const updateProfile = async () => {
    try {
      await axios.put('http://localhost:4000/api/users/' + currentUser._id, {
        // user: currentUser,
        bio: bio,
      }, { withCredentials: true })
      alert('bio has been updated!')
    } catch (err) {
      console.log(err)
      alert('unable to update bio!')
    }
  }

  const deleteProfile = async () => {
    try {
      await axios.delete('http://localhost:4000/api/users/' + currentUser._id, {
        withCredentials: true
      })
      alert('account has been deleted!')
    } catch (err) {
      console.log(err)
      alert('could not delete user')
    }
  }

  const mappedPosts = posts.map((singlePost) => (<PostTile key={singlePost._id}/>))




  return (
    <div className='shadow'>
      <div className='relative h-96 rounded-b flex justify-center'>
        <img className='object-cover w-full h-full rounded-b' src={coffeeshop} alt='cover' />
        <div className='absolute -bottom-20'>
          <img className='object-cover border-4 border-white w-64 h-64 rounded-full' src={lofipfp5} />
          <div className='text-center mt-6 text-3xl font-bold text-fBlack'>{currentUser.name}</div>
        </div>
      </div>

      <div>
        {/* <p>{currentUser.name}</p> */}
        <p>{currentUser.bio}</p>
        <p>Followers: {currentUser.followers}</p>
        <div>
          <input placeholder='update your bio' onChange={(e) => setBio(e.target.value)} />
        </div>
        
        <button onClick={updateProfile}>Update button</button>
        <button onClick={deleteProfile}>Delete Account</button>

        <p className='mt-32'>{mappedPosts}</p>

        {/* <p>{posts.content}</p> */}
        {/* <p>Following: {currentUser.followedUsers}</p> */}
      </div>

    </div>
  )
}

export default Profile