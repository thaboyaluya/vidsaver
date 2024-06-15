import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { toast } from "react-toastify";

const Footer = ({ subject }) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function handleShare() {
    if ("share" in navigator) {
      navigator.share({
        title: "VidSaver",
        text: "Convert YouTube,Instagram,Tiktok and Facebook videos to MP4 quickly with our easy-to-use online converter. No registration required, just paste the link and download your video.It's really that simple.",
        url: "https://www.vidsaver.onrender.com"
      })
    } else {
      console.log("Share is not supported in your browser.")
      toast.error("Share is not supported in your browser.")
    }

  }

  return (
    <footer className="footer-site mt-5">
      <svg className="footer-border" height="214" viewBox="0 0 2204 214" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2203 213C2136.58 157.994 1942.77 -33.1996 1633.1 53.0486C1414.13 114.038 1200.92 188.208 967.765 118.127C820.12 73.7483 263.977 -143.754 0.999958 158.899" strokeWidth={'3'}></path>
      </svg>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="footer-heading mb-4 ">VidSaver</h4>
            <p>Convert {subject} videos to MP4 quickly and for free with our easy-to-use online converter. No registration required, just paste the link and download your video.</p>
            <button onClick={handleShare} id="share" className="btn ">Share<i className="fa pl-2 fa-share-alt" aria-hidden="true"></i></button>
          </div>
          <div className="col-md-5 mb-4 mb-md-0 ml-auto">
            <div className="row mb-4">
              <div className="col-md-6">
                <h4 className="footer-heading mb-4 ">Quick Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <NavLink onClick={handleScrollToTop} className="white-text" to={'/'}>Youtube</NavLink>

                  </li>
                  <li>
                    <NavLink onClick={handleScrollToTop} className="white-text" to={'/instagram-video-to-mp4'}>Instagram</NavLink>

                  </li>
                  <li>
                    <NavLink onClick={handleScrollToTop} className="white-text" to={'/tiktok-video-to-mp4'}>Tiktok</NavLink>

                  </li>
                  <li>
                    <NavLink onClick={handleScrollToTop} className="white-text" to={'/facebook-video-to-mp4'}>Facebook</NavLink>
                  </li>
                </ul>
              </div>

            </div>

          </div>


          <div className="col-md-2">

            <div className="row">
              <div className="col-md-12"><h4 className="footer-heading mb-4">We are social</h4></div>
              <div className="col-md-12">


                <Link target='_blank' to={'https://facebook.com/oghenerume.aluya'} className="p-2"><i className='fa fa-facebook'></i></Link>
                <Link target='_blank' to={'https://twitter.com/aluya_rume'} className="p-2"><i className='fa fa-twitter'></i></Link>
                <Link target='_blank' to={'https://instagram.com/joseph_aluya'} className="p-2"><i className='fa fa-instagram'></i></Link>


              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>

              Copyright © {new Date().getFullYear()}  All rights reserved | This website is made with ❤️ by    <Link to={'https://instagram.com/joseph_aluya'}>Rume Aluya</Link>

            </p>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer