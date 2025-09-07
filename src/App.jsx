// src/App.jsx
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Cta from "./sections/Cta";
import Footer from "./components/Footer";
import "./styles/main.scss";
import TopBanner from "./components/TopBanner";
import "./styles/layout/_container.scss"
import FixedTopBtn from "./components/FixedTopBtn";
import Hello from './sections/Hello'
import Collection from './sections/Collection'
import SkinCare from './sections/SkinCare'
import Instar from './sections/Instar'
import { useState, useEffect } from 'react'

export default function App() {
  const [topBanner, setTopBanner] = useState("");
  const [navOpen, setNavOpen] = useState(false);        // ⬅️ Nav 상태를 최상위로

  const upTopBanner = () => setTopBanner('up');

  // (선택) 메뉴 열렸을 때 바디 스크롤 잠금
  useEffect(() => {
    document.body.style.overflow = navOpen ? 'hidden' : '';
  }, [navOpen]);


  useEffect(()=>{
    const handleResize=()=>{

      if(window.innerWidth>768)setNavOpen(false)
      }
    window.addEventListener('resize',handleResize)
    handleResize()
    return ()=>{window.removeEventListener('resize',handleResize)}
  },[])


  const handleNavOpen = () => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);
  const handleNavToggle = () => setNavOpen(prev => !prev);

  return (
    <div className={`app-container ${topBanner} ${navOpen ? 'nav-open' : ''}`}>
      <FixedTopBtn />
      <TopBanner onClick={upTopBanner} topBanner={topBanner} />
      <Header
        navOpen={navOpen}
        onNavOpen={handleNavOpen}
        onNavClose={handleNavClose}
        onNavToggle={handleNavToggle}
      />
      <main onClick={navOpen ? handleNavClose : undefined /* 빈 곳 클릭 시 닫힘(옵션) */}>
        <section className="Section" id="Hero"><Hero /></section>
        <section className="Section" id="Cta"><Cta /></section>
        <section className="Section" id="Hello"><Hello/></section>
        <section className="Section" id="Collection"><Collection/></section>
        <section className="Section" id="SkinCare"><SkinCare/></section>
        <section className="Section" id="Instar"><Instar/></section>
      </main>
      <Footer />
    </div>
  );
}
