import React from 'react'
import Page404 from '../components/Page404'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import PageHeader from '../components/PageHeader'
import ErrorBoundary from '../components/ErrorBoundary'
import { Link } from 'react-router-dom'
const NotFoundScreen = () => {
  return (

    <React.Fragment>
      <ErrorBoundary fallback={<div className='text-center'>An error occurred while trying to render navigation bar.Please reload page.</div>}>    <Navbar /></ErrorBoundary>
      <ErrorBoundary fallback={

        <div className='container'>
          <div className='header display-3 text-center'>Page 404 : Page doesnt exist or it has been removed :(</div>

        </div>


      }>
        <PageHeader header={'Page Doesnt Exist'} title={'No Such Page'} /></ErrorBoundary>
      <ErrorBoundary fallback={<div className='text-center'>Please check the URL and try again or <Link to={'/'}>Go to Homepage</Link></div>}>
        <Page404 />
      </ErrorBoundary>
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

export default NotFoundScreen