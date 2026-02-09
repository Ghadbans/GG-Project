import React from 'react'
import Loader from '../../component/Loader'

function LoadingPageView() {
  return (
    <div className='modalView15'>
        <div className='Modal15'>
            <div style={{width:'100%',height:'100%', justifyContent:'center'}}>
            <p style={{position:'relative',left:'50px'}}>Just one moment please...</p>
             <Loader/>
             </div>
        </div>
    </div>
  )
}

export default LoadingPageView