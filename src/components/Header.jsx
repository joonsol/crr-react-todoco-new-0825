import React from 'react'
import Nav from './Nav'
import Util from './Util'
import MNav from './MNav'
import useSmoothScroll from '../hooks/useSmoothScroll'
import { headerData } from '../util/header'
import "../styles/components/header.scss"
const Header = ({ mNavOpen, onNavOpen, onNavClose }) => {

  const headerLogo = headerData.logo
  const scrollTo = useSmoothScroll()

  const handleClick = (e, item) => {
    if (item.type === 'section') {
      e.preventDefault()
      const id = item.href?.startsWith('#') ? item.href.slice(1) : item.id
      scrollTo(id)
      onNavClose?.() // 모바일 메뉴라면 닫기
    }
  }
  return (
    <div>


      <header>
        <div className="inner">
          <Nav
            handleClick={handleClick}
            onNavOpen={onNavOpen}
          />
          <h1 className="tit">
            <a href={headerLogo.href}>
              <img src={headerLogo.src} alt={headerLogo.alt} />
            </a>
          </h1>
          <Util />
        </div>

      </header>
      {mNavOpen && (
        <MNav
          handleClick={handleClick}
          onNavClose={onNavClose}
        />
      )}
    </div>
  )
}

export default Header