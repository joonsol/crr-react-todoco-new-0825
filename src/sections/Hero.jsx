import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { heroSlides } from '../util/hero'
import '../styles/sections/hero.scss'
const Hero = () => {

  const [isMobile, setIsMobile]=useState(window.innerWidth<=1111)

  useEffect(()=>{
    const handleResize =()=> setIsMobile(window.innerWidth<=1111)

    window.addEventListener('resize',handleResize)

    return ()=>window.removeEventListener('resize',handleResize)
  },[])

  return (
    <div className='hero-container'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: '.arr-next',
          prevEl: '.arr-prev'
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction'
        }}
        loop={true}
      //  autoplay={true}

      >

        {heroSlides.map((slide) => (

          <SwiperSlide
            key={slide.id}
            className={`hero-slide ${slide.id}`}
            style={{ backgroundImage: `url(${isMobile? slide.image.mobile:slide.image.desktop})` }}
          >
            <div className="inner">
              <div className="t-wrap">

                <h2 className='tit'
                dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                 
                <p className="txt">
                  {slide.subtitle}
                </p>
                <a href={slide.ctaHref} className="btn">
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

     <div className="hero-nav">
      <div className="arr-prev">prev</div>
      <div className="swiper-pagination"></div>
      <div className="arr-next">next</div>
     </div>

      </Swiper>
    </div>
  )
}

export default Hero