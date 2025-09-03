import React from 'react';
import { logoData, companyData, customerCenterData, footerMenus } from "../util/footer";
import Nav from './Nav';
import "../styles/components/_footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="inner foot-inner">
        <div className="left">
          <h3>
            <a href={logoData.href}>
              <img src={logoData.src} alt={logoData.alt} />
            </a>
          </h3>

          <ul className="foot-lst-1">
            {companyData.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>

        </div>

        <div className="center">
          <div className="foot-menus">
            {footerMenus.map((menu, i) => (
              <div key={i}>
                <h4>{menu.title}</h4>
                <ul>
                  {menu.items.map((item, j) => (
                    <li key={j}>
                      <a href={item.href}>{item.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* 오른쪽 영역(비워둠 / SNS 등 넣을 자리) */}
        <div className="right">

          {/* 고객센터 */}
          <div>
            <h4>{customerCenterData.title}</h4>
            <p className='cs-box'>
              <a href={customerCenterData.tel.href}>
                {customerCenterData.tel.value}
              </a>
            </p>
            <p>{customerCenterData.hours}</p>
            <p>{customerCenterData.notice}</p>
            <a className='talk-btn' href={customerCenterData.talk.href}>
              {customerCenterData.talk.label}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
