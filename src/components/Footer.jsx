import React, { useState, useEffect, useRef } from 'react';
import { logoData, companyData, customerCenterData, footerMenus, footerLegal } from "../util/footer";
import "../styles/components/_footer.scss";

const Footer = () => {
  const [cusStatus, setCusStatus] = useState(false);
  const hiddenRef = useRef(null);
  const didMount = useRef(false); // 최초 실행 여부 체크

  // 1) 화면폭 기준 초기 상태 세팅 + 리사이즈 대응
  useEffect(() => {
    const reSizeOpen = () => {
      setCusStatus(window.innerWidth < 1111);
    };
    reSizeOpen();
    window.addEventListener("resize", reSizeOpen);
    return () => window.removeEventListener("resize", reSizeOpen);
  }, []);

  // 2) 열림/닫힘 시 height 애니메이션
  useEffect(() => {
    const el = hiddenRef.current;
    if (!el) return;

    // 최초 한 번은 '현재 상태'만 반영(애니메이션 X)
    if (!didMount.current) {
      el.style.height = cusStatus ? 'auto' : '0px';
      didMount.current = true;
      return;
    }

    if (cusStatus) {
      // 닫힘(0) → 펼침(scrollHeight)
      el.style.height = '0px';
      // 강제 리플로우로 0을 확정시킨 뒤…
      void el.offsetHeight;
      el.style.height = el.scrollHeight + 'px';

      const end = () => {
        el.style.height = 'auto'; // 펼쳐진 후 auto로 전환(내용 변동 대응)
        el.removeEventListener('transitionend', end);
      };
      el.addEventListener('transitionend', end);
    } else {
      // 열림(auto/px) → 닫힘(0)
      // auto인 경우 현재 실제 높이(px)로 고정 후 0으로
      if (el.style.height === '' || el.style.height === 'auto') {
        el.style.height = el.scrollHeight + 'px';
        void el.offsetHeight;
      }
      el.style.height = '0px';
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
            {companyData.map((line, i) => (<li key={i}>{line}</li>))}
          </ul>

          <div className="footer-legal">
            <p>{footerLegal.copyright}</p>
            <div className="legal-links">
              {footerLegal.links.map((item, idx) => (
                <a key={idx} href={item.href}>{item.label}</a>
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
                    <li key={j}><a href={item.href}>{item.label}</a></li>
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
            className={`cus-wrap ${cusStatus ? "open" : ""}`}
          >
            <h4>
              {customerCenterData.title}
              <span className="m-plus"></span>
            </h4>

            <div className="hidden" ref={hiddenRef}>
              <p className="cs-box">
                <a href={customerCenterData.tel.href}>{customerCenterData.tel.value}</a>
              </p>
              <p>{customerCenterData.hours}</p>
              <p>{customerCenterData.notice}</p>
              <a className="talk-btn" href={customerCenterData.talk.href}>
                {customerCenterData.talk.label}
              </a>
            </div>
          </div>

          {/* (선택) 모바일 하단 링크 복제라면 유지, 아니면 중복 제거 */}
          <div className="legal-links">
            {footerLegal.links.map((item, idx) => (
              <a key={idx} href={item.href}>{item.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
