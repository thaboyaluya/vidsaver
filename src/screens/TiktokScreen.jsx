import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Header3 from '../components/Header3'
import Features from '../components/Features'
import tiktokP1 from '../imgs/tiktok1.PNG'
import tiktokP2 from '../imgs/tiktok2.PNG'
import tiktokURL from '../imgs/tiktokURL.png'
import links from '../imgs/links.png'
import download from '../imgs/download.JPG'
import Instructions from '../components/Instructions'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorBoundary2 from '../components/ErrorBoundary2'
import { Link } from 'react-router-dom'
import About from '../components/About'
import FAQ from '../components/FAQ'



const TiktokScreen = () => {
  return (
    <React.Fragment>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render navigation bar.Please reload page</div>}>     <Navbar /></ErrorBoundary2>
      <ErrorBoundary >    <Header3 title={'Tiktok'} /></ErrorBoundary>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render about us section.Please reload the page</div>}>
        <About subject={"Tiktok"} />
      </ErrorBoundary2>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page</div>}>    <Instructions pic1={tiktokP1} pic2={tiktokP2} pic3={tiktokURL} pic4={links} pic5={download} title={'Tiktok'} tip1={'To copy the Tiktok link, first click on share icon   '} tip2={'Locate the "copy link" button   '} /></ErrorBoundary2>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page</div>}>      <Features subject={"Tiktok"} /></ErrorBoundary2>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render Frequently asked Questions.Please reload the page</div>}>
        <FAQ subject={"Tiktok"} />
      </ErrorBoundary2>


      <ErrorBoundary2 fallback={
        <footer className="site-footer mt-5">
          <div className="container">
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  Copyright © {new Date().getFullYear()}  All rights reserved | This website is made with <i className="fa fa-heart" aria-hidden="true"></i> by    <Link to={'https://instagram.com/joseph_aluya'}>Rume Aluya</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      }>      <Footer subject={"Tiktok"} />
      </ErrorBoundary2>





    </React.Fragment>
  )
}

export default TiktokScreen