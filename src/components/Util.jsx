import React from 'react'
import { headerData } from '../util/header'

const Util = () => {
  const utilData=headerData.utils
  return (
    <ul>
      {utilData.map((item)=>(
        <li key={item.id}>
          <a href={item.href}>
            <img src={item.icon} alt={item.label} />
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Util