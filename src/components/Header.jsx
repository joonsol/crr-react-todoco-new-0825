// src/components/Header.jsx
import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import Util from './Util'
import Mnav from './Mnav'
import useSmoothScroll from "../hooks/useSmoothScroll"
import { headerData } from '../util/header'
import "../styles/components/_header.scss"

const Header = ({ navOpen, onNavOpen, onNavClose, onNavToggle }) => {
  const headerLogo = headerData.logo
  const [isScrolled, setIsScrolled] = useState(false)
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 섹션 이동 + 메뉴 닫기
  const handleSectionClick = (e, item) => {
    if (item.type === "section") {
      e.preventDefault()
      const id = item.href?.startsWith("#") ? item.href.slice(1) : item.id
      scrollTo(id)
      onNavClose?.()
    }
  }

  return (
    <header className={isScrolled ? 'scroll' : ''}>
      <div className="inner">
        <Nav
          isOpen={navOpen}
          onOpen={onNavOpen}
          onClose={onNavClose}
          onToggle={onNavToggle}
        />

        <h1 className="tit">
          <a href={headerLogo.href}>
            {/* alt는 headerLogo.alt 사용 권장 */}
            <img src={headerLogo.src} alt={headerLogo.alt || 'logo'} />
          </a>
        </h1>

        <Util />

        {/* ⬇️ 모바일 전용 네비게이션을 Header에서 렌더링 */}
        {navOpen && (
          <Mnav
            menus={headerData.menus}
            onClose={onNavClose}
            onLinkClick={handleSectionClick}
          />
        )}
      </div>
    </header>
  )
}

export default Header
