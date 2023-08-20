import React from "react";
import PropTypes from "prop-types";
import styles from "./SignUpRole.module.scss";
import classNames from "classnames/bind";
import Header from "~/components/Header";
import images from "~/assets/images";
import FormSignUp from "~/components/FormSignUp";
import { Link, useLocation } from "react-router-dom";
import { BackButton } from "~/components/Icons";
import Logo from "~/components/Logo";

SignUpRole.propTypes = {};

const cx = classNames.bind(styles);

function SignUpRole(props) {
    const location = useLocation()
    location.state = {role: 'student'}
  return (
    <>
      <Header className={cx("header-wrapper")}>
        <Logo src={images.logoDark} to={'/'} />
      </Header>

      <div className={cx("body-wrapper")}>
        
        <h1 className={cx('title')}>Bạn đang thực hiện đăng kí tài khoản</h1>
        <FormSignUp />
      </div>
    </>
  );
}

export default SignUpRole;
