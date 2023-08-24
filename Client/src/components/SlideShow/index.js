import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SlideShow.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";

// import required modules
import { Autoplay } from "swiper/modules";

SlideShow.propTypes = {};
const logo = [];

for (let i = 1; i < 35; i++) {
  logo.push(
    `https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/LogoSchool/${i}.png`
  );
}

const cx = classNames.bind(styles);

function SlideShow(props) {
  return (
    <div className={cx("wrapper")}>
      <Swiper
        loop
        spaceBetween={24}
        slidesPerView={5}
        allowTouchMove={false}
        breakpoints={{
            744: {
                slidesPerView: 9,
                
            },
            1024: {
                slidesPerView: 12,
                
            }
        }}
        autoplay={{
          delay:1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className={cx("swipper")}
      >
        {logo.map((src, index) => {
          return (
            <SwiperSlide className={cx("slide")} key={index}>
              <img className={cx("logo")} src={src}  alt="logo" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default SlideShow;
