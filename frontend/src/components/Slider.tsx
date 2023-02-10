// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { rewards } from "@/utils";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";
import { SliderItem } from "./SliderItem";

export function Slider() {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
      pagination={true}
      cssMode={true}
      navigation={true}
      slidesPerView={1}
    >
      {rewards.map((reward, index) => {
        return (
          <SwiperSlide key={index}>
            <SliderItem reward={reward} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
