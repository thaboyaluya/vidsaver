import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {

  return (
    <div className="row container justify-content-center">
      <div className="col-lg-8 col-md-9">
        <h1 className="mb-4 main-heading">
          We Can’t Seem To Find The
          Page You’re Looking For</h1>
        <h3 className="mb-4">Error Code : <span className="text-primary">404</span></h3>
        <Link to={'/'} className="btn btn-primary">Back To Homepage</Link>
      </div>
    </div>

  )
}

export default Page404