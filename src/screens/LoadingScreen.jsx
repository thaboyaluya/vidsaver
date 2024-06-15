import React from 'react'
import Footer from '../components/Footer'
import Loading from '../components/Loading'
import ErrorBoundary from '../components/ErrorBoundary'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

const LoadingScreen = () => {
  return (
    <React.Fragment>

      <ErrorBoundary fallback={<div className='text-center'>An error occurred while trying to render navigation bar.Please reload page</div>}> <Navbar /></ErrorBoundary>
      <ErrorBoundary fallback={<div className="banner">The loading animation malformed...</div>} >    <Loading /></ErrorBoundary>
      <ErrorBoundary fallback={
        <footer className="site-footer mt-5">
          <div className="container">
            <div className="row pt-5 mt-5 text-center">
              <div className="col-md-12">
                <p>
                  Copyright © {new Date().getFullYear()}  All rights reserved | This website is made with ❤️ by    <Link to={'https://instagram.com/joseph_aluya'}>Rume Aluya</Link>
                </p>
              </div>
            </div>
          </div>
        </footer>
      }>    <Footer /></ErrorBoundary>



    </React.Fragment>
  )
}

export default LoadingScreen