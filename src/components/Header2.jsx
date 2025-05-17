import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import DocumentTitle from './DocumentTitle';

const Header2 = ({ title }) => {
  DocumentTitle("Instagram video to MP4 | Fast & Free Online Converter")
  const [video, setVideo] = useState({})
  const [url, setUrl] = useState('')
  const [theme, setTheme] = useState("")
  useEffect(() => {
    let color = window.matchMedia("(prefers-color-scheme:dark)").matches
    if (color === true) {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }, [])


        function validateInstagramUrl(urlToParse){
                if (urlToParse) {
                    var regExp = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
                    if (url.match(regExp)) {
                        return true;
                    }
                }
                return false;
            }
  let rtext = ["Dividing zero by infinite", "Looking through a large set of data just be patient...", "Reticulating splines...", "Swapping time and space...", "We're testing your patience", "Just count to 10", "I swear it's almost done", "Making sure all the i's have dots...", "We are not liable for any broken screen as a result of waiting", "One mississippi,two mississippi...", "Do you like my loading animation? I made it myself", "Please wait while we serve other users", "Grabbing extra minions", "Still faster than Windows update", "Bored of slow loading spinner,buy more RAM!", "Hold on tight", "We're almost there!", "Grab a snack,this might take a while...", "Relax,we will take care of the rest."]

  function generateRandomString(length) {
    let result = ''
    const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const characterLength = character.length;
    for (let i = 0; i < length; i++) {
      result += character.charAt(Math.floor(Math.random() * characterLength))
    }
    return result
  }


  const handleClick = async (e) => {
    e.preventDefault();
    var i = Math.floor(rtext.length * Math.random())
    const loading = toast.loading(rtext[i], { hideProgressBar: false, theme: theme, })
    if (url === '') {
      return toast.update(loading, { render: "💥 Search box can not be empty.Paste a link an try again", theme: theme, type: "error", isLoading: false, autoClose: 5000, closeButton: true, icon: false, hideProgressBar: false })
    }
       if(!validateInstagramUrl(url)){
           return toast.update(loading, { render: "💥 Invalid instagram url", type: "error", isLoading: false, theme: theme, autoClose: 5000, closeButton: true, icon: false, hideProgressBar: false })
       }

    const options = {
      method: 'GET',
      url: 'https://social-media-video-downloader.p.rapidapi.com/smvd/get/instagram',
      params: {
        url: `${url}`,
        filename: `instagram-${generateRandomString(10)}-(dowloaded from vidsaver.onrender.com)`
      },
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': process.env.REACT_APP_RAPID_HOST_HOST
      }
    };

    try {
      const response = await axios.request(options);
      setVideo(response.data)
      toast.update(loading, { render: "✅ Successfully gotten data you requested", theme: theme, type: "success", icon: false, isLoading: false, closeButton: true, autoClose: 2000, hideProgressBar: false })
      console.log(response.data);
      setUrl('')
      const info = document.getElementById('info')
      info.style.display = 'block'
    } catch (error) {
      toast.update(loading, { render: `💥  ${error.message}`, type: "error", icon: false, theme: theme, isLoading: false, autoClose: 5000, closeButton: true, hideProgressBar: false })
      console.log(error);
    }
  };



  return (
    <div className="banner text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <h1 className="mb-5 main-heading">Which {title} video Would You <br /> Like To Download Today?</h1>

            <div className="input-group w-100 mb-3">
              <input required onChange={(e) => setUrl(e.target.value)}
                value={url} className="form-control h-auto lb" type="text" placeholder="Paste link here..." />
              <div className="input-group-append">
                <button onClick={handleClick} className="btn btn-outline-secondary" type="button">Download <i className="fa  fa-download" aria-hidden="true"></i></button>
              </div>
            </div>


            <div id='info' style={{ display: 'none' }}>
              <img src={video.picture ? video.picture : 'no video picture'} alt={video.title ? video.title : 'no video title'} />
              <h3>Title: {video.title ? video.title : 'no video title'} </h3>
                     <h3>Followers: {video.author ? video.author.followers: 'no followers'} </h3>
              <h3><i className="fa fa-clock-o pr-1" aria-hidden="true"></i> Response time: {video.timeTaken ? video.timeTaken : 'no video timeTaken'} </h3>
              <table className="my-5 p-5 text-center table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Quality</th>
                    <th>Download</th>
                  </tr>
                </thead>
                <tbody>

                  {
                    video.links?.map((l, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{
                          l.quality === 'audio_0' ?

                            <i className="fa pr-2 fa-file-audio-o" aria-hidden="true"></i>

                            :

                            <i className="fa pr-2  fa-film" aria-hidden="true"></i>

                        } {l.quality}</td>
                        <td><Link download to={l.link}>

                          <i className="fa fa-2x  fa-download" aria-hidden="true"></i> </Link>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <svg className="banner-border" height="240" viewBox="0 0 2202 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 123.043C67.2858 167.865 259.022 257.325 549.762 188.784C764.181 125.427 967.75 112.601 1200.42 169.707C1347.76 205.869 1901.91 374.562 2201 1" strokeWidth={'3'}></path>
      </svg>
    </div>
  )
}

export default Header2