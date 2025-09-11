import React, { useState, useEffect, useRef } from 'react';
import { logoData, companyData, customerCenterData, footerMenus, footerLegal } from "../util/footer";
import "../styles/components/_footer.scss";

const Footer = () => {
  const [cusStatus, setCusStatus] = useState(false);
  const hiddenRef = useRef(null);

  // 반응형 대응 (1111px 미만일 때 자동 닫힘/열림)
  useEffect(() => {
    const reSizeOpen = () => {
      setCusStatus(window.innerWidth < 1111);
    };
    reSizeOpen();
    window.addEventListener("resize", reSizeOpen);
    return () => window.removeEventListener("resize", reSizeOpen);
  }, []);

  // 열림/닫힘 시 height 애니메이션 적용
  useEffect(() => {
    const el = hiddenRef.current;
    if (!el) return;

    if (cusStatus) {
      // 열릴 때: 현재 scrollHeight로 설정 → transition 끝난 후 auto
      el.style.height = el.scrollHeight + "px";
      const end = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", end);
      };
      el.addEventListener("transitionend", end);
    } else {
      // 닫힐 때: 현재 높이를 픽셀로 고정 → 강제로 리플로우 후 height: 0
      el.style.height = el.scrollHeight + "px";
      // 강제 리플로우 (브라우저에게 높이값 확정시킴)
      void el.offsetHeight;
      el.style.height = "0px";
    }
  }, [cusStatus]);

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
          <div className="footer-legal">
            <p>{footerLegal.copyright}</p>
            <div className="legal-links">
              {footerLegal.links.map((item, idx) => (
                <a key={idx} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
          </div>
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

        {/* 오른쪽 영역 (고객센터) */}
        <div className="right">
          <div 
            onClick={() => setCusStatus(v => !v)}
           className={`${cusStatus ? "open" : ""} cus-wrap`}
          >
            <h4>
              {customerCenterData.title}
              <span className="m-plus"></span>
            </h4>

            {/* JS height transition */}
            <div className="hidden" ref={hiddenRef}>
              <p className="cs-box">
                <a href={customerCenterData.tel.href}>
                  {customerCenterData.tel.value}
                </a>
              </p>
              <p>{customerCenterData.hours}</p>
              <p>{customerCenterData.notice}</p>
              <a className="talk-btn" href={customerCenterData.talk.href}>
                {customerCenterData.talk.label}
              </a>
            </div>
          </div>

            <div className="legal-links">
              {footerLegal.links.map((item, idx) => (
                <a key={idx} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>
       
        </div>
      </div>
    </footer>
  );
};

export default Footer;
