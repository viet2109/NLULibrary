import React from "react";
import PropTypes from "prop-types";
import Header from "~/components/Header";
import styles from "./SignUp.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Button from "~/components/Button";
import { Link } from "react-router-dom";
import Logo from "~/components/Logo";
SignUp.propTypes = {};

const cx = classNames.bind(styles);

function SignUp(props) {
  
  return (
    <>
      <Header className={cx("header-wrapper")}>
        <Logo src={images.logoDark} to={'/'} />
        <Link to={"/login"}>
          <Button primary className={cx("login-button")}>
            Đăng nhập
          </Button>
        </Link>
      </Header>

      <div className={cx("body-wrapper")}>
        <h1 className={cx("title")}>
          Đăng kí tài khoản mới
          <p className={cx("des")}>Chọn vai trò để tiếp tục</p>
        </h1>
        <div className={cx("select-role-wrapper")}>
          <div className={cx("select-role")}>
            <img
              className={cx("image-select")}
              src={
                "https://shub.edu.vn/images/illustrations/student-illustration.svg"
              }
              alt="student-select"
            />
            <Link to={"/signup/form"} state={{role: 'student'}}>
              <Button className={cx("select-role-btn", "student")} >Tôi là học sinh</Button>
            </Link>
          </div>
          <div className={cx("select-role")}>
            <img
              className={cx("image-select")}
              src={
                "https://shub.edu.vn/images/illustrations/teacher-illustration.svg"
              }
              alt="teacher-select"
            />
            <Link to={"/signup/form"} state={{role: 'teacher'}}>
              <Button className={cx("select-role-btn", "teacher")} >
                Tôi là giáo viên
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
