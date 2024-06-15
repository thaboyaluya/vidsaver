import React from 'react'



const Loading = () => {
  let rtext = ["Looking through a large set of data just be patient...", "Reticulating splines", "We're testing your patience", "Just count to 10", "I swear it's almost done", "Making sure all the i's have dots...", "We are not liable for any broken screen as a result of waiting", "One mississippi,two mississippi...", "Please wait while we serve other users", "Grabbing extra minions", "Still faster than Windows update", "Bored of slow loading spinner,buy more RAM!", "Hold on tight", "Relax,we will take care of the rest"]
  var i = Math.floor(rtext.length * Math.random())


  return (
    <div className='banner text-center'>
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto">
            <i className="fa fa-refresh fa-spin fa-5x fa-fw"></i>
            <p>{rtext[i]}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Loading