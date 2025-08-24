import React from 'react'
import Nav from './Nav'
import TopBanner from './TopBanner'
const Header = () => {
  return (
    <div>
      <TopBanner />
      <header className='Header'>

        <Nav />
      </header>
    </div>
  )
}

export default Header