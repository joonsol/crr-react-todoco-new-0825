import React from 'react'
import "../styles/components/_mnav.scss"
import Util from './Util'
import { headerData } from '../util/header'
const navLink = headerData.menus
const Mnav = ({ menus = [], onClose, onLinkClick}) => {
  return (
    <div>
      <div className="mob-nav-wrap">
        <div className="m-top">

          <Util />
          <a href="#" className="mob-nav-close-btn" onClick={onClose}>
            <img src="/img/icon_search_close.png" alt="ham-icon" />
          </a>
        </div>

        <ul className='m-nav-lst'>
          {navLink.map((item) => (
            <li key={item.id}>
              <a href={item.href} onClick={(e) => onLinkClick(e, item)}>
                {item.label}
              </a>
            </li>

          ))}
        </ul>

        <ul className="btm-lst">
          <li><a href="#">로그인</a></li>
          <li><a href="#">회원가입</a></li>
          <li><a href="#">공지사항</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Mnav