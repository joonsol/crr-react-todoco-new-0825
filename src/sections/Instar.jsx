import React from 'react'
import instar from "../util/instar"
import "../styles/sections/_instar.scss"
const Instar = () => {
  return (
    <div className='inner instar-inner'
    >
      <div className="t-wrap">
        <h2 className="con-tit">
          Instargram        </h2>
        <p className="txt-4">
          @tocobo_official
        </p>
      </div>
      <ul className="instar-lst">
        {instar.map((i)=>(
          <li key={i.id}>
            <a href={i.link} style={{backgroundImage:`url(${i.image})`}} alt={i.alt}>{i.alt}</a>
          </li>
        ))}
      </ul>

    </div>
  )
}

export default Instar