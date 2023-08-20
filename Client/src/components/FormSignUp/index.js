import React, { Fragment } from "react";
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
    value: "ba ria vung tau",
    label: "Bà Rịa - Vũng Tàu",
  },
  {
    value: "binh duong",
    label: "Bình Dương",
  },
  {
    value: "binh phuoc",
    label: "Bình Phước",
  },
  {
    value: "binh thuan",
    label: "Bình Thuận",
  },
  {
    value: "binh đinh",
    label: "Bình Định",
  },
  {
    value: "bac lieu",
    label: "Bạc Liêu",
  },
  {
    value: "bac giang",
    label: "Bắc Giang",
  },
  {
    value: "bac kan",
    label: "Bắc Kạn",
  },
  {
    value: "bac ninh",
    label: "Bắc Ninh",
  },
  {
    value: "ben tre",
    label: "Bến Tre",
  },
  {
    value: "cao bang",
    label: "Cao Bằng",
  },
  {
    value: "ca mau",
    label: "Cà Mau",
  },
  {
    value: "can tho",
    label: "Cần Thơ",
  },
  {
    value: "gia lai",
    label: "Gia Lai",
  },
  {
    value: "ha giang",
    label: "Hà Giang",
  },
  {
    value: "ha nam",
    label: "Hà Nam",
  },
  {
    value: "ha noi",
    label: "Hà Nội",
  },
  {
    value: "ha tinh",
    label: "Hà Tĩnh",
  },
  {
    value: "hoa binh",
    label: "Hòa Bình",
  },
  {
    value: "hung yen",
    label: "Hưng Yên",
  },
  {
    value: "hai duong",
    label: "Hải Dương",
  },
  {
    value: "hai phong",
    label: "Hải Phòng",
  },
  {
    value: "hau giang",
    label: "Hậu Giang",
  },
  {
    value: "khanh hoa",
    label: "Khánh Hòa",
  },
  {
    value: "kien giang",
    label: "Kiên Giang",
  },
  {
    value: "kon tum",
    label: "Kon Tum",
  },
  {
    value: "lai chau",
    label: "Lai Châu",
  },
  {
    value: "long an",
    label: "Long An",
  },
  {
    value: "lao cai",
    label: "Lào Cai",
  },
  {
    value: "lam dong",
    label: "Lâm Đồng",
  },
  {
    value: "lang son",
    label: "Lạng Sơn",
  },
  {
    value: "nam dinh",
    label: "Nam Định",
  },
  {
    value: "nghe an",
    label: "Nghệ An",
  },
  {
    value: "ninh binh",
    label: "Ninh Bình",
  },
  {
    value: "ninh thuan",
    label: "Ninh Thuận",
  },
  {
    value: "phu tho",
    label: "Phú Thọ",
  },
  {
    value: "phu yen",
    label: "Phú Yên",
  },
  {
    value: "quang binh",
    label: "Quảng Bình",
  },
  {
    value: "quang nam",
    label: "Quảng Nam",
  },
  {
    value: "quang ngai",
    label: "Quãng Ngãi",
  },
  {
    value: "quang ninh",
    label: "Quảng Ninh",
  },
  {
    value: "quang tri",
    label: "Quảng Trị",
  },
  {
    value: "soc trang",
    label: "Sóc Trăng",
  },
  {
    value: "son la",
    label: "Sơn La",
  },
  {
    value: "thanh hoa",
    label: "Thanh Hóa",
  },
  {
    value: "thai binh",
    label: "Thái Bình",
  },
  {
    value: "thai nguyen",
    label: "Thái Nguyên",
  },
  {
    value: "thua thien hue",
    label: "Thừa Thiên Huế",
  },
  {
    value: "tien giang",
    label: "Tiền Giang",
  },
  {
    value: "tra vinh",
    label: "Trà Vinh",
  },
  {
    value: "tuyen quang",
    label: "Tuyên Quang",
  },
  {
    value: "tay ninh",
    label: "Tây Ninh",
  },
  {
    value: "vinh long",
    label: "Vĩnh Long",
  },
  {
    value: "vinh phuc",
    label: "Vĩnh Phúc",
  },
  {
    value: "yen bai",
    label: "Yên Bái",
  },
  {
    value: "dien bien",
    label: "Điện Biên",
  },
  {
    value: "da nang",
    label: "Đà Nẵng",
  },
  {
    value: "dak lak",
    label: "Đắk Lắk",
  },
  {
    value: "dak nong",
    label: "Đắk Nông",
  },
  {
    value: "dong nai",
    label: "Đồng Nai",
  },
  {
    value: "dong thap",
    label: "Đồng Tháp",
  },
  
];

listOption.sort((a, b) => a.value.localeCompare(b.value));

function FormSignUp(props) {
  const location = useLocation();
  location.state.role = 'student';
  return (
    <Fragment>
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
              <Link className={cx("login-back")} to={"/login/student"}>
                Đăng nhập ngay
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </Fragment>
  );
}

export default FormSignUp;
