import React from 'react'

import { headerData } from '../util/header'


const Nav = ({ handleClick, onNavOpen }) => {
  const navLink = headerData.menus



  return (
    <nav>
      <a 
      href='#'
      className='mob-nav-btn'
        onClick={(e) => {
          e.preventDefault()
          onNavOpen()
        }
        }>
        <img src="/img/icon_ham.svg" alt="메뉴열기" />
      </a>
      <ul>
        {navLink.map((item) => (

          <li key={item.id}>
            <a
              href={`#${item.href}`}
              onClick={(e) => handleClick(e, item)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Nav