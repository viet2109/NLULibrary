import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginHeader from '~/components/Header/LoginHeader';
import styles from "./LoginRole.module.scss"
import classNames from 'classnames/bind';
import FormLogin from '~/components/FormLogin';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


LoginStudent.propTypes = {
    
};

const cx = classNames.bind(styles)

function LoginStudent(props) {
    const location = useLocation()
    const navigate = useNavigate();
    const user = useSelector(state => state.auth.login.currentUser)

    useEffect(() => {
        if (user) {
            navigate('/class')
        }
    }, [])
    return (
       <>
        <LoginHeader></LoginHeader>
        <div className={cx('form-login-wrapper')}>
            <FormLogin classNames={cx('form-login')}></FormLogin>
            <div className={cx('image-wrapper', {
                'active': location.pathname.split('/').slice(-1)[0] === 'student'
            })}>
               <img className={cx('image')} src={
                    'https://shub.edu.vn/images/illustrations/student-illustration.svg'
               } alt='img' />
            </div>
            <div className={cx('image-wrapper', {
                'active' :location.pathname.split('/').slice(-1)[0] === 'teacher'
            })}>
               <img className={cx('image')} src={
                    'https://shub.edu.vn/images/illustrations/teacher-illustration.svg'
               } alt='img' />
            </div>
        </div>
       </>
    );
}

export default LoginStudent;