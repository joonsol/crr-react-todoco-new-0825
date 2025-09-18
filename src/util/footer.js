// src/util/footer.js
const img = (path) => `/img/${path}`;
import { FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { RiKakaoTalkFill } from "react-icons/ri";

// 로고
export const logoData = {
  src: img("logo.svg"),
  alt: "TOCOBO 로고",
  href: "/",
};

// 회사 정보
export const companyData = [
  "주식회사 픽톤  대표 : 이병훈",
  "주소 : 03966 서울특별시 마포구 월드컵북로15길 45 (성산동)",
  "사업자등록번호 : 196-81-02410 [사업자정보확인]",
  "통신판매업신고 : 제2021-서울마포-2994호 개인정보보호책임자 : 안주영",
  "TEL : 02-6352-2410  E-MAIL : help@thepicton.com",
  "마케팅문의 : 마케팅팀 mkt@thepicton.com",
  "수출문의 : 해외영업팀 sales1@thepicton.com",
  "특판&대량구매문의 : 국내영업팀 sales@thepicton.com",
];
export const footerLegal = {
  copyright: "COPYRIGHT© 주식회사 픽톤 2021 TOCOBO. ALL RIGHT RESERVED.",
  links: [
    { label: "이용약관", href: "/terms" },
    { label: "개인정보처리방침", href: "/privacy" },
    { label: "이용안내", href: "/guide" }
  ]
};
// 고객센터
export const customerCenterData = {
  title: "Customer Center",
  tel: { value: "02-6352-2410", href: "tel:0263522410" },
  hours: "AM 10:00 - PM 5:00 (Lunch 12:00 - 13:00)",
  notice: "토, 일요일 및 공휴일 휴무",
  talk: { label: "1:1 TALK", href: "#" },
};

// 메뉴
export const footerMenus = [
  {
    title: "Brand",
    items: [
      { label: "Brand Story", href: "/brand-story" },
      { label: "Collection", href: "/collection" },
    ],
  },
  {
    title: "Shop",
    items: [
      { label: "All Product", href: "/shop" },
      { label: "MakeUp", href: "/shop/makeup" },
      { label: "Cleansing", href: "/shop/cleansing" },
      { label: "Skincare", href: "/shop/skincare" },
      { label: "Sun", href: "/shop/sun" },
      { label: "Lip", href: "/shop/lip" },
      { label: "Set/Etc", href: "/shop/etc" },
    ],
  },
  {
    title: "Promotion",
    items: [{ label: "Promotion", href: "/promotion" }],
  },
  {
    title: "Community",
    items: [
      { label: "Notice", href: "/notice" },
      { label: "FAQ", href: "/faq" },
      { label: "Review", href: "/review" },
      { label: "1:1 CS", href: "/cs" },
    ],
  },
];

export const socialLinks = [
  {
    id: "kakao",
    label: "KakaoTalk 채널",
    href: "https://pf.kakao.com/your-channel",
    icon: RiKakaoTalkFill
  },
  {
    id: "instagram",
    abel: "Instagram",
    href: "https://www.instagram.com/your-instagram",
    icon: FaInstagramSquare
  },
  {
    id: "youtube", 
    label: "YouTube",
    href: "https://www.youtube.com/@your-youtube",
    icon: FaYoutube
  },
];
