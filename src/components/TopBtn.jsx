import React from 'react'
import '../styles/components/topbtn.scss'
import useSmoothScroll from '../hooks/useSmoothScroll'
const TopBtn = () => {
  const scrollTo = useSmoothScroll()
  return (
    <div className='fixed-top'>
      {/* icon_top.svg */}
      <button
        onClick={(e) => {
          e.preventDefault()
          scrollTo('Hero')
        }}
        className='top-btn'>위로 올라가는 버튼</button>
      {/* icon_talk.svg */}
      <a href="#" className="talk-btn">
        TCB
      </a>
      <p>1:1 Talk</p>
    </div>
  )
}

export default TopBtn