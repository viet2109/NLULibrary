import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import HomeHeader from "~/components/Header/HomeHeader";
import Button from "~/components/Button";
import images from "~/assets/images";
import { ArrowDown, HealthShield } from "~/components/Icons";
import VideoFrame from "~/components/VideoFrame";
import Logo from "~/components/Logo";
import SlideShow from "~/components/SlideShow";
import QuestionList from "~/components/QuestionList";
import SlideShowComment from "~/components/SlideShowComment";
import SmoothSlide from "~/components/SmoothSlide";
import CommunicateSlide from "~/components/CommunicateSlide";
import homeHeaderStyles from "./HomeHeader";

Home.propTypes = {};

const cx = classNames.bind(styles);
const hcx = classNames.bind(homeHeaderStyles);

function Home(props) {
  let nav = [];

  const isInViewPort = (el) => {
    const { top, bottom, height } = el.getBoundingClientRect();
    const { innerHeight } = window;

    let heightContain = 0;

    // el height <= win height
    if (height <= innerHeight) {
      // top is in view port
      if (top >= 0 && top <= innerHeight) {
        heightContain = innerHeight - bottom - top;
      }
      // top is out of view port
      else if (top < 0) {
        if (bottom >= 0) {
          heightContain = innerHeight - bottom;
        }
      }
    }
    // el height > win height
    else {
      // top is in view port
      if (top >= 0 && top <= innerHeight) {
        heightContain = innerHeight - top;
      }
      // top is out of view port
      else if (top < 0) {
        if (bottom >= 0 && bottom <= innerHeight) {
          heightContain = innerHeight - bottom;
        } else if (bottom >= 0 && bottom > innerHeight) {
          heightContain = innerHeight;
        }
      }
    }

    return (Math.abs(heightContain) / height) * 100 >= 25;
  };

  const scrollNav = () => {
    const listSection = document.querySelectorAll(`.${cx("section")}`);
    listSection.forEach((item, index) => {
      if (isInViewPort(item)) {
        nav = [];
        nav.push(index);
      }
    });

    if (nav.length <= 0) {
      nav[0] = 0;
    }
    document.querySelectorAll(`.${hcx("navigateItem")}`).forEach((item) => {
      item.classList.remove(hcx("active"));
    });

    document
      .querySelectorAll(`.${hcx("navigateItem")}`)
      [nav[0]].classList.add(hcx("active"));

    document.querySelectorAll(`.${hcx("menuItem")}`).forEach((item) => {
      item.classList.remove(hcx("active"));
    });

    document
      .querySelectorAll(`.${hcx("menuItem")}`)
      [nav[0]].classList.add(hcx("active"));
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollNav);

    return () => {
      window.removeEventListener("scroll", scrollNav);
    };
  }, []);

  return (
    <>
      <HomeHeader />
      <div className={cx("wrapper")}>
        <section className={cx("section")} id={"intro"}>
          <div className={cx("intro-app-wrapper")}>
            <div className={cx("intro-app")}>
              <div className={cx("intro-app-name")}>
                <img
                  className={cx("logo")}
                  src={images.nlu}
                  alt="matcha company logo"
                />
                <span className={cx("app-name")}>
                  Nong Lam University Library
                </span>
              </div>
              <p className={cx("intro-app-title")}>
                Tìm tài liệu một cách dễ dàng
              </p>
              <p className={cx("intro-app-des")}>
                " Nắng giảng đường Phượng Vỹ ghi dấu chân tuổi trẻ, ở đâu bán
                tài liệu giá rẻ chứ ở đây FREE "
              </p>
              <Button to={"/signup/form"} primary className={cx("signup")}>
                Tham gia ngay
              </Button>
            </div>
            <div className={cx("intro-app-feature-wrapper")}>
              <ul className={cx("intro-app-feature")}>
                <li className={cx("intro-app-feature-item")}>
                  <img
                    className={cx("icon")}
                    src={
                      "https://shub.edu.vn/images/landing/ver3/hero-section/hero-icon-1.svg"
                    }
                    alt={"share"}
                  />
                  <p className={cx("title")}>
                    Cung cấp tài liệu các chuyên ngành
                  </p>
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
              </ul>
              <div
                className={cx(
                  "intro-app-feature-item",
                  "intro-app-feature-item-last"
                )}
              >
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
              </div>
            </div>
          </div>
          <div className={cx("intro-img-wrapper")}>
            <div className={cx("intro-img")}>
              <img
                className={cx("image")}
                src={images.banner}
                alt={"teacher img"}
              />

              <img  className={cx('background-img', 'star')} src={images.star}  alt="background"  />
              <img className={cx('background-img', 'star')} src={images.star}  alt="background"  />
              <img  className={cx('background-img', 'star')} src={images.star}  alt="background" />
              <img  className={cx('background-img', 'book1')} src={images.book1}  alt="background" />
              <img  className={cx('background-img', 'book1')} src={images.book1}  alt="background" />
              <img  className={cx('background-img', 'book1')} src={images.book1}  alt="background" />
              
              <img  className={cx('background-img', 'book2')} src={images.book2}  alt="background" />
              <img className={cx('background-img', 'book2')} src={images.book2}  alt="background"  />
              <img className={cx('background-img', 'book2')} src={images.book2}  alt="background"  />
              <img  className={cx('background-img', 'book1')} src={images.book1}  alt="background" />

            </div>
          </div>
        </section>

        <section className={cx("section")} id={"feature"}>
          <div className={cx("next-icon-wrapper")}>
            <ArrowDown className={cx("next-icon")} />
          </div>
          <div className={cx("feature-wrapper")}>
            <div className={cx("title")}>
              <p className={cx("small-des")}>
                Nông Lâm Library mang đến cho bạn
              </p>
              <p className={cx("big-des")}>Tất cả công cụ dạy học hiện tại</p>
            </div>
            <div className={cx("feature-list-wrapper")}>
              <ul className={cx("feature-list")}>
                <VideoFrame
                  title={"Bảng điểm chi tiết quá trình học tập"}
                  des={
                    "SHub Classroom cung cấp các tính năng quản lý điểm với nhiều cấp độ khác nhau, đảm bảo cung cấp góc nhìn từ tổng quan đến chi tiết cho giáo viên về lớp và học sinh của mình."
                  }
                />
                <VideoFrame
                  leftText
                  title={"Bảng điểm chi tiết quá trình học tập"}
                  des={
                    "SHub Classroom cung cấp các tính năng quản lý điểm với nhiều cấp độ khác nhau, đảm bảo cung cấp góc nhìn từ tổng quan đến chi tiết cho giáo viên về lớp và học sinh của mình."
                  }
                />
                <VideoFrame
                  title={"Bảng điểm chi tiết quá trình học tập"}
                  des={
                    "SHub Classroom cung cấp các tính năng quản lý điểm với nhiều cấp độ khác nhau, đảm bảo cung cấp góc nhìn từ tổng quan đến chi tiết cho giáo viên về lớp và học sinh của mình."
                  }
                />
                <VideoFrame
                  leftText
                  title={"Bảng điểm chi tiết quá trình học tập"}
                  des={
                    "SHub Classroom cung cấp các tính năng quản lý điểm với nhiều cấp độ khác nhau, đảm bảo cung cấp góc nhìn từ tổng quan đến chi tiết cho giáo viên về lớp và học sinh của mình."
                  }
                />
              </ul>
            </div>
            <div className={cx("footer-feature")}></div>
          </div>
        </section>

        <div className={cx("form-question-wrapper")}>
          <h1 className={cx("title")}>Kho trắc nghiệm khổng lồ</h1>
          <div className={cx("form-question-list")}>
            <QuestionList
              itemsPerPage={
                window.innerWidth < 744 ? 4 : window.innerWidth < 1024 ? 8 : 12
              }
            />
          </div>
        </div>

        <div className={cx("health-wrapper")}>
          <div className={cx("wrapper")}>
            <img
              className={cx("background")}
              src="https://shub-storage.sgp1.cdn.digitaloceanspaces.com/landing-resource-2/images/SchoolRegisterSection/Decoration.svg"
              alt="background"
            />
            <div className={cx("text-wrapper")}>
              <div className={cx("img-wrapper")}>
                <HealthShield className={cx("img")} />
              </div>
              <h1 className={cx("title")}>
                Chung tay cùng ngành giáo dục vượt qua đại dịch
              </h1>
              <p className={cx("des")}>
                Thời gian vừa qua Matcha company đã đồng hành cùng các đơn vị
                giáo dục, hệ thống trường học trên khắp cả nước nhằm triển khai
                công tác giảng dạy trực tuyến. Cùng ngành giáo dục Việt Nam
                chiến thắng, vượt qua đại dịch COVID-19.
              </p>
            </div>

            <div className={cx("img-slide-wrapper")}>
              <div className={cx("img-slide-wrapper-relative")}>
                <SmoothSlide className={cx("slide-1")} />
                <SmoothSlide className={cx("slide-2")} transition={1.1} />
              </div>
            </div>
          </div>
        </div>

        <div className={cx("communicate-wrapper")}>
          <div className={cx("text-wrapper")}>
            <img
              className={cx("text-img")}
              src="https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fimage-section%2Fnetworking.gif&w=64&q=75"
              alt="img-video"
            />
            <h1 className={cx("title")}>
              Hoạt động tiêu biểu từ cộng đồng giáo dục
            </h1>
            <p className={cx("des")}>
              Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong
              quá trình giảng dạy, dạy học ứng dụng công nghệ Matcha Classroom.
            </p>
          </div>
          <div className={cx("swiper-wrapper")}>
            <CommunicateSlide />
          </div>
        </div>

        <div className={cx("list-comment")}>
          <h1 className={cx("title")}>Đồng hành và tin cậy</h1>
          <SlideShowComment />
        </div>

        <section className={cx("section")} id={"partner"}>
          <div className={cx("unit-declare-wrapper")}>
            <h1 className={cx("title")}>Các đơn vị đã triển khai</h1>
            <ul className={cx("list")}>
              <li className={cx("item")}>
                <img
                  className={cx("logo")}
                  src="https://shub.edu.vn/images/landing/ver3/school-section/logo-center-1.png"
                  alt="logo"
                />
              </li>
              <li className={cx("item")}>
                <img
                  className={cx("logo")}
                  src="https://shub.edu.vn/images/landing/ver3/school-section/logo-center-2.png"
                  alt="logo"
                />
              </li>
              <li className={cx("item")}>
                <img
                  className={cx("logo")}
                  src="https://shub.edu.vn/images/landing/ver3/school-section/logo-center-3.png"
                  alt="logo"
                />
              </li>
              <li className={cx("item")}>
                <img
                  className={cx("logo")}
                  src="https://shub.edu.vn/images/landing/ver3/school-section/logo-center-4.png"
                  alt="logo"
                />
              </li>
            </ul>
            <div className={cx("partner-background-wrapper")}>
              <img
                src="https://shub.edu.vn/images/landing/ver3/school-section/trien-khai-decor.svg"
                className={cx("partner-background")}
                alt="background"
              />
            </div>
          </div>
          <div className={cx("unit-school")}>
            <div className={cx("unit-school-swipper")}>
              <h1 className={cx("title")}>Cùng các đơn vị trường học</h1>
              <SlideShow />
            </div>
          </div>
        </section>

        <section id={"contact"}>
          <div className={cx("background-wrapper")}>
            <img
              className={cx("background")}
              src="https://shub.edu.vn/images/landing/ver3/footer-section/footer-decor.svg"
              alt="background"
            />
          </div>
          <div className={cx("contact-detail")}>
            <div className={cx("logo-wrapper")}>
              <Logo className={cx("logo")} src={images.logoDark} />
              <div className={cx("company-name")}>
                Công ty cổ phần công nghệ Matcha
              </div>
              <div className={cx("copy-right")}>
                ©Copyright 2022 Matcha Company. All Rights Reserved
              </div>
            </div>
            <ul className={cx("contact-list")}>
              <li className={cx("contact-item")}>
                <h1 className={cx("title")}>Số điện thoại</h1>
                <p className={cx("des")}>0938 620 043</p>
              </li>
              <li className={cx("contact-item")}>
                <h1 className={cx("title")}>Email</h1>
                <p className={cx("des")}>support@shub.edu.vn</p>
              </li>
              <li className={cx("contact-item")}>
                <h1 className={cx("title")}>Địa chỉ</h1>
                <p className={cx("des")}>
                  Khu Công nghệ Phần mềm, ĐHQG-HCM Kp6, P. Linh Trung, Tp. Thủ
                  Đức, Tp. Hồ Chí Minh
                </p>
              </li>
            </ul>
            <ul className={cx("contact-list")}>
              <li className={cx("contact-item", "link-wrapper")}>
                <h1 className={cx("title")}>Thông tin</h1>
                <a
                  href={"https://hdsd.shub.edu.vn/faq/about/chinh-sach-bao-mat"}
                  className={cx("des", "link")}
                >
                  Chính sách bảo mật
                </a>
                <a
                  href={"https://hdsd.shub.edu.vn/faq/about/chinh-sach-bao-mat"}
                  className={cx("des", "link")}
                >
                  Chính sách hoàn trả
                </a>
                <a
                  rel="noreferrer"
                  href={"https://hdsd.shub.edu.vn/faq/about/dieu-khoan-su-dung"}
                  className={cx("des", "link")}
                  target="_blank"
                >
                  Điều khoản sử dụng
                </a>
              </li>
              <li className={cx("contact-item", "social")}>
                <h1 className={cx("title")}>Liên hệ với chúng tôi</h1>
                <div className={cx("link-wrapper")}>
                  <a
                    rel="noreferrer"
                    href="https://www.facebook.com/profile.php?id=100095606191991"
                    className={cx("des", "link")}
                    target="_blank"
                  >
                    <img
                      src={
                        "https://shub.edu.vn/images/landing/ver3/footer-section/logo-fb.svg"
                      }
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/messages/t/114427368406529"
                    target="_blank"
                    rel="noreferrer"
                    className={cx("des", "link")}
                  >
                    <img
                      src={
                        "https://shub.edu.vn/images/landing/ver3/footer-section/logo-messenger.svg"
                      }
                      alt=""
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
