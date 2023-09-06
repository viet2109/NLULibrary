import React, {  useRef } from "react";
import PropTypes from "prop-types";
import styles from "./SlideShowComment.module.scss";
import classNames from "classnames/bind";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/free-mode";
import "swiper/scss/navigation";
import "swiper/scss/thumbs";

// import required modules
import { Navigation } from "swiper/modules";
import { ArrowLeftType2, ArrowRightType2 } from "../Icons";

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
  const galleryThumbs = useRef(null);
  const galleryBottom = useRef(null);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("pagination-wrapper")}>
        <div className={cx("button-wrapper")}>
          <ArrowLeftType2 className={cx("prev-button")} />
        </div>
        <Swiper
          loop
          ref={galleryThumbs}
          
          spaceBetween={16}
          centeredSlides
          slideToClickedSlide
          slidesPerView={2}
          breakpoints={{
            744: {
              slidesPerView: 3,
              allowTouchMove: false
            }
            
          }}
          navigation={{
            prevEl: `.${cx("prev-button")}`,
            nextEl: `.${cx("next-button")}`,
          }}
          onSlideChangeTransitionStart={(e) => {
            if (galleryBottom.current) {
              galleryBottom.current.swiper.slideTo(e.realIndex);
            }
          }}
          modules={[Navigation]}
          className={cx("gallery-thumb")}
        >
          {listComment.map((comment, index) => {
            return (
              <SwiperSlide key={index} className={cx("card-item-wrapper")}>
                
                {({ isActive }) => (

                  <div className={cx('card-item', {
                    active: isActive
                  })}>
                      <div className={cx("avatar-wrapper", {
                  active: isActive
                })}>
                  <img
                    className={cx("avatar")}
                    src={comment.image}
                    alt="avatar"
                  />
                </div>
                  </div>
                  
                
                )}

              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className={cx("button-wrapper")}>
          <ArrowRightType2 className={cx("next-button")} />
        </div>
      </div>

      <div className={cx("swiper-wrapper")}>
        <img
         className={cx('image-left')}
          src="https://shub.edu.vn/images/landing/ver3/monument-section/left-decoration.svg"
          alt="background"
        />
        <div className={cx('gallery-bottom-wrapper-relative')}>
          <div className={cx('gallery-bottom-wrapper')}>
            <Swiper
              ref={galleryBottom}
              allowTouchMove={false}
              grabCursor
              className={cx("gallery-bottom")}
            >
              {listComment.map((comment, index) => {
                return <SwiperSlide key={index} className={cx('main-card-wrapper')}>
                  <div className={cx('intro')}>
                    <div className={cx('detail-intro')}>
                      <p className={cx('school')}>{comment.school}</p>
                      <p className={cx('name')}>{comment.name}</p>
                    </div>
                    <img className={cx('avatar')} src={comment.image} alt="avatar" />
                  </div>
                  <p className={cx('comment')}>
                    {comment.des}
                  </p>
                  </SwiperSlide>;
              })}
            </Swiper>
          </div>
        </div>
        <img
         className={cx('image-right')}

          src="https://shub.edu.vn/images/landing/ver3/monument-section/right-decoration.svg"
          alt="background"
        />
      </div>
    </div>
  );
}

export default SlideShowComment;
