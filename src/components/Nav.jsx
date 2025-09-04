import React,{useState} from 'react'
import useSmoothScroll from "../hooks/useSmoothScroll"
import { headerData } from '../util/header'
import "../styles/components/_nav.scss"

const Nav = () => {

  const navLink = headerData.menus
  const scrollTo = useSmoothScroll()
  const [isOpen, setIsOpen] = useState(false)
    const handleClick = (e, item) => {
    if (item.type === "section") {
      e.preventDefault();
      const id = item.href?.startsWith("#") ? item.href.slice(1) : item.id;
      scrollTo(id);
    }
  };
  return (
  <nav className={`nav ${isOpen ? "open" : ""}`}>
      <a href="#" className="mob-nav-btn"    onClick={() => setIsOpen(true)}>
        <img src="/img/icon_ham.svg" alt="ham-icon"  />
      </a>
      <ul>
        {navLink.map((item) => (
          <li key={item.id}>
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.label}
            </a>
          </li>

        ))}
      </ul>
            <a href="#" className="mob-nav-close-btn"  onClick={() => setIsOpen(false)}>
        <img src="/img/icon_search_close.png" alt="ham-icon"  />
      </a>
    </nav>
  )
}

export default Nav