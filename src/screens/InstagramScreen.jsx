import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Header2 from '../components/Header2'
import Features from '../components/Features'
import instagramP1 from '../imgs/instagram1.PNG'
import instagramP2 from '../imgs/IMG_0958.PNG'
import instagramURL from '../imgs/instagramURL.png'
import links from '../imgs/links.png'
import download from '../imgs/download.JPG'
import Instructions from '../components/Instructions'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorBoundary2 from '../components/ErrorBoundary2'
import { Link } from 'react-router-dom'
import About from '../components/About'
import FAQ from '../components/FAQ'

const InstagramScreen = () => {
  return (
    <React.Fragment>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render navigation bar.Please reload the page</div>}>
        <Navbar />
      </ErrorBoundary2>

      <ErrorBoundary >
        <Header2 title={'Instagram'} />
      </ErrorBoundary>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render about us section.Please reload the page</div>}>
        <About subject={"Instagram"} />
      </ErrorBoundary2>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page</div>}>
        <Instructions pic1={instagramP1} pic2={instagramP2} pic3={instagramURL} pic4={links} pic5={download} title={'Instagram'} tip1={'To copy the instagram link, first click on share icon   '} tip2={'Locate the "copy link" button   '} />
      </ErrorBoundary2>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page</div>}>
        <Features subject={"Instagram"} />
      </ErrorBoundary2>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render Frequently asked Questions.Please reload the page</div>}>
        <FAQ subject={"Instagram"} />
      </ErrorBoundary2>


      <ErrorBoundary2 fallback={
        <footer className="site-footer mt-5">
          <div className="container">
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  Copyright © {new Date().getFullYear()}  All rights reserved | This website is made with  ❤️  by    <Link to={'https://instagram.com/joseph_aluya'}>Rume Aluya</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      }>
        <Footer subject={"Instagram"} />
      </ErrorBoundary2>

    </React.Fragment>
  )
}

export default InstagramScreen