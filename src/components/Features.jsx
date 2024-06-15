import React from 'react'

const Features = ({ subject }) => {
  return (
    <div className="container mt-5">


      <h2 className='sub-heading text-center'>Why Use Our Converter?</h2>
      <div className="why__grid">

        <div className="why__card">
          <i className="fa fa-3x  fa-download" aria-hidden="true"></i>
          <h2 className="h4">Auto Fetch from {subject}</h2>
          <p> Our service automatically retrieves data from {subject}. All you need to do is copy and paste the URL of the {subject} video you want to convert.
          </p>

        </div>
        <div className="why__card">
          <i className="fa fa-3x fa-user" aria-hidden="true"></i>
          <h2 className="h4">No Registration Required</h2>
          <p>You do not need to create an account or register to convert and download {subject} videos into MP4 and MP3 formats.

          </p>

        </div>


        <div className="why__card">
          <i className="fa fa-3x fa-check" aria-hidden="true"></i>
          <h2 className="h4">Browser Compatibility</h2>
          <p>Our web-based application is designed to be fully compatible with the latest versions of popular web browsers, including Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge.
          </p>

        </div>

        <div className="why__card">
          <i className="fa fa-4x fa-mobile" aria-hidden="true"></i>
          <h2 className="h4">Mobile friendly</h2>
          <p>Our website is accessible and functional on any device, allowing users to easily download their favorite {subject} videos in MP4 and MP3 formats.
          </p>

        </div>


      </div>


    </div>


  )
}

export default Features