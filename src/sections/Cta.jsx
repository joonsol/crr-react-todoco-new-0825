import React from 'react'
import { categories } from '../util/cate'
import '../styles/sections/_cta.scss'
const Cta = () => {
  return (
    <div className='inner'>
      <ul className='cta-lst'>
        {categories.map((cta) => (
          <li key={cta.id}>
            <a href={cta.href}>
              <div className="img-wrap" style={{ backgroundImage: `url(${cta.img.src})` }}>


              </div>
              <p>
                {cta.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cta