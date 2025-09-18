import React from 'react'
import skincare from "../util/skincare"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import "../styles/sections/skincare.scss"
const Skincare = () => {
  return (
    <div className='inner skincare-inner'>
      <div className="t-wrap">

        <h2 className="tit" >
          Vegan Skincare
        </h2>
        <p className="txt">
          피부에 건강한 영향력을 전달하고 꼭 필요한 성분만을 담아 <br />
          놀라운 변화를 선사하는 비건 스킨케어 브랜드 토코보
        </p>
        <a href="#" className="btn">
          MEET TOCOBO
        </a>
      </div>
      <div className="slider-wrap">
        <div className="in">

          <Swiper
            slidesPerView={2}
            spaceBetween={30}
            className="skincare-slider"
            loop={true}
          >
            {skincare.map((sl) => (
              <SwiperSlide
                style={{
                  backgroundImage: `url(${sl.image})`
                }}
                key={sl.id}>
                <a href={sl.link}>
                  {sl.id}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </div>
  )
}

export default Skincare