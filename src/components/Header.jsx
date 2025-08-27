import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Util from './Util'
import TopBanner from './TopBanner'
import { headerData } from '../util/header'
import "../styles/components/_header.scss"
const Header = () => {
  const headerLogo = headerData.logo

  const [isScrolled, setIsScrolled] = useState(false)



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      setIsScrolled(scrollTop > 0)
    }
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (


     <header className={isScrolled? 'scroll':''}>
      <div className="inner">
        <Nav />
        <h1 className="tit">
          <a href={headerLogo.href}>
            <img src={headerLogo.src} alt={headerData.alt} />
          </a>
        </h1>
        <Util />
      </div>

    </header>

  )
}

export default Header