import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-flip';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

import hkie1 from '../images/hkie1.jpg'
import hkie2 from '../images/hkie2.jpg'
import hkie3 from '../images/hkie3.jpeg'
import sic1 from '../images/sic1.jpg'
import sic2 from '../images/sic2.jpg'
import dd2 from '../images/dd2.jpg'

const Gallery = () => {
    return (
        <section id = "gallery">
          <h1 className = "title">Gallery</h1>
          <Swiper
            effect={'flip'}
            grabCursor={true}
            pagination={true}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className = "photo">
              <img src={hkie1} />
            </SwiperSlide>
            <SwiperSlide className = "photo">
              <img src={hkie2} />
            </SwiperSlide>
            <SwiperSlide className = "photo">
              <img src={hkie3} />
            </SwiperSlide>
            <SwiperSlide className = "photo">
              <img src={sic1} />
            </SwiperSlide>
            <SwiperSlide className = "photo">
              <img src={sic2} />
            </SwiperSlide>
            <SwiperSlide className = "photo">
              <img src={dd2} />
            </SwiperSlide>
          </Swiper>
        </section>
      );
}

export default Gallery;