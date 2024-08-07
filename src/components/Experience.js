import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

const Experience = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const experienceTitle = activeSlide >= 2 // Adjust this condition as needed
    ? "Other Experience"
    : "Work Experience";

  const handleSwiper = (swiper) => {
    swiper.on('slideChange', () => {
      setActiveSlide(swiper.activeIndex);
    });
  };

  return (
    <section id="exp">
      <h1 className="title">{experienceTitle}</h1>
		<Swiper
			effect={'cards'}
			grabCursor={true}
			modules={[EffectCards]}
			className="swiperContainer"
			onSwiper={handleSwiper}
		>
			<SwiperSlide id='fwd'>
			<div className="swiperSlide content">
				<h1>FWD Group</h1>
				<p><i>Jun 2023 - Aug 2023</i></p>
				<p><i>Software Engineering Intern - System Automation</i></p>
				<p>Come back later for updates :) !</p>
				<p>#Ansible, #Cloud, #Agile</p>
			</div>
			</SwiperSlide>
			<SwiperSlide id="hkpc">
			<div className="swiperSlide content">
				<h1>Hong Kong Productivity Council</h1>
				<p><i>Jun 2022 - Aug 2022</i></p>
				<p><i>Greater Bay Area Business Development Summer Intern</i></p>
				<p>Assited SMEs with their business plannig for Industry4.0</p>
				<p>#Metaverse, #AI, #Cloud Computing</p>
			</div>
			</SwiperSlide>
			<SwiperSlide id="csa">
			<div className="swiperSlide content">
				<h1>CSA@HKU</h1>
				<p><i>Jan 2023 - Present</i></p>
				<p><i>Chairperson</i></p>
				<p>My team and I lead a community with 500+ tech enthusiasts!</p>
				<p>Feel free to reach out for collaboration :)</p>
			</div>
			</SwiperSlide>
			<SwiperSlide id="breed">
			<div className="swiperSlide content">
				<h1>BREED HKU</h1>
				<p><i>Sep 2021 - Jan 2023</i></p>
				<p><i>Exco & Tech Lead</i></p>
				<p><a href="https://www.hku.hk/press/news_detail_22621.html">We were the world record winner!</a></p>
				<p>We inspire the next generation by actively promoting and providing vibrant, hands-on STEM education experiences :)</p>
			</div>
			</SwiperSlide>
			<SwiperSlide id="aiesec">
			<div className="swiperSlide content">
				<h1>AIESEC HKU</h1>
				<p><i>Sep 2021 - Aug 2022</i></p>
				<p><i>Outgoing Global Talents Officer</i></p>
				<p>I guided HKU students to explore different paths and talents!</p>
				<p>It is good for us to find our place in the global village and build a better future :)</p>
			</div>
			</SwiperSlide>
		</Swiper>
    </section>
  );
};

export default Experience;