import React, { useState, useRef, useEffect } from 'react';
import { logoData, companyData, customerCenterData, footerMenus, socialLinks, footerLegal } from "../util/footer";

import "../styles/components/footer.scss"

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 애니메이션을 적용할 'hidden' 클래스 div에 접근하기 위한 ref
  const hiddenContentRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      // 화면 너비가 1111px 이상일 때 메뉴를 항상 열린 상태로 유지합니다.
      setIsOpen(window.innerWidth >= 1111);
    };

    // 컴포넌트 마운트 시 초기 상태 설정
    handleResize();

    // 리사이즈 이벤트 리스너 등록 및 클린업
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const el = hiddenContentRef.current;
    if (!el) return;

    if (isOpen) {
      // 열릴 때: height를 scrollHeight로 설정하여 애니메이션 시작
      el.style.height = `${el.scrollHeight}px`;

      // transition이 끝난 후 height를 'auto'로 변경하여 콘텐츠에 맞춰 높이를 자유롭게 설정
      const onTransitionEnd = () => {
        el.style.height = "auto";
        el.removeEventListener("transitionend", onTransitionEnd);
      };
      el.addEventListener("transitionend", onTransitionEnd);
    } else {
      // 닫힐 때: 현재 높이를 픽셀로 고정하고, 강제 리플로우 후 height를 0으로 만듭니다.
      el.style.height = `${el.scrollHeight}px`;
      void el.offsetHeight; // 강제 리플로우 (브라우저가 높이값을 확정하도록 함)
      el.style.height = "0px";
    }
  }, [isOpen]);

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
              {footerLegal.links.map((item, i) => (
                <a key={i} href={item.href}>
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
        {/* 오른쪽 영역(비워둠 / SNS 등 넣을 자리) */}
        <div className="right">

          {/* 고객센터 */}
          <div
            onClick={() => setIsOpen(prevStatus => !prevStatus)}
            className={`${isOpen ? "open" : ""} cus-wrap`}
          >
            <h4>
              {customerCenterData.title}
              <span className="m-plus"></span>

            </h4>
            <div className="hidden"  ref={hiddenContentRef}>

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

          <div className="footer-legal">

            <div className="legal-links">
              {footerLegal.links.map((item, i) => (
                <a key={i} href={item.href}>
                  {item.label}
                </a>
              ))}
            </div>

          </div>

          <ul className="sns-links">
            {socialLinks.map((sns) => (
              <li key={sns.id}>
                <a href={sns.href}
                  target="_blank" rel="noreferrer noopener"
                  aria-label={sns.label}
                  title={sns.label}>
                  {React.createElement(sns.icon, { size: 22, "aria-hidden": true })}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </footer>
  );
};

export default Footer;