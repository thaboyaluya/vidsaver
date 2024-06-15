import React from 'react'


const Instructions = ({ pic1, pic2, pic3, pic4, pic5, title, tip1, tip2 }) => {
  return (

    <React.Fragment>

      <div className="container mt-5 bg">
        <p className='sub-heading  text-center pt-3'>How to convert {title} videos to  MP4 <br /> in  VidSaver:  Step-by-step  guide</p>
        <div className="row">
          <div className="card-body m-3">
            <div style={{ textAlign: 'center' }}>
              <img className="img-fluid" loading='lazy' width={'400px'} height={"400px"} src={pic1} alt={`${title} video page`} />
              <div className="py-3">
                <h4 className="card-title">Step 1. Copy the {title} link</h4>
                <p>

                  {tip1}
                  of the video you want to download.
                </p>
              </div>
            </div>



          </div>
          <div className="card-body m-3">
            <div className="text-center">
              <img className="img-fluid" loading='lazy' width={'400px'} height={"400px"} src={pic2} alt={`${title} share page`} />
              <div className="py-3">
                <h4 className="card-title">Step 2. Look for the copy link button</h4>
                <p>
                  {tip2}

                  and click it to copy the link.

                </p>
              </div>
            </div>
          </div>




          <div className="card-body m-3">
            <div className="text-center">
              <img className="img-fluid" loading='lazy' width={'600px'} src={pic3} alt={`${title} link pasted on vidsaver.onrender.com`} />
              <div className="py-3">
                <h4 className="card-title">Step 3. Paste Link</h4>
                <p>
                  Paste the link into the search box and click the download button
                </p>
              </div>
            </div>
          </div>

          <div className="card-body m-3">
            <div className="text-center">
              <img className="img-fluid" loading='lazy' width={'450px'} height={"450px"} src={pic4} alt={`${title} ouput formats`} />
              <div className="py-3">
                <h4 className="card-title">Step 4. Choose output format</h4>
                <p>
                  Then select the video or audio  you need and click the download  "  <i className="fa  fa-download" aria-hidden="true"></i>  "  icon.
                </p>
              </div>
            </div>
          </div>




          <div className="card-body m-3">
            <div className="text-center">
              <img className="img-fluid" loading='lazy' width={'400px'} height={"400px"} src={pic5} alt={`${title} download links`} />
              <div className="py-3">
                <h4 className="card-title">Step 5. Download the video or audio</h4>
                <p className=" py-3">
                  Now,the video or audio will be automatically converted to the format and quality you selected and saved to your device for you to use.Enjoy !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>






  )
}

export default Instructions