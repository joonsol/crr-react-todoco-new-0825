import React from 'react'
import { headerData } from '../util/header'
const Util = () => {
  const utilData = headerData.utils;
  return (
    <ul className='util-lst'>
      {utilData.map((util) => (

        <li key={util.id}>
          <a href={util.href}>
            <img src={util.icon} alt={util.label} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Util