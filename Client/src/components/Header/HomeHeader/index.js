import React from 'react';
import PropTypes from 'prop-types';
import styles from "./HomeHeader.module.scss"
import classNames from "classnames/bind" ;
import Header from '~/components/Header';
import images from '~/assets/images'
import Button from '~/components/Button';


HomeHeader.propTypes = {
    
};
const cx = classNames.bind(styles)
const cxHomePage = classNames.bind(require('~/pages/Home/Home.module.scss'));

function HomeHeader(props) {
    const handleNavigate = (e) => {
            document.querySelectorAll(`.${e.target.className}`).forEach((item) => {
               item.classList.remove(cx('active'))
            })
            e.target.classList.add(cx('active'))
    }
    const handleExit = (e) => {
        if(e.currentTarget===e.target) {
            document.querySelector(`.${cx('menuListWrapper')}`).style.left = '2000px';
            document.querySelector(`.${cx('menuList')}`).style.right = '-1000px';
        }
    }

    const handleOpenMenu = (e) => {
        document.querySelector(`.${cx('menuListWrapper')}`).style.left = '0';
        document.querySelector(`.${cx('menuList')}`).style.right = '0';
    }
    return (
        <Header>
            <ul className={cx('navigateList')}>
                <li className={cx('navigateItem', 'active')} onClick={(e) => {handleNavigate(e)}}>
                    Giới thiệu
                </li>
                <li className={cx('navigateItem')} onClick={(e) => {handleNavigate(e)}}>Đối tác</li>
                <li className={cx('navigateItem')} onClick={(e) => {handleNavigate(e)}}>Tính năng</li>
                <li className={cx('navigateItem')} onClick={(e) => {handleNavigate(e)}}>Liên hệ</li>
            </ul>

            <div className={cx('logoWrap')}>
                <img className={cx('logo')} src={images.logo} alt='Matcha Company Logo' />
            </div>

            <div className={cx('register')}>
                <Button to={"/login"} className={cx('login', 'registerItem')}>Đăng nhập</Button>
                <Button to={"/signup"} className={cx('registerItem')} primary>Đăng ký</Button>
                <img className={cx('registerItem', 'menu')} src={'https://shub.edu.vn/images/landing/ver3/header-section/menu.svg'} alt={'Menu'} onClick={(e) => {handleOpenMenu(e)}} />
            </div>

            <div className={cx('menuListWrapper')} onClick={(e) => {handleExit(e)}}>
                <div className={cx("menuList")} >
                    <img className={cx('exitButton')} src={'https://shub.edu.vn/images/landing/ver3/hero-section/close.svg'} alt={'Exit button'} onClick={(e) => {handleExit(e)}} />
                    <ul className={cx('menuItemWrapper')}>
                        <li className={cx('menuItem', 'active')} onClick={(e) => {handleNavigate(e)}}>Giới thiệu</li>
                        <li className={cx('menuItem')}  onClick={(e) => {handleNavigate(e)}}>Tính năng</li>
                        <li className={cx('menuItem')} onClick={(e) => {handleNavigate(e)}}>Đối tác</li>
                        <li className={cx('menuItem')} onClick={(e) => {handleNavigate(e)}}>Liên hệ</li>
                    </ul>
                    <Button to={"/login"} className={cx('login')}>Đăng nhập</Button>
                    <Button to={"/signup"} primary className={cx('signup')}>Đăng kí</Button>
                </div>
            </div>
        </Header>
    );
}

export default HomeHeader;