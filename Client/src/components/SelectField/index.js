import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import styles from "./SelectField.module.scss";
import classNames from "classnames/bind";
import Select from "react-select";

SelectField.propTypes = {};

const cx = classNames.bind(styles);

function SelectField(props) {
  const [option, setOption] = useState({});
  const { error, field, form, type, label, listOption, children } = props;
  const { name } = field;
  const handleOnFocus = () => {
    document.querySelector(`#${name} ~ .${cx("label")}`).style.top = "0";
    document.querySelector(`#${name} ~ .${cx("label")}`).style.fontSize =
      "12px";
    document.querySelector(`#${name} ~ .${cx("label")}`).style.color =
      "var(--primary-color)";
  };

  field.onBlur = (e) => {
    const text = document.querySelector(`.${cx("placehoder")}`).innerText.trim();
    if (text === '') {
      document.querySelector(`#${name} ~ .${cx("label")}`).style.top = "50%";

      document.querySelector(`#${name} ~ .${cx("label")}`).style.fontSize =
        "16px";
    }
    document.querySelector(`#${name} ~ .${cx("label")}`).style.color =
      "var(--black-text)";
  };
  const handleSelectedOptionChange = (selectedOption) => {
    form.setFieldValue(field.name, selectedOption.value);
    document.querySelector(`.${cx("placehoder")}`).innerText =
      selectedOption.label;
    setOption((prevOption) => ({
     
      ...selectedOption,
    }));
  };

  const handleFocusInput = () => {
    selectRef.current.focus();
  };
  const selectRef = useRef(null);
  return (
    <div className={cx("input-wrapper")}>
      <div className={cx("input-relative")}>
        <Select
          id={name}
          ref={selectRef}
          className={cx("input")}
          type={type}
          isSearchable={false}
          {...field}
          options={listOption}
          styles={{
            option: (styles) => ({
              ...styles,
              cursor: "pointer",
              fontSize: "14px",
            }),
            placeholder: (base) => ({
              ...base,
              display: "none",
            }),
            singleValue: (base) => ({
              ...base,
              fontSize: "14px",
            }),
            control: (base, state) => ({
              ...base,
              height: 60,
              border: children
                ? "red solid 2px"
                : state.isFocused
                ? "var(--primary-color) solid 2px"
                : "#d8dcf0 solid 1px",
              boxShadow: "none",
              "&:hover": {
                border: children
                  ? "red solid 2px"
                  : state.isFocused
                  ? "var(--primary-color) solid 2px"
                  : "#d8dcf0 solid 1px",
              },
              cursor: "pointer",
              borderRadius: 10,
            }),
          }}
          openMenuOnFocus
          onChange={handleSelectedOptionChange}
          onFocus={handleOnFocus}
        />
        <label
          className={cx("label", { error: children })}
          onClick={handleFocusInput}
        >
          {label}
        </label>
        <div className={cx("placehoder")} onClick={handleFocusInput}></div>
      </div>
      {children && <div className={cx("notice-error")}>{children}</div>}
    </div>
  );
}

export default SelectField;
