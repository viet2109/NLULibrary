import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

Button.propTypes = {};

const cx = classNames.bind(styles);

function Button({
  disabled,
  small,
  medium,
  round,
  onClick,
  to,
  href,
  className,
  children,
  noneOutline,
  primary,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((prop) => {
      if (prop.startsWith("on") && typeof prop === "function")
        delete props[prop];
    });
  }
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }
  return (
    <Comp
      className={cx("wrapper",className, {
        disabled,
        small,
        medium,
        round,
        noneOutline,
        primary,
      })}
      onClick={onClick}
      {...props}
    >
      <p className={cx("text")}>{children}</p>
    </Comp>
  );
}

export default Button;
