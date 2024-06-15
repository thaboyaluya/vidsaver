import { Component } from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import Features from './Features'

class ErrorBoundary3 extends Component {

  constructor(props) {
    super(props)

    this.state = {
      hasError: false
    }
  }


  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info)
    //this.context.updateError(true)
  }

  resetErrorBoundary() {
    return {
      hasError: false,

    }
  }


  render() {
    const { hasError, error } = this.state
    if (hasError) {
      console.log(error)
      return (
        <>
          <Navbar />
          <div className="banner ">
            <div className="container ">
              <div className="row ">
                <div className="col-lg-12  ">
                  <div className="message-body mx-auto  justify-content-center flex-column d-flex">
                    <p className='text-center'>Something went terribly wrong :(</p>
                    <div className=" mx-auto  ">
                      <button className='btn btn-primary active' onClick={() => this.setState({ hasError: false })}>Reset page</button>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <svg className="banner-border" height="240" viewBox="0 0 2202 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 123.043C67.2858 167.865 259.022 257.325 549.762 188.784C764.181 125.427 967.75 112.601 1200.42 169.707C1347.76 205.869 1901.91 374.562 2201 1" strokeWidth={'3'}></path>
            </svg>
          </div>
          <Features />
          <Footer />
        </>


      )
    }
    return this.props.children
  }
}

export default ErrorBoundary3
