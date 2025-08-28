const img = (path) => `/img/${path}`;
export const helloData = {
  id: "intro-01",
  layout: "img/",     // 혹은 "image-right-text-left"
  bgColor: "#FFFFFF",
  containerMaxWidth: 1200,             // px

  media: {
    type: "image",                     // "image" | "video"
    src: img("tocobosun_final_s.gif"),   // public 폴더 기준
    alt: "Pink square demo image",
    radius: 24                         // 이미지 둥근 모서리(px)
  },

  eyebrow: "Hello❤️ We are TOCOBO!",
  title: "Follow <br> Your Intuition",
  description:
    "민감하고 섬세한 피부에 직관적인 처방을 제안합니다. <br/> 당신의 직감이 깨끗한 아름다움으로 이어지도록,<br/> 토코보의 진정성 있는 메시지로 응답할게요.",
  cta: {
    label: "MEET TOCOBO",
    href: "/about"
  }
};


