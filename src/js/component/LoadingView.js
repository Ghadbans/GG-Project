import React from 'react'
import Loader from './Loader'
import '../css/loadingView.css'
function LoadingView() {
  return (
    <div className='loading'>
            <div className='loadingView'>
              <p>Just one moment...</p>
            </div>
            <Loader/>
    </div>
  )
}

export default LoadingView