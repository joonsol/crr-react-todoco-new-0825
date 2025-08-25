import React from 'react'
import Nav from './Nav'
import Util from './Util'
import TopBanner from './TopBanner'
import {headerData} from '../util/header'
const Header = () => {
  const headerLogo=headerData.logo
  return (
    <div>
      <TopBanner />

      <header>
        <div className="inner">
          <Nav />
          <h1 className="tit">
            <a href={headerLogo.href}>
              <img src={headerLogo.src} alt={headerData.alt} />
            </a>
          </h1>
          <Util />
        </div>
        Header
      </header>
    </div>
  )
}

export default Header