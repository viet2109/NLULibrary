import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./FormLogin.module.scss";
import classNames from "classnames/bind";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import * as yup from "yup";
import { FastField, Form, Formik } from "formik";
import InputField from "../InputField";
import { loginUser } from "~/redux/apiRequest";
import { useDispatch } from "react-redux";

FormLogin.propTypes = {};
const cx = classNames.bind(styles);

const handleBlurInput = (e) => {
  if (e.target.value === "") {
    document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.top =
      "50%";

    document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.zIndex =
      "-1";
    document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.fontSize =
      "16px";
  }
};

const handleFocusInput = (e) => {
  if (e.target.value === "") {
    document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.top = "0";
    document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.zIndex =
      "0";
    document.querySelector(`#${e.target.id} ~ .${cx("label")}`).style.fontSize =
      "10px";
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


function FormLogin({ classNames }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginSchema = yup.object().shape({
    emailPhone: yup.string().required("Bạn cần nhập số diện thoại hoặc email"),
    password: yup.string().required("Bạn cần nhập mật khẩu"),
  });

  return (
    <Fragment>
      <Formik
        initialValues={{
          emailPhone: "",
          password: "",
        }}
        validationSchema={LoginSchema}
        onSubmit={(user) => {
         loginUser(user, dispatch, navigate)
        }}
      >
        {({ errors, touched }) => (
          <Form
            className={cx("form-login", classNames)}
            
          >
            <h1 className={cx("title")}>Bạn đang thực hiện đăng nhập</h1>
            <div className={cx('input-field')}>
              <FastField
                error={errors.emailPhone && touched.emailPhone}
                name="emailPhone"
                label="Số điện thoại / Email"
                component={InputField}
              >
                {errors.emailPhone && touched.emailPhone ? (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.emailPhone}
                  </div>
                ) : null}
              </FastField>
            </div>

            <div className={cx('input-field')}>
              <FastField
                error={errors.password && touched.password}
                name="password"
                label="Mật khẩu"
                type = "password"
                component={InputField}
              >
                {errors.password && touched.password ? (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.password}
                  </div>
                ) : null}
              </FastField>
            </div>

            <Link className={cx("forgot-pass")} to={"/"}>
              Quên mật khẩu ?
            </Link>

            <p className={cx("notice")}></p>
            <Button
              type={"submit"}
              className={cx("login-button")}
              primary
              noneOutline
            >
              Đăng nhập
            </Button>
            <p className={cx("title-select-login")}>Hoặc</p>
            <Button className={cx("login-button")} to={'/'} noneOutline>
              <img
                className={cx("logo-img")}
                src={"https://shub.edu.vn/images/icons/facebook.svg"}
                alt="facebook logo"
              />
              <span>Đăng nhập bằng Facbook</span>
            </Button>
            <Button className={cx("login-button")} to={'/'} noneOutline >
              <img
                className={cx("logo-img")}
                src={"https://system.hcm.edu.vn/Images/LogoSo.png"}
                alt="so logo"
              />
              <span>Đăng nhập bằng SGD - HCM</span>
            </Button>
            <p className={cx("signup-link")}>
              Bạn chưa có tài khoản?{" "}
              <Link className={cx("link")} to={"/signup/form"}>
                Đăng kí ngay
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default FormLogin;
