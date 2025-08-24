import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import '../styles/components/_topbanner.scss'


const TopBanner = ({}) => {

    return (
        <div className='top_banner '>
            <Swiper
                direction="vertical"       // ✅ 세로 슬라이드
                slidesPerView={1}
                loop={true}
                // autoplay={{ delay: 3000 }} // ✅ 자동 슬라이드
                // modules={[Autoplay]}
                className="tb_slider"
            >
                <SwiperSlide>
                    <a href="#">새로운 소식이 있습니다.</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#"> 업데이트 안내</a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#"> 이벤트 진행 중!</a>
                </SwiperSlide>
            </Swiper>
            <div className="close" ></div>
        </div>
    )
}

export default TopBanner