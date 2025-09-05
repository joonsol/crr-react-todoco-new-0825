// src/components/Nav.jsx
import React from 'react'
import { headerData } from '../util/header'
import "../styles/components/_nav.scss"

const Nav = ({ isOpen, onOpen, onClose, onToggle }) => {
  const navLink = headerData.menus

  return (
    <nav className={`nav ${isOpen ? "open" : ""}`}>
      {/* 햄버거 열기 버튼 (모바일) */}
      <button
        type="button"
        className="mob-nav-btn"
        onClick={onOpen}
        aria-expanded={isOpen}
        aria-controls="gnb"
      >
        <img src="/img/icon_ham.svg" alt="메뉴 열기" />
      </button>

      {/* 데스크톱 GNB(필요 시 유지) */}
      <ul id="gnb" role="menubar">
        {navLink.map((item) => (
          <li key={item.id} role="none">
            <a role="menuitem" href={item.href}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
