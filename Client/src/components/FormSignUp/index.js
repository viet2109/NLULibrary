import React, { Fragment } from "react";
import PropTypes from "prop-types";
import styles from "./FormSignUp.module.scss";
import classNames from "classnames/bind";
import { Formik, Form, FastField } from "formik";
import * as yup from "yup";
import InputField from "../InputField";
import Button from "../Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { registerNewUser } from "~/redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../Loading";

FormSignUp.propTypes = {};

const SignupSchema = yup.object().shape({
  name: yup.string().required("Bạn cần phải nhập tên"),
  className: yup.string().required("Bạn cần nhập tên lớp"),
  school: yup.string().required("Bạn cần phải nhập tên trường"),
  dob: yup
    .date()
    .max(new Date(), "Ngày tháng năm sinh của bạn không đúng")
    .min(new Date("1900-01-01"), "Ngày tháng năm sinh của bạn không đúng")
    .required("Bạn cần nhập ngày sinh"),

  email: yup
    .string()
    .required("Bạn cần nhập địa chỉ email")
    .email("Địa chỉ email không hợp lệ"),

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




function FormSignUp(props) {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  location.state.role = "student";
  const error = useSelector((state) => state.auth.register.error)
  const isFetching = useSelector(state => state.auth.register.isFetching)
  
  return (
    <Fragment>
      <Formik
        initialValues={{
          name: "",
          className: "",
          school: "",
          dob: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          const userInfo = {
            name: values.name,
            className: values.className,
            school: values.school,
            dob: values.dob,
            email: values.email,
            password: values.password,
          };
         registerNewUser(userInfo, dispatch, navigate)
        }}
      >
        {({ errors, touched }) => (
          
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
                    name="className"
                    
                    label="Lớp"
                    component={InputField}
                  >
                    {errors.className && touched.className ? (
                      <div style={{ color: "red", fontSize: "12px" }}>
                        {errors.className}
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
                  name="dob"
                  
                  label="Ngày sinh"
                  type="date"
                  component={InputField}
                >
                  {errors.dob && touched.dob ? (
                    <div style={{ color: "red", fontSize: "12px" }}>
                      {errors.dob}
                    </div>
                  ) : null}
                </FastField>
              </div>
            </div>

            <div className={cx("info", "account-info")}>
              <h1 className={cx("title")}>Thông tin tài khoản</h1>

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
              
                  {error?<p className={cx('error-email')}>Địa chỉ email đã tồn tại</p>:<Fragment></Fragment>}

            <Button type={"submit"} className={cx("sigup-btn")} primary>
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
    {isFetching && <Loading text={"Đang đăng kí"} />}
    </Fragment>
  );
}

export default FormSignUp;
