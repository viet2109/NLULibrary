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
import images from "~/assets/images";

FormLogin.propTypes = {};
const cx = classNames.bind(styles);

function FormLogin({ classNames }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const LoginSchema = yup.object().shape({
    email: yup.string().required("Bạn cần nhập số diện thoại hoặc email"),
    password: yup.string().required("Bạn cần nhập mật khẩu"),
  });

  return (
    <Fragment>
      <Formik
        initialValues={{
          email: "",
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
                error={errors.email && touched.email}
                name="email"
                label="Email"
                component={InputField}
              >
                {errors.email && touched.email ? (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.email}
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
                src={images.githubIcon}
                alt="so logo"
              />
              <span>Đăng nhập bằng GitHub</span>
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
