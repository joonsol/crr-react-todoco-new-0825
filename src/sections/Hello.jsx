import React from 'react'
import {helloData} from '../util/hello'
const Hello = () => {
  return (

    <div className='inner hello-inner'>
      <div className="img-wrap">
        <img src={helloData.media.src} alt={helloData.media.alt} />
      </div>
      <div className="t-wrap">
        <p className="txt-2">
          {helloData.eyebrow}
        </p>
        <h2 className="tit">
          {helloData.title}
        </h2>
      </div>
    </div>
  )
}

export default Hello