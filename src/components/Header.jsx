import React from 'react'
import Nav from './Nav'
import TopBanner from './TopBanner'
import { headerData } from "../util/header";
const Header = () => {
  return (
    <div>
      <TopBanner />
      <header className='Header'>
        <div className="inner">
          <a href={headerData.logo.href} className="logo">
            <img
              src={headerData.logo.src}
              alt={headerData.logo.alt}
              width={headerData.logo.width}
              height={headerData.logo.height}
            />
          </a>
          <Nav />
        </div>
      </header>
    </div>
  )
}

export default Header