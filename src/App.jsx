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
import { useState } from 'react'
export default function App() {
    const [topBanner, setTopBanner] = useState("")

      const upTopBanner=()=>{
      setTopBanner('up')
  }
  return (
  <div className={`app-container ${topBanner}`}>
    <FixedTopBtn/>
  <TopBanner  onClick={upTopBanner} topBanner={topBanner}/>
      <Header />
      <main>
        <section className="Section" id="Hero"><Hero /></section>
        <section className="Section" id="Cta"><Cta /></section>
        <section className="Section" id="Hello">
          <Hello/>
        </section>
        <section className="Section" id="Collection">
          <Collection/>
        </section>
        <section className="Section" id="SkinCare">
          <SkinCare/>
        </section>
        <section className="Section" id="Instar">
          <Instar/>
        </section>
      </main>
      <Footer />
    </div>
  );
}
