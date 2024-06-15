import React from 'react'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Instructions from '../components/Instructions'
import Features from '../components/Features'
import youtubeP1 from '../imgs/IMG_0962.jpg'
import youtubeP2 from '../imgs/IMG_0963.jpg'
import youtubeURL from '../imgs/youtube2.png'
import links from '../imgs/links.png'
import download from '../imgs/download.JPG'
import ErrorBoundary from '../components/ErrorBoundary'
import ErrorBoundary2 from '../components/ErrorBoundary2'
import { Link } from 'react-router-dom'
import About from '../components/About'
import FAQ from '../components/FAQ'


const HomeScreen = () => {
  return (
    <React.Fragment>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render navigation bar.Please reload the page</div>}>
        <Navbar />
      </ErrorBoundary2>
      <ErrorBoundary  >
        <Header title={'Youtube'} />
      </ErrorBoundary>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render about us section.Please reload the page</div>}>
        <About subject={"Youtube"} />
      </ErrorBoundary2>

      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page</div>}>
        <Instructions pic1={youtubeP1} pic2={youtubeP2} pic3={youtubeURL} pic4={links} pic5={download} title={'Youtube'} tip1={'To copy the Youtube link, first click on share button      '} tip2={'Locate the "copy link" button   '} />
      </ErrorBoundary2>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render this section of the page</div>}>
        <Features subject={"Youtube"} />
      </ErrorBoundary2>
      <ErrorBoundary2 fallback={<div className='text-center'>An error occurred while trying to render Frequently asked Questions.Please reload the page</div>}>
        <FAQ subject={"Youtube"} />
      </ErrorBoundary2>

      <ErrorBoundary2 fallback={
        <footer className="site-footer mt-5">
          <div className="container">
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  Copyright © {new Date().getFullYear()}  All rights reserved | This website is made with   ❤️   by    <Link to={'https://instagram.com/joseph_aluya'}>Rume Aluya</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      }>
        <Footer subject={"Youtube"} />
      </ErrorBoundary2>

    </React.Fragment>
  )
}

export default HomeScreen