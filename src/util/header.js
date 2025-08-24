// src/util/header.js

// 공통 이미지 경로 헬퍼 (public/img 기준)
const img = (path) => `/img/${path}`;

export const headerData = {
  // 로고
  logo: {
    src: img("logo.svg"),  // 예: /public/img/logo_tocobo.svg
    alt: "TOCOBO",
    href: "/",                    // 로고 클릭시 이동
    width: 120,
    height: 28,
  },

  // 상단 공지/배너 (TopBanner용)
  topBanner: {
    enabled: true,
    height: 64,                   // px
    items: [
      { id: "tb-1", text: "새로운 소식이 있습니다.", href: "#" },
      { id: "tb-2", text: "업데이트 안내", href: "#" },
      { id: "tb-3", text: "이벤트 진행 중!", href: "#" },
    ],
    closeIcon: img("icon_pop_close_b.png"),
    background: "#DC272D",
    color: "#fff",
  },

  // GNB 메뉴 (섹션 스크롤 ID 매칭)
  menus: [
    { id: "brand",      label: "BRAND",      href: "#brand",      type: "section" },
    { id: "products",   label: "PRODUCTS",   href: "#products",   type: "section" },
    { id: "ingredients",label: "INGREDIENTS",href: "#ingredients",type: "section" },
    { id: "reviews",    label: "REVIEWS",    href: "#reviews",    type: "section" },
    // 필요 시 외부 링크(쇼핑몰)도 추가 가능
    // { id: "store", label: "SHOP", href: "https://store.example.com", type: "external" },
  ],

  // 퀵 링크(헤더 우측 짧은 링크들: 고객센터/공지/매장안내 등)
  quickLinks: [
    { id: "notice", label: "공지사항", href: "/notice" },
    { id: "cs",     label: "고객센터", href: "/support" },
    { id: "store",  label: "오프라인 매장", href: "/stores" },
  ],

  // 유틸 액션(아이콘 버튼들)
  actions: [
    {
      id: "search",
      label: "검색",
      icon: img("icons/search.svg"),
      type: "modal",       // modal | route | dropdown
      action: "openSearch" // 프론트에서 핸들링
    },
    {
      id: "cart",
      label: "장바구니",
      icon: img("icons/cart.svg"),
      type: "route",
      href: "/cart",
      badgeKey: "cartCount", // 아래 badges 참조
    },
    {
      id: "account",
      label: "마이",
      icon: img("icons/user.svg"),
      type: "dropdown",
      menu: [
        { id: "login",  label: "로그인", href: "/login" },
        { id: "orders", label: "주문/배송", href: "/orders" },
        { id: "mypage", label: "마이페이지", href: "/mypage" },
      ],
    },
    {
      id: "lang",
      label: "KR",
      icon: img("icons/globe.svg"),
      type: "dropdown",
      menu: [
        { id: "ko", label: "KR", href: "?lang=ko" },
        { id: "en", label: "EN", href: "?lang=en" },
      ],
    },
  ],

  // 뱃지/카운트 상태값 (전역 상태 연동 시 key만 맞추면 됨)
  badges: {
    cartCount: 0, // 장바구니 품목 수
    noticeNew: 0,
  },

  // 소셜 링크
  socials: [
    { id: "ig",  label: "Instagram", icon: img("icons/instagram.svg"), href: "https://instagram.com/..." },
    { id: "yt",  label: "YouTube",   icon: img("icons/youtube.svg"),   href: "https://youtube.com/..." },
    { id: "fb",  label: "Facebook",  icon: img("icons/facebook.svg"),  href: "https://facebook.com/..." },
  ],

  // 연락처/브랜드 정보 (푸터나 헤더 드롭다운에서 재사용)
  contact: {
    tel: "1644-0000",
    email: "help@tocobo.co.kr",
    address: "Seoul, Korea",
    bizNo: "000-00-00000",
  },

  // 모바일 메뉴(햄버거) 옵션
  mobile: {
    breakpoint: 1024, // px
    enableDrawer: true,
  },
};

// 동적으로 장바구니 뱃지 업데이트할 때 사용할 헬퍼 (선택)
export const headerHelpers = {
  setCartCount(n) {
    headerData.badges.cartCount = Number.isFinite(n) ? n : 0;
  },
};
