import React from 'react'
import {helloData} from '../util/hello'
import "../styles/sections/hello.scss"
const Hello = () => {
  return (
    <div className='inner hello-inner'>
        <div className="img-wrap">
            <img src={helloData.media.src} alt={helloData.media.alt} />
        </div>
        <div className="t-wrap">
            <p className="txt-2">{helloData.eyebrow}</p>
            <h2 className="tit"
             dangerouslySetInnerHTML={{__html:helloData.title}}
            />
            <p className="txt-1" 
            dangerouslySetInnerHTML={{__html:helloData.description}}
            />
            <a href={helloData.href} className="btn">
              {helloData.cta.label}
            </a>
        </div>
    </div>
  )
}

export default Hello