import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./Logo.module.scss";
import { Link } from "react-router-dom";

Logo.propTypes = {};

const cx = classNames.bind(styles);

function Logo({ src,to,className, children }) {
    const Comp = to?Link: "div";
  return (
    <Comp className={cx("logoWrap", className)} to={to}>
      <img className={cx("logo")} src={src} alt="Matcha Company Logo" />
    </Comp>
  );
}

export default Logo;
