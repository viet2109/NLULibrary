import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import HomeHeader from "~/components/Header/HomeHeader";
import Button from "~/components/Button";
import images from "~/assets/images";

Home.propTypes = {};

const cx = classNames.bind(styles);

function Home(props) {
  return (
    <>
      <HomeHeader />
      <div className={cx("wrapper")}>
        <section id={"intro"}>
          <div className={cx("intro-app-wrapper")}>
            <div className={cx("intro-app")}>
              <div className={cx("intro-app-name")}>
                <img
                  className={cx("logo")}
                  src={images.logo2}
                  alt="matcha company logo"
                />
                <span className={cx("app-name")}>Matcha company</span>
              </div>
              <p className={cx("intro-app-title")}>
                Tìm tài liệu một cách dễ dàng
                " Nắng giảng đường Phượng Vỹ ghi dấu chân tuổi trẻ, ở đâu bán tài liệu giá rẻ chứ ở đây FREE "
              </p>
              <Button to={"/signup"} primary className={cx("signup")}>
                Tham gia ngay
              </Button>
            </div>
            <ul className={cx("intro-app-feature")}>
              <li className={cx("intro-app-feature-item")}>
                <img
                  className={cx("icon")}
                  src={
                    "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-1.svg"
                  }
                  alt={"share"}
                />
                <p className={cx("title")}>Cung cấp tài liệu các chuyên ngành</p>
              </li>
              <li className={cx("intro-app-feature-item")}>
                <img
                  className={cx("icon")}
                  src={
                    "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-2.svg"
                  }
                  alt={"share"}
                />
                <p className={cx("title")}>Thi thử miễn phí</p>
              </li>
              <li className={cx("intro-app-feature-item")}>
                <img
                  className={cx("icon")}
                  src={
                    "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-3.svg"
                  }
                  alt={"share"}
                />
                <p className={cx("title")}>Bài tập đa dạng</p>
              </li>
              <li className={cx("intro-app-feature-item")}>
                <img
                  className={cx("icon")}
                  src={
                    "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-4.svg"
                  }
                  alt={"share"}
                />
                <p className={cx("title")}>Ebook IT</p>
              </li>
              <li className={cx("intro-app-feature-item")}>
                <img
                  className={cx("icon")}
                  src={
                    "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-5.svg"
                  }
                  alt={"share"}
                />
                <p className={cx("title")}>Kho tài liệu Toeic</p>
              </li>
              <li className={cx("intro-app-feature-item")}>
                <img
                  className={cx("icon")}
                  src={
                    "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-6.svg"
                  }
                  alt={"share"}
                />
                <p className={cx("title")}>Mock test Toeic</p>
              </li>
              <li className={cx("intro-app-feature-item")}>
                <div className={cx("title")}> Có mặt ở mọi nền tảng</div>
                <div className={cx("icon-list")}>
                  <img
                    className={cx("icon-item")}
                    src={
                      "https://shub.edu.vn/images/landing/ver3/hero-section/logo-apple.svg"
                    }
                    alt="apple logo"
                  />
                  <img
                    className={cx("icon-item")}
                    src={
                      "https://shub.edu.vn/images/landing/ver3/hero-section/logo-window.svg"
                    }
                    alt="window logo"
                  />
                  <img
                    className={cx("icon-item")}
                    src={
                      "https://shub.edu.vn/images/landing/ver3/hero-section/logo-android.svg"
                    }
                    alt="android logo"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div className={cx("intro-img-wrapper")}>
            <div className={cx("intro-img")}>
              <img
                className={cx("image")}
                src={
                  "https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fhero-section%2Fhero-image-teacher.png&w=1920&q=75"
                }
                alt={"teacher img"}
              />
            </div>
          </div>
        </section>
        
        <section id={cx("feature")}>
                
        </section>

        <section id={cx("partner")}></section>

        <section id={cx("contact")}></section>
      </div>
    </>
  );
}

export default Home;
