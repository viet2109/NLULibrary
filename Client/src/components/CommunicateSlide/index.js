import React, { useRef } from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import classNames from "classnames/bind";
import styles from "./CommunicateSlide.module.scss";
import { ArrowLeftType2, ArrowRightType2 } from "../Icons";
import { Navigation } from "swiper/modules";
CommunicateSlide.propTypes = {};
const cx = classNames.bind(styles);

function CommunicateSlide(props) {

  return (
    <div className={cx('wrapper')}>
       
        <Swiper
          loop
          slidesPerView={4}
          allowTouchMove
          breakpoints={{
            744: {
              slidesPerView: 6,
              allowTouchMove: false
            },
            
          }}
          navigation={{
            prevEl: `.${cx('prev-but')}`,
            nextEl: `.${cx('next-but')}`
          }}
          spaceBetween={18}
          modules={[Navigation]}
          className={cx("swiper")}
        >
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel1.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel2.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel3.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel4.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel5.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
          <SwiperSlide className={cx("swiper-slide")}>
            <div className={cx("swiper-img-wrapper")}>
              <img
                className={cx("swiper-img")}
                src="https://shub.edu.vn/images/landing/ver3/image-section/carousel6.png"
                alt="img"
              ></img>
            </div>
          </SwiperSlide>
        </Swiper>
        <div  className={cx('nav-button')}>
              <ArrowLeftType2 className={cx('prev-but')} />
          </div>
          
          <div  className={cx('nav-button')}>
              <ArrowRightType2 className={cx('next-but')} />
          </div>
    </div>
  );
}

export default CommunicateSlide;
