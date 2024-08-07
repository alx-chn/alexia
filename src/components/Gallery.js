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
            <SwiperSlide className = "photo" id="hkie1">
              <div className="caption">
                <h1>HKIE Engineers Week</h1>
                <p>I had the honor of being a guest speaker, where I engaged with a diverse audience to share the fascinating workings of SNAPP, the world-record-holding robotic fish</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className = "photo" id="hkie2">
              <div className="caption">
                <h1>HKIE Engineers Week</h1>
                <p>It brings me immense joy to witness the ripple effect of promoting STEM across various generations in Hong Kong - it's like watching a spark ignite a flame of curiosity and learning!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className = "photo" id="hkie3">
              <div className="caption">
                <h1>HKIE Engineers Week</h1>
                <p>I feel so fortunate to be part of an incredible team. Without their dedication and hard work, we wouldn't have achieved such remarkable success. They truly made this journey a blast!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className = "photo" id="sic1">
              <div className="caption">
                <h1>HKU Student Initiated Course</h1>
                <p>In my 2nd year of Computer Science, I taught robot-making to Year 3 Mechanical Engineering students. This experience reinforced my belief that skills and passion can make anyone a teacher, regardless of age. Doing it all in my Iron Man merch was the icing on the cake :)!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className = "photo" id="sic2">
              <div className="caption">
                <h1>HKU Student Initiated Course</h1>
                <p>Meet my brilliant students and exceptional teammates - the source of my immense pride!</p>
              </div>
            </SwiperSlide>
            <SwiperSlide className = "photo" id="dd">
              <div className="caption">
                <h1>Dramatic Duolouge</h1>
                <p>I was honored to win third place in a Dramatic Monologue competition against experienced international school students. I love acting :D It's not only enjoyable, but also enriching, as I often adopt traits from my characters into my daily life.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      );
}

export default Gallery;