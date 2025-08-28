import React from 'react'
import '../styles/components/_fixedtopbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
const FixedTopBtn = () => {
  const scrollTo = useSmoothScroll()
  return (

    <div className="fixed-top-container">
      <button className='fixed-btn'
        onClick={(e) => {
          e.preventDefault()
          scrollTo('Hero')
        }}

      >

        FixedTopBtn</button>
      <a href="#" className="talk-btn">
        TCB
      </a>
      <p>1:1 talk</p>
    </div>
  )
}

export default FixedTopBtn