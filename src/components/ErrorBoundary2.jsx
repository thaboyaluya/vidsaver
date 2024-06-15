import { Component } from 'react'

class ErrorBoundary2 extends Component {

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

  }



  render() {
    const { hasError, error } = this.state
    if (hasError) {
      console.log(error)
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary2