import React, { useState } from 'react'

const About = () => {

  const [img, setImg] = useState(null)
  const [video, setVideo] = useState(null)


  const uploadFile = (file) => {

  }

  return (
    <div>About
      <p>testing upload feature on this page</p>
      <input type='file' onChange={e => setImg(e.target.files[0])}/>
      <input type='file' onChange={e => setVideo(e.target.files[0])}/>
    </div>
  )
}

export default About