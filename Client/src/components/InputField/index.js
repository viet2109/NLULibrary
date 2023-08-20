import React from "react";
import PropTypes from "prop-types";
import styles from "./InputField.module.scss";
import classNames from "classnames/bind";
import { HidePass, ShowPass } from "../Icons";

InputField.propTypes = {};

const cx = classNames.bind(styles);

function InputField(props) {
  const { error, type, label, field, children } = props;
  const { name } = field;
  const handleShowHidePass = (e) => {
    e.currentTarget.classList.toggle(`${cx("active")}`);
    document.querySelector(`#${name}`).type =
      e.currentTarget.classList.contains(`${cx("active")}`)
        ? "text"
        : "password";
  };
  const handleOnFocus = (e) => {
    document.querySelector(`#${name} ~ .${cx("label")}`).style.top = "0";
    document.querySelector(`#${name} ~ .${cx("label")}`).style.zIndex = "0";
    document.querySelector(`#${name} ~ .${cx("label")}`).style.fontSize =
      "12px";
    document.querySelector(`#${name} ~ .${cx("label")}`).style.color =
      "var(--primary-color)";
    if (name.toLowerCase().includes("date")) {
      document.querySelector(`#${name} ~ .${cx("label")}`).style.top = "0";
      document.querySelector(`#${name} ~ .${cx("label")}`).style.zIndex = "0";
      document.querySelector(`#${name} ~ .${cx("label")}`).style.fontSize =
        "12px";
      document.querySelector(`#${name} ~ .${cx("label")}`).style.color =
        "var(--primary-color)";
        document.querySelector(`#${name} ~ .${cx("label")}`).style.width =
        "fit-content";
        document.querySelector(`#${name} ~ .${cx("label")}`).style.left =
        "18px";
        document.querySelector(`#${name} ~ .${cx("label")}`).style.paddingLeft =
        "6px";

        document.querySelector(`#${name}`).focus();
    }
  };

  field.onBlur = (e) => {
    
    if (e.target.value === "") {
      document.querySelector(`#${name} ~ .${cx("label")}`).style.top = "50%";
      document.querySelector(`#${name} ~ .${cx("label")}`).style.zIndex = "-1";
      document.querySelector(`#${name} ~ .${cx("label")}`).style.fontSize =
        "16px";
        if (name.toLowerCase().includes("date")) {
          document.querySelector(`#${name} ~ .${cx("label")}`).style.zIndex = "0";
          document.querySelector(`#${name} ~ .${cx("label")}`).style.width = "130px";
          document.querySelector(`#${name} ~ .${cx("label")}`).style.left =
          "14px";
          document.querySelector(`#${name} ~ .${cx("label")}`).style.paddingLeft =
          "10px";
        }
    }

    document.querySelector(`#${name} ~ .${cx("label")}`).style.color =
      "var(--black-text)";
      
  };
  return (
    <div className={cx("input-wrapper")}>
      <div className={cx("input-relative")}>
        <input
          id={name}
          className={cx("input", {
            error: children,
          })}
          type={type}
          
          {...field}
          onFocus={(e) => {
            handleOnFocus(e);
          }}
        />

        <label
          className={cx("label", { error: children, date: type === "date" })}
          onClick={(e) => {
            handleOnFocus(e);
          }}
        >
          {label}
        </label>

        {name.toLowerCase().includes("password") && (
          <div
            className={cx("icon-wrapper")}
            onClick={(e) => {
              handleShowHidePass(e);
            }}
          >
            <ShowPass className={cx("icon", "showIcon")} />
            <HidePass className={cx("icon", "hideIcon")} />
          </div>
        )}
      </div>
      {children && <div className={cx("notice-error")}>{children}</div>}
    </div>
  );
}

export default InputField;
