import React from 'react'
import { headerData } from '../util/header'
import "../styles/components/_util.scss"
const Util = () => {
  const utilData=headerData.utils
  return (
    <ul className='util-lst'>
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