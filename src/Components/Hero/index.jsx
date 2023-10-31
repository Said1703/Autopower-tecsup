/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { SwiperBasic, SwiperGold, SwiperPlatinium } from "../../Components";

export default function Hero({pryceForm}) {

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <SwiperBasic pryceForm={pryceForm}/>
        </SwiperSlide>
        {/* slide1 */}
        <SwiperSlide>
          <SwiperGold pryceForm={pryceForm}/>
        </SwiperSlide>
        {/* slide2 */}
        <SwiperSlide>
          <SwiperPlatinium pryceForm={pryceForm}/>
        </SwiperSlide>
        {/* slide3 */}
      </Swiper>
    </>
  );
}
