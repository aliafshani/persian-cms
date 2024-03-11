import React from 'react'
import "./NotFind.css"

function NotFind({errorTitle}) {
  return (
    <div className='error'> 
     <img className='error404' src='./img/404.png' alt='not find image error'/>
     <div>
          <p>هیچ {errorTitle} یافت نشد!</p>
     </div>
      
    </div>
  )
}

export default NotFind
