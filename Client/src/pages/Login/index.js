import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "~/components/Header";
import classNames from "classnames/bind";
import styles from "./Login.module.scss";
import images from "~/assets/images";
import Button from "~/components/Button";
import Select from "react-select";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "~/components/Logo";



Login.propTypes = {};
const cx = classNames.bind(styles);

function Login(props) {
  

  const [role, setRole] = useState("student");
  const navigate = useNavigate()
  const locate = useLocation()

    const changeRoleImage = (e) => {
        if (e.value === 'student') {
          setRole("student");

          document.querySelector(`.${cx('student-image')}`).style.display = "block"
          document.querySelector(`.${cx('teacher-image')}`).style.display = "none"
        } else if (e.value === 'teacher') {
          setRole("teacher")
          document.querySelector(`.${cx('student-image')}`).style.display = "none"
          document.querySelector(`.${cx('teacher-image')}`).style.display = "block"
        }
    }
  return (
    <>
      <Header className={cx('header-wrapper')}>
        <Logo src={images.logoDark} to={'/'} />
        <div className={cx("button-wrapper")} >
          <Link to={"/"} className={cx("button", "home-button")}>
            <Button >Trang chủ</Button>
          </Link>

          <Link to={"/signup/form"}  className={cx("button")}>
            
            <Button primary>
              Đăng kí
            </Button>
          </Link>
        </div>
      </Header>

      <div className={cx("role-select-wrapper")}>
        <div className={cx("role-select")}>
          <h1 className={cx("title")}>Chào mừng đến với Nông Lâm Library</h1>
          <p className={cx("label")}>Chọn vai trò của bạn</p>

          <Select
            className={cx("select")}
            styles={{
              option: (styles, state) => ({
                ...styles,
                cursor: 'pointer',
              }),
              control: (baseStyles, state) => ({
                ...baseStyles,
                cursor: "pointer",
                borderColor: state.isFocused ? "#6cb52d" : "#ccc",
              }),
            }}
            onChange={(e) => {
               changeRoleImage(e)}}
            defaultValue={{ value: "student", label: "Tôi là học sinh" }}
            options={[
              {
                value: "student",
                label: "Tôi là học sinh",
              },
              {
                value: "teacher",
                label: "Tôi là giáo viên",
              },
            ]}
          />

          <Button primary className={cx("login-button")} onClick={(e) => {navigate(`${locate.pathname,role}`)}}>
            Tiếp tục
          </Button>
        </div>
        <div className={cx("image-login", "student-image")}>
          <img
            className={cx("image")}
            src={
              "https://shub.edu.vn/images/illustrations/student-illustration.svg"
            }
            alt={"login img"}
          />
        </div>
        <div className={cx("image-login", "teacher-image")}>
          <img
            className={cx("image")}
            src={
              "https://shub.edu.vn/images/illustrations/teacher-illustration.svg"
            }
            alt={"login img"}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
