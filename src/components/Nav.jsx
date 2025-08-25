import React from 'react'
import useSmoothScroll from "../hooks/useSmoothScroll"
import { headerData } from '../util/header'
import "../styles/components/_nav.scss"

const Nav = () => {

  const navLink = headerData.menus
  const scrollTo = useSmoothScroll()

    const handleClick = (e, item) => {
    if (item.type === "section") {
      e.preventDefault();
      const id = item.href?.startsWith("#") ? item.href.slice(1) : item.id;
      scrollTo(id);
    }
  };
  return (
    <nav>
      <ul>
        {navLink.map((item) => (
          <li key={item.id}>
            <a href={item.href} onClick={(e) => handleClick(e, item)}>
              {item.label}
            </a>
          </li>

        ))}
      </ul>
    </nav>
  )
}

export default Nav