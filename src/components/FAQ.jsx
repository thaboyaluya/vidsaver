import React from 'react'
import { Link } from 'react-router-dom'
const FAQ = ({ subject }) => {
  return (
    <div className="container my-5 ">

      <h1 className="mb-5 text-center sub-heading">Frequently Ask Questions</h1>
      <div id="accordion">
        <div className="card">
          <div className="card-header">
            <h5>
              <a href="#collapse1" data-parent="#accordion" data-toggle="collapse">
                What is {subject} to MP4 converter?
              </a>
            </h5>
          </div>
          <div id="collapse1" className="collapse" >
            <div className="card-body" >
              {subject} to MP4 converter is an easy and fast downloader. Which downloads {subject} videos in just a few steps.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>
              <a href="#collapse2" data-parent="#accordion" data-toggle="collapse">
                Can I download {subject} videos to MP4 online for free without any software?
              </a>
            </h5>
          </div>
          <div id="collapse2" className="collapse" >
            <div className="card-body">
              Yes, you can download {subject} videos in MP4 for free. You don't need any software for that .You can use the <Link to={"https://vidsaver.onrender.com"}>VidSaver tool</Link> to download {subject} video without downloading any software.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>
              <a href="#collapse3" data-parent="#accordion" data-toggle="collapse">
                How do I convert {subject} to MP4  online?
              </a>
            </h5>
          </div>
          <div id="collapse3" className="collapse" >
            <div className="card-body">
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>If you want to download a video in MP4,First you copy the {subject} link.</li>
                <li className='list-group-item'>Then paste that link into the search box on the <Link to={"https://vidsaver.onrender.com"}> VidSaver website </Link>.</li>
                <li className='list-group-item'> Then select the video or audio  you need and click the download  "  <i className="fa  fa-download" aria-hidden="true"></i>  "  icon.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>
              <a href="#collapse4" data-parent="#accordion" data-toggle="collapse">
                Is VidSaver compatible with all devices?
              </a>
            </h5>
          </div>
          <div id="collapse4" className="collapse" >
            <div className="card-body">
              Yes, VidSaver works on all devices including mobile phones and computers.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>
              <a href="#collapse5" data-parent="#accordion" data-toggle="collapse">
                How can I find the downloaded MP4 file on my phone ?
              </a>
            </h5>
          </div>
          <div id="collapse5" className="collapse" >
            <div className="card-body">
              You can find the downloaded MP4  file in the Downloads section of the browser menu on your phone.
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h5>
              <a href="#collapse6" data-parent="#accordion" data-toggle="collapse">
                Is it secure to convert {subject} videos to MP4 on the VidSaver website?
              </a>
            </h5>
          </div>
          <div id="collapse6" className="collapse" >
            <div className="card-body" >
              Yes, it is completely secure to convert {subject} videos to MP4 using  VidSaver.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ