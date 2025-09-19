const img = (path) => `/img/${path}`;


// Hero 슬라이더용 "가짜 DB" 데이터
export const heroSlides = [
  {
    id: "hs-1",
    title: "Always Sun-Ready <br>Mini Sun Stick Trio",
    subtitle: "Clean • Gentle • Effective",
    desc: "피부 본연의 균형을 위한 미니멀 케어",
    ctaText: "미니 선스틱 트리오 보기",
    ctaHref: "/products",
    image: {
      desktop: img("main_d_1.png"),
      mobile: img("main_mo_1.jpg"),
    },
    alt: "비건 스킨케어 히어로 배너",
    active: true,
    order: 1,
  },
  {
    id: "hs-2",
    title: "Hydration That Lasts",
    subtitle: "Moisture Barrier Care",
    desc: "가볍지만 깊게, 산뜻한 촉촉함",
    ctaText: "컬러립밤 보러가기",
    ctaHref: "/story/hydration",
    image: {
      desktop:  img("main_d_2.png"),
      mobile: img("main_mo_2.jpg"),
    },
    alt: "보습 라인 배너",
    active: true,
    order: 2,
  },
  {
    id: "hs-3",
    title: "Scent-Free, Worry-Free",
    subtitle: "Sensitive Skin Friendly",
    desc: "민감 피부를 위한 무향 포뮬러",
    ctaText: "스타터 키트 보러가기",
    ctaHref: "/collections/sensitive",
    image: {
      desktop:  img("main_d_3.png"),
      mobile: img("main_mo_3.jpg"),
    },
    alt: "민감 피부 라인 배너",
    active: true,
    order: 3,
  },
  {
    id: "hs-4",
    title: "Eco-Conscious Beauty",
    subtitle: "Vegan & Cruelty-Free",
    desc: "지속 가능성을 생각한 깔끔한 선택",
    ctaText: "혜택보러가기",
    ctaHref: "/about",
    image: {
      desktop:  img("main_d_4.png"),
      mobile: img("main_mo_4.jpg"),
    },
    alt: "브랜드 철학 배너",
    active: true,
    order: 4,
  },
];

// 활성 슬라이드만 가져오기
export const getActiveHeroSlides = () =>
  heroSlides.filter(s => s.active).sort((a, b) => a.order - b.order);