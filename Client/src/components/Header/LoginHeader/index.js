import React from "react";
import PropTypes from "prop-types";
import Header from "..";
import styles from "./LoginHeader.module.scss";
import classNames from "classnames/bind";
import images from "~/assets/images";
import Select from "react-select";
import { useLocation, useNavigate } from "react-router-dom";
import { getValue } from "@testing-library/user-event/dist/utils";
import { Link } from "react-router-dom";

LoginHeader.propTypes = {};

const cx = classNames.bind(styles);

function LoginHeader(props) {
  const locate = useLocation();
  const navigate = useNavigate();

  return (
    <Header className={cx('header-wrapper')}>
      <Link to={'/'} className={cx("logo-wrapper")}>
        <img className={cx("logo")} src={images.logo} alt="logo" />
      </Link>
      <Select
        className={cx("select-wrapper")}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            cursor: "pointer",
            borderColor: state.isFocused ? "#6cb52d" : "#ccc",
          }),
        }}
        options={[
          { value: "student", label: "Tôi là học sinh" },
          { value: "teacher", label: "Tôi là giáo viên" },
        ]}
        defaultValue={
          locate.pathname.split("/").slice(-1)[0] === "student"
            ? { value: "student", label: "Tôi là học sinh" }
            : { value: "teacher", label: "Tôi là giáo viên" }
        }
        onChange={(e) => {navigate(locate.pathname.replace(locate.pathname.split('/').slice(-1)[0], e.value));}}
      />
    </Header>
  );
}

export default LoginHeader;
