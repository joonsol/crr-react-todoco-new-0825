const img = (path) => `/img/${path}`


export const headerData = {
    logo: {
        src: img("logo.svg"),  // 예: /public/img/logo_tocobo.svg
        alt: "TOCOBO",
        href: "/",                    // 로고 클릭시 이동
        width: 120,
        height: 28,
    },
    menus: [
        { id: "Hero", label: "Hero", href: "#Hero", type: "section" },
        { id: "Cta", label: "Cta", href: "#Cta", type: "section" },
        { id: "Hello", label: "Hello", href: "#Hello", type: "section" },
        { id: "Collection", label: "Collection", href: "#Collection", type: "section" },
        { id: "Skincare", label: "SkicCare", href: "#Skincare", type: "section" },
        { id: "Instar", label: "Instar", href: "#Instar", type: "section" },
    ],
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

    utils: [
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바", icon: img("icon_cart.svg"), href: "#" },
    ],



}