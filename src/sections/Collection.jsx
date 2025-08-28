import React ,{useRef,useEffect}from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../styles/sections/_collection.scss'
import collectionData from '../util/collection'


const Collection = () => {
    const prevRef = useRef(null)
  const nextRef = useRef(null)
  const swiperRef = useRef(null)
    // ⭐ DOM이 다 마운트된 이후 수동으로 연결
    useEffect(() => {
      if (
        swiperRef.current &&
        swiperRef.current.params &&
        prevRef.current &&
        nextRef.current
      ) {
        swiperRef.current.params.navigation.prevEl = prevRef.current
        swiperRef.current.params.navigation.nextEl = nextRef.current
        swiperRef.current.navigation.destroy()
        swiperRef.current.navigation.init()
        swiperRef.current.navigation.update()
      }
    }, [])
  return (
     <div className="inner collection-inner">
        <div className="tit_wrap">
          <div className="con_tit">
            TOCOBO <br className="m_only" /> COLLECTION
          </div>
          <p className="txt_2">Shop By Category</p>
        </div>

        <div className="s2_slider_wrap">
          <div className="in">
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={3}
              loop={true}
              pagination={{ type: 'progressbar' }}
              onSwiper={(swiper) => (swiperRef.current = swiper)} // ✅ swiper instance 저장
              className="s2_slider"
            >
              {collectionData.map((item) => (
                <SwiperSlide key={item.id}>
                  <a href="#">
                    <div className="info_wrap">
                      <div className="collect_btn">{item.title}</div>
                      <div className="name sFont">{item.name}</div>
                      <div className="kname">{item.kname}</div>
                    </div>
                    <div className="img_wrap">
                      <img src={item.image} alt={item.name} />
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* 외부 버튼 */}
            <button
              className="custom-prev"
              type="button"
              ref={prevRef}
            ></button>
            <button
              className="custom-next"
              type="button"
              ref={nextRef}
            ></button>
          </div>
        </div>
      </div>
  )
}

export default Collection