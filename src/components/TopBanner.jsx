import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import '../styles/components/_topbanner.scss'

import { headerData } from '../util/header'
const TopBanner = ({ }) => {
  const tbData = headerData.topBanner.items
  const closeBtn = headerData.topBanner.closeIcon
  return (
    <div className="top_banner">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        className="tb_slider"
      >
        {tbData.map((item) => (
          <SwiperSlide key={item.id}>
            <a href={item.href}>{item.text}</a>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="close" style={{backgroundImage:`url(${closeBtn})`}}></div>
    </div>
  )
}

export default TopBanner