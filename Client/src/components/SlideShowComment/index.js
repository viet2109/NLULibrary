import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./SlideShowComment.module.scss";
import classNames from "classnames/bind";
import { ArrowLeftType2, ArrowRightType2 } from "../Icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

SlideShowComment.propTypes = {};

const cx = classNames.bind(styles);

const listComment = [];

for (let i = 0; i < 10; i++) {
  listComment.push({
    image:
      "https://shub.edu.vn/_next/image?url=https%3A%2F%2Fshub-storage.sgp1.cdn.digitaloceanspaces.com%2Flanding-resource-2%2Fimages%2FMonumentSection%2FFirst%2F2.jpg&w=64&q=75",
    school: "Trường Cao đẳng Công thương Thái Nguyên",
    name: "Cô Anh Quyết" + i,
    des: "Thực ra tôi đã cùng Shub từ những ngày đầu Covid.Cùng chia sẻ những vướng mắc về phía người dùng để Shub điều chỉnh. Tôi thấy Shub đã cải tiến rất nhiều. Rất thuận tiện cho hai hình thức dạy học trực tuyến mà bộ giáo dục đào tạo cho phép thực hiện.",
  });
}

function SlideShowComment(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("pagination-wrapper")}>
        <ArrowLeftType2 className={cx('prev-button')} />
        <Swiper
          onSwiper={(e) => {
            
            
            setThumbsSwiper(e);
          }}
         
         
          allowTouchMove={false}
          loop={true}
          spaceBetween={10}
          centeredSlides={true}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          controller={{
            control: `.${cx('')}`
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          navigation={{
            nextEl: `.${cx('next-button')}`,
            prevEl: `.${cx('prev-button')}`,
          }}
          
          className={cx("card-list")}
         
        >
          {listComment.map((comment, index) => {
            return (
              <SwiperSlide key={index} className={cx("swipper-slide")}>
                {/* {({isActive}) => (
                <div className={cx('card', {
                  'active': isActive
                })}>
                  <img className={cx('avatar')} src={comment.image} alt="avatar" />
                  <div className={cx('comment')}>
                   
                  </div>
                </div>
                
              )} */}

                {comment.name}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <ArrowRightType2 className={cx("next-button")} />
      </div>

      <div className={cx("swiper-wrapper")}>
        <img
          src="https://shub.edu.vn/images/landing/ver3/monument-section/left-decoration.svg"
          alt="background"
        />
        <Swiper
       
         loop={true}

         spaceBetween={10}
         allowTouchMove={false}
          centeredSlides
        navigation={{
            nextEl: `.${cx('next-button')}`,
            prevEl: `.${cx('prev-button')}`,
          }}
         thumbs={{ swiper: thumbsSwiper }}
         modules={[FreeMode, Navigation, Thumbs]}
         onSlideChange={(e) => {
          console.log(e.realIndex);
          console.log(e.activeIndex);
          e.changeDirection()
          document.querySelector(`.${cx('card-list')}`).swiper.slideTo(e.realIndex+4)}}
         
          className={cx('main-card')}
        >
          {listComment.map((comment, index) => {
            return <SwiperSlide key={index}>{comment.name}</SwiperSlide>;
          })}
        </Swiper>
        <img
          src="https://shub.edu.vn/images/landing/ver3/monument-section/right-decoration.svg"
          alt="background"
        />
      </div>
    </div>
  );
}

export default SlideShowComment;
