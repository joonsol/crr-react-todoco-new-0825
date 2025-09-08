import React from 'react'
import skincare from "../util/skincare"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import "../styles/sections/_skincare.scss"
import 'swiper/css'
const SkinCare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="tit-wrap">
        <h2 className="con-tit">
          Vegan  <br className="m_only" />
          Skincare
        </h2>
        <p className="txt-3">피부에 건강한 영향력을 전달하고 꼭 필요한 성분만을 담아 <br />
          놀라운 변화를 선사하는 비건 스킨케어 브랜드 토코보
        </p>
        <a href="#" className="con_btn">
          Meet Tocobo
        </a>
      </div>

      <div className="skincare-sl-wrap">
        <div className="in">

          <Swiper
            modules={[Autoplay]}
            className="swiper hero_slider"
            slidesPerView={2}
            loop={true}
                 spaceBetween={30}
          // autoplay={{ delay: 5000 }}
          >
            {skincare.map((slide) => (
              <SwiperSlide
                key={slide.id}
                className={`hero-slide ${slide.id}`}

                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <a href={slide.link}>
                  {slide.id}
                </a>
              </SwiperSlide>
            ))}


          </Swiper>


        </div>
      </div>
    </div>


  )
}

export default SkinCare