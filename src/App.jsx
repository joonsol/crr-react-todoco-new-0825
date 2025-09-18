
import Header from "./components/Header"
import Footer from "./components/Footer"
import Hero from "./sections/Hero"

import Cta from "./sections/Cta"

import "./styles/main.scss"
import TopBanner from "./components/TopBanner"
import { useState, useEffect } from "react"
import TopBtn from "./components/TopBtn"
import Hello from "./sections/Hello"
import Collection from "./sections/Collection"
import Skincare from "./sections/Skincare"
import Instargram from "./sections/Instargram"
import AOS from "aos"
import "aos/dist/aos.css";
function App() {

  const [topBanner, setTopBanner] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mNavOpen, setMNavOpen] = useState(false)


  useEffect(() => {
    AOS.init({
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
    });
  }, [])
  useEffect(() => {
    document.body.style.overflow = mNavOpen ? 'hidden' : ''
  }, [mNavOpen])



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY

      setIsScrolled(scrollTop > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)

  })
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1111) setMNavOpen(false)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)

  }, [])

  const handleNavOpen = () => setMNavOpen(true)
  const handleNavClose = () => setMNavOpen(false)


  const upTopBanner = () => {
    setTopBanner("up")
  }

  return (
    <div className={`app-container  ${topBanner} ${isScrolled ? "scrolled" : ""}`}>
      <TopBtn />
      <TopBanner onClick={upTopBanner} />
      <Header
        mNavOpen={mNavOpen}
        onNavOpen={handleNavOpen}
        onNavClose={handleNavClose}
      />
      <main>
        <section id="Hero" className="Section">
          <Hero />
        </section>
        <section id="Cta" className="Section">
          <Cta />
        </section>
        <section id="Hello" className="Section">
          <Hello />
        </section>

        <section id="Collection" className="Section">
          <Collection />
        </section>
        <section id="Skincare" className="Section">
          <Skincare />
        </section>
        <section id="Instar" className="Section">
          <Instargram />
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default App
