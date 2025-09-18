import React from 'react'
import instar from "../util/instar"
import "../styles/sections/instargram.scss"
const Instargram = () => {
  return (
    <div className='inner instar-inner'>
      <div className="t-wrap">
        <h2 className="tit">
          Instargram
        </h2>
        <p className="txt-4">
          @tocobo_official
        </p>
      </div>
      <ul className="instar-lst">
        {instar.map((i) => (

          <li key={i.id}>
            <a
              style={{ backgroundImage: `url(${i.image})` }}
              alt={i.alt}
              href={i.link}>
              {i.alt}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Instargram