import React from 'react'
import '../styles/components/_fixedtopbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
const FixedTopBtn = () => {
      const scrollTo = useSmoothScroll()
  return (
    <button className='fixed-btn'
    onClick={(e)=>{
        e.preventDefault()
        scrollTo('Hero')
    }}
    >FixedTopBtn</button>
  )
}

export default FixedTopBtn