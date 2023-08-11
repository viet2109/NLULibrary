import React from "react";
import PropTypes from "prop-types";
import styles from "./SignUpRole.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/Header";
import images from "~/assets/images";
import FormSignUp from "~/components/FormSignUp";
import { Link, useLocation } from "react-router-dom";
import { BackButton } from "~/components/Icons";

SignUpRole.propTypes = {};

const cx = classNames.bind(styles);

function SignUpRole(props) {
    const location = useLocation()
  return (
    <>
      <Header className={cx("header-wrapper")}>
        <Link to={"/"}>
          <div className={cx("logo-wrapper")}>
            <img className={cx("logo")} src={images.logo} alt="logo" />
          </div>
        </Link>
      </Header>

      <div className={cx("body-wrapper")}>
        <Link className={cx("back-select-role")} to={'/signup'}>
          <BackButton className={cx('back-btn')}/>
          Thay đổi vai trò
        </Link>
        <h1 className={cx('title')}>Bạn đang đăng kí với vai trò {location.state.role==='student'?"học sinh":'giáo viên'}</h1>
        <FormSignUp />
      </div>
    </>
  );
}

export default SignUpRole;
