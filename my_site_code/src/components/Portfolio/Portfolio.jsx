import React from 'react'
import './Portfolio.css'
import {Swiper ,SwiperSlide} from 'swiper/react'
import "swiper/css";
import s1 from "../../img/s-1.jpg";
import s2 from "../../img/s2.jpg";
import s3 from "../../img/s3.jpg";
import s4 from "../../img/s4.jpg";
import s5 from "../../img/s5.jpg";
import s6 from "../../img/s6.jpg";
import { themeContext } from '../../Context';
import { useContext } from 'react';

const Portfolio = () => {
   const theme  = useContext(themeContext);
   const darkMode = theme.state.darkMode;
  return (
    <div className='portfolio' id='Portfolio'>
      <span style={{color:darkMode?'white':''}}>Recent Projects </span>
      <span>on Frontend</span>
      {/* sider */}
      <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'>
         <SwiperSlide>
            <img src={s1} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={s2} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={s3} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={s4} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={s5} alt="" />
         </SwiperSlide>
         <SwiperSlide>
            <img src={s6} alt="" />
         </SwiperSlide>

      </Swiper>
    </div>
    
  )
}

export default Portfolio
