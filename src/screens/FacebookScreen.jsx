import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Header4 from '../components/Header4'
import Features from '../components/Features'
import facebookP1 from '../imgs/facebook1.PNG'
import facebookP2 from '../imgs/facebook2.PNG'
import facebookURL from '../imgs/facebookURL.png'
import links from '../imgs/links.png'
import download from '../imgs/download.JPG'
import Instructions from '../components/Instructions'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorBoundary2 from '../components/ErrorBoundary2'
import { Link } from 'react-router-dom'
import About from '../components/About'
import FAQ from '../components/FAQ'



const FacebookScreen = () => {
  return (
    <React.Fragment>
      <ErrorBoundary2 fallback={<div className='text-center py-5'>An error occurred while trying to render navigation bar.Please reload the page</div>}>
        <Navbar />
      </ErrorBoundary2>

      <ErrorBoundary  >
        <Header4 title={'Facebook'} />
      </ErrorBoundary>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render the about us section.Please reload the page</div>}>
        <About subject={"Facebook"} />
      </ErrorBoundary2>

      <ErrorBoundary fallback={<div className='text-center'>An error occurred while trying to render this section of the page.</div>}>
        <Instructions pic1={facebookP1} pic2={facebookP2} pic3={facebookURL} pic4={links} pic5={download} title={'Facebook'} tip1={'To copy the facebook link, first click on share icon   '} tip2={'Locate the "copy link" button   '} />
      </ErrorBoundary>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page.</div>}>
        <Features subject={"Facebook"} />
      </ErrorBoundary2>


      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render Frequently asked Questions.Please reload the page</div>}>
        <FAQ subject={"Facebook"} />
      </ErrorBoundary2>

      <ErrorBoundary2 fallback={
        <footer className="site-footer mt-5">
          <div className="container">
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  Copyright © {new Date().getFullYear()}  All rights reserved | This website is made with   ❤️  by   <Link to={'https://instagram.com/joseph_aluya'}>Rume Aluya</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      }>
        <Footer subject={"Facebook"} />
      </ErrorBoundary2>

    </React.Fragment>
  )
}

export default FacebookScreen