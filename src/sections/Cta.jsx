import React from 'react'
import { categories } from '../util/cta'
import "../styles/sections/cta.scss"
const Cta = () => {

const stagger = (base,idx,step=100)=>base+idx*step
  return (
    <div className='inner cta-inner'>
      <ul className="cta-list">
        {categories.map((cta,i) => (

          <li key={cta.id} 
                    data-aos="fade-up"
                    data-aos-delay={stagger(1000,i,100)}
                    >
            <a href={cta.href}>

              <div className="img-wrap" style={{ backgroundImage: `url(${cta.img.src})` }}>
                {/* <img src="" alt="" /> */}
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