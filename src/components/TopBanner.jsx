import React from 'react'
import { headerData } from '../util/header'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "../styles/components/topbanner.scss"
import { Autoplay } from 'swiper/modules';
const TopBanner = ({onClick}) => {

  const tbData = headerData.topBanner.items
  const closeBtn = headerData.topBanner.closeIcon
  return (
    <div className='TopBanner'>
      <Swiper
        direction='vertical'
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
      >
        {tbData.map((item) => (
          <SwiperSlide
            key={item.id}
          >
            <a href={item.href}>
              {item.text}
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div 
      className="closeBtn" 
      onClick={onClick}
      style={{backgroundImage:`url(${closeBtn})`}}
      >
        close btn
      </div>
  
    </div>
  )
}

export default TopBanner