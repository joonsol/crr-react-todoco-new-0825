import React from 'react'
import useSmoothScroll from '../hooks/useSmoothScroll'
const Nav = () => {
  const navLink = ['Hero', 'Brand', 'Products', 'Ingredients', 'Reviews', 'Cta']

  const scrollTo = useSmoothScroll()
  return (
    <nav>
      <ul>
        {navLink.map((nav, i) => (

          <li key={i}>
            <a href={`#${nav}`}
              onClick={(e) => {
                e.preventDefault()
                scrollTo(nav)
              }} >
              {nav}
            </a>
          </li>
        ))}
      </ul>

    </nav>
  )
}

export default Nav