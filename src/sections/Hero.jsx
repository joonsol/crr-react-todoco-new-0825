// src/components/Hero.jsx
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { heroSlides } from '../util/hero'
import '../styles/sections/_hero.scss'

const Hero = () => {
  return (
    <div className="hero-container">
      <Swiper
      modules={[Navigation, Pagination, Autoplay]}
        className="swiper hero_slider"
        navigation={{
          nextEl: '.arr_next',
          prevEl: '.arr_prev'
        }}
        pagination={{
          el: '.swiper-pagination',
          type: 'fraction'
        }}
        loop={true}
        // autoplay={{ delay: 5000 }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={`hero-slide ${slide.id}`}
            style={{
              backgroundImage: `url(${slide.image.desktop})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="inner">
              <div className="tit_wrap">
                <h2
                  className="con_tit large_tit"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="txt l_txt">{slide.subtitle}</p>
                <a href={slide.ctaHref} className="con_btn">
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Hero navigation buttons + pagination */}
        <div className="hero_nav">
          <div className="arr_prev"></div>
          <div className="swiper-pagination swiper-pagination-fraction"></div>
          <div className="arr_next"></div>
        </div>
      </Swiper>
    </div>
  )
}

export default Hero
