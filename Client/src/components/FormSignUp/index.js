import React from "react";
import PropTypes from "prop-types";
import styles from "./FormSignUp.module.scss";
import classNames from "classnames/bind";
import { Formik, Form, FastField } from "formik";
import * as yup from "yup";
import InputField from "../InputField";
import Button from "../Button";
import { Link, useLocation } from "react-router-dom";
import SelectField from "../SelectField";

FormSignUp.propTypes = {};

const SignupSchema = yup.object().shape({
  name: yup.string().required("Bạn cần phải nhập tên"),
  class: yup.string().required("Bạn cần nhập tên lớp"),
  school: yup.string().required("Bạn cần phải nhập tên trường"),
  province: yup.string().required("Hãy chọn một tỉnh"),
  birthDate: yup.date().required("Bạn cần nhập ngày sinh"),
  emailPhone: yup
    .string()
    .required("Bạn cần nhập số diện thoại hoặc email")
    .test(
      "emailOrPhone",
      "Số điện thoại hoặc địa chỉ email không đúng",
      function (value) {
        const emailRegex =
          /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        const phoneRegex = /^(\+91-|\+91|0)?\d{10}$/;
        let isValidEmail = emailRegex.test(value);
        let isValidPhone = phoneRegex.test(value);
        if (!isValidEmail && !isValidPhone) {
          return false;
        }
        return true;
      }
    ),

  email: yup
    .string()
    .required("Bạn cần nhập địa chỉ email")
    .email("Địa chỉ email không hợp lệ"),
  phone: yup
    .string()
    .required("Bạn cần nhập số điện thoại")
    .matches(/^(\+91-|\+91|0)?\d{10}$/, "Số điện thoại không hợp lệ"),
  password: yup
    .string()
    .required("Bạn cần nhập mật khẩu")
    .min(6, "Mật khẩu cần ít nhất 6 kí tự"),
  confirmPassword: yup
    .string()
    .required("Bạn cần xác nhận lại mật khẩu")
    .oneOf([yup.ref("password")], "Mật khẩu nhập lại không đúng"),
});

const cx = classNames.bind(styles);
const listOption = [
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "ho chi minh",
    label: "TP. Hồ Chí Minh",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
  {
    value: "an giang",
    label: "An Giang",
  },
];

listOption.sort((a, b) => a.value.localeCompare(b.value));

function FormSignUp(props) {
  const location = useLocation();
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          class: "",
          school: "",
          province: "",
          birthDate: "",
          emailPhone: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ values, errors, touched }) => (
          <Form className={cx("form")}>
            <div className={cx("info", "user-info")}>
              <h1 className={cx("title")}>Thông tin cá nhân</h1>
              <FastField
                error={errors.name && touched.name}
                name="name"
                label="Họ và tên"
                component={InputField}
              >
                {errors.name && touched.name ? (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.name}
                  </div>
                ) : null}
              </FastField>

              <div className={cx("field-wrapper")}>
                {location.state.role === "student" && (
                  <FastField
                    error={errors.name && touched.name}
                    name="class"
                    label="Lớp"
                    component={InputField}
                  >
                    {errors.class && touched.class ? (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.class}
                      </div>
                    ) : null}
                  </FastField>
                )}

                <FastField
                  error={errors.name && touched.name}
                  name="school"
                  label="Trường"
                  component={InputField}
                >
                  {errors.school && touched.school ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.school}
                    </div>
                  ) : null}
                </FastField>
              </div>

              <div className={cx("field-wrapper")}>
                <FastField
                  error={errors.name && touched.name}
                  name="birthDate"
                  label="Ngày sinh"
                  type="date"
                  component={InputField}
                >
                  {errors.birthDate && touched.birthDate ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.birthDate}
                    </div>
                  ) : null}
                </FastField>

                <FastField
                  error={errors.name && touched.name}
                  name="province"
                  label="Tỉnh"
                  component={SelectField}
                  listOption={listOption}
                >
                  {errors.province && touched.province ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.province}
                    </div>
                  ) : null}
                </FastField>
              </div>
            </div>

            <div className={cx("info", "account-info")}>
              <h1 className={cx("title")}>Thông tin tài khoản</h1>

              {location.state.role === "student" ? (
                <FastField
                  error={errors.name && touched.name}
                  name="emailPhone"
                  label="Số điện thoại hoặc email"
                  component={InputField}
                >
                  {errors.emailPhone && touched.emailPhone ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.emailPhone}
                    </div>
                  ) : null}
                </FastField>
              ) : (
                <>
                  <FastField
                    error={errors.name && touched.name}
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

                  <FastField
                    error={errors.name && touched.name}
                    name="phone"
                    label="Số điện thoại"
                    component={InputField}
                  >
                    {errors.phone && touched.phone ? (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.phone}
                      </div>
                    ) : null}
                  </FastField>
                </>
              )}

              <div className={cx("field-wrapper")}>
                <FastField
                  error={errors.name && touched.name}
                  name="password"
                  label="Mật khẩu"
                  component={InputField}
                  type="password"
                >
                  {errors.password && touched.password ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.password}
                    </div>
                  ) : null}
                </FastField>
              </div>

              <FastField
                error={errors.name && touched.name}
                name="confirmPassword"
                label="Xác nhận mật khẩu"
                type="password"
                component={InputField}
              >
                {errors.confirmPassword && touched.confirmPassword ? (
                  <div style={{ color: "red", fontSize: "12px" }}>
                    {errors.confirmPassword}
                  </div>
                ) : null}
              </FastField>
            </div>

            <Button type={'submit'}  className={cx("sigup-btn")} primary >
              Đăng kí
            </Button>

            <div className={cx("login-back-wrapper")}>
              Đã có tài khoản?{" "}
              <Link className={cx("login-back")} to={"/login"}>
                Đăng nhập ngay
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormSignUp;
