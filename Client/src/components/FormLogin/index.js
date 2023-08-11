import React from "react";
import PropTypes from "prop-types";
import styles from "./FormLogin.module.scss";
import classNames from "classnames/bind";
import { useLocation } from "react-router-dom";
import { HidePass, ShowPass } from "~/components/Icons";
import { Link } from "react-router-dom";
import Button from "../Button";

FormLogin.propTypes = {};
const cx = classNames.bind(styles);

function FormLogin({classNames}) {
  const locate = useLocation();

  const handleBlurInput = (e) => {
    if (e.target.value === "") {
      document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.top =
        "50%";

      document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.zIndex =
        "-1";
      document.querySelector(
        `#${e.target.id} ~ .${cx("label")}`
      ).style.fontSize = "16px";
    }
  };

  const handleFocusInput = (e) => {
    if (e.target.value === "") {
      document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.top =
        "0";
      document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.zIndex =
        "0";
      document.querySelector(
        `#${e.target.id} ~ .${cx("label")}`
      ).style.fontSize = "10px";
    }
  };

  const handleShowHidePass = (e) => {
    document
      .querySelector(`.${cx("show-hide-icon")}`)
      .classList.toggle(cx("active"));
    document.querySelector(`#${cx("password")}`).type = document
      .querySelector(`.${cx("show-hide-icon")}`)
      .classList.contains(cx("active"))
      ? "text"
      : "password";
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    
    // call API
  }

  return (
    <form className={cx("form-login", classNames)} onSubmit={(e) => {handleSubmit(e)}}>
      <h1 className={cx("title")}>
        {locate.pathname.split("/").slice(-1)[0] === "student"
          ? "Học sinh"
          : "Giáo viên"}{" "}
        đăng nhập
      </h1>
      <div className={cx("input-wrapper")}>
        <input
          type="text"
          id={cx("email")}
          className={cx("input")}
          name="email"
          onFocus={(e) => {
            handleFocusInput(e);
          }}
          onBlur={(e) => {
            handleBlurInput(e);
          }}
        />
        <label className={cx("label")}>Email / Số điện thoại</label>
      </div>
      <div className={cx("input-wrapper")}>
        <input
          type="password"
          id={cx("password")}
          className={cx("input")}
          name="password"
          onFocus={(e) => {
            handleFocusInput(e);
          }}
          onBlur={(e) => {
            handleBlurInput(e);
          }}
         
        />
        <label className={cx("label")}>Mật khẩu</label>
        <div
          className={cx("show-hide-icon")}
          onClick={(e) => {
            handleShowHidePass(e);
          }}
        >
          <ShowPass className={cx("icon", "show-icon")} />
          <HidePass className={cx("icon", "hide-icon")} />
        </div>
      </div>
      <Link className={cx("forgot-pass")} to={"/"}>
        Quên mật khẩu ?
      </Link>

      <p className={cx('notice')}></p>
      <Button className={cx("login-button")} primary onClick={(e) => {handleSubmit(e)}}>
        Đăng nhập
      </Button>
      <p className={cx("title-select-login")}>Hoặc</p>
      <Button className={cx("login-button")}>
        <img
          className={cx("logo-img")}
          src={"https://shub.edu.vn/images/icons/facebook.svg"}
          alt="facebook logo"
        />
        <span>Đăng nhập bằng Facbook</span>
      </Button>
      <Button className={cx("login-button")}>
        <img
          className={cx("logo-img")}
          src={"https://system.hcm.edu.vn/Images/LogoSo.png"}
          alt="so logo"
        />

        <span>Đăng nhập bằng SGD - HCM</span>
      </Button>
      <p className={cx("signup-link")}>
        Bạn chưa có tài khoản?{" "}
        <Link className={cx("link")} to={"/signup"}>
          Đăng kí ngay
        </Link>
      </p>
    </form>
  );
}

export default FormLogin;
