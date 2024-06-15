import React from 'react'
import { Link } from 'react-router-dom'

const About = ({ subject }) => {
  return (
    <div className='container text-center mt-5'>
      <h1 className="mb-5 sub-heading">What is VidSaver?</h1>
      <p><Link to={"https://vidsaver.onrender.com"}> VidSaver </Link>is Best {subject} to MP4 converter.VidSaver allows you to download and save {subject} videos in high quality and free of charge. You can easily convert {subject} videos to MP4 . Our downloader is completely safe and secure. This {subject} to MP4 converter offers high-definition videos up to 360p, 480p, 720p and more.We can also convert {subject} videos to MP3 format.</p>
      <p>Your choice of browser and device is irrelevant. On PCs, tablets, and smartphones, VideSaver works seamlessly.Get your favorite {subject} videos in MP4 / MP3 for free and saved to your device for you to use. </p>

    </div>
  )
}

export default About