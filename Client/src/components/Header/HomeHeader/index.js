import React from 'react';
import PropTypes from 'prop-types';
import styles from "./HomeHeader.module.scss"
import classNames from "classnames/bind" ;
import Header from '~/components/Header';
import images from '~/assets/images'
import Button from '~/components/Button';
import { HashLink } from 'react-router-hash-link';
import Logo from '~/components/Logo';



HomeHeader.propTypes = {
    
};
const cx = classNames.bind(styles)


function HomeHeader(props) {
    const handleNavigate = (e) => {
            document.querySelectorAll(`.${e.currentTarget.className}`).forEach((item) => {
               item.classList.remove(cx('active'))
            })
            e.currentTarget.classList.add(cx('active'))
    }
    const handleExit = (e) => {
        if(e.currentTarget===e.target) {
            document.querySelector('body').classList.toggle('hidden');
            document.querySelector(`.${cx('menuListWrapper')}`).style.left = '2000px';
            document.querySelector(`.${cx('menuList')}`).style.right = '-1000px';
        }
    }

    const handleOpenMenu = (e) => {
        document.querySelector('body').classList.toggle('hidden');

        document.querySelector(`.${cx('menuListWrapper')}`).style.left = '0';
        document.querySelector(`.${cx('menuList')}`).style.right = '0';
    }
    return (
        <Header>
            <ul className={cx('navigateList')}>
                <li className={cx('navigateItem', 'active')} onClick={(e) => {handleNavigate(e)}}>
                   <HashLink  className={cx('link-section')} to={"#intro"}>Giới thiệu</HashLink>
                </li>
                <li className={cx('navigateItem')} onClick={(e) => {handleNavigate(e)}}><HashLink  className={cx('link-section')} to={"#feature"}>Tính năng</HashLink></li>
                <li className={cx('navigateItem')} onClick={(e) => {handleNavigate(e)}}><HashLink  className={cx('link-section')} to={"#partner"}>Đối tác</HashLink></li>
                <li className={cx('navigateItem')} onClick={(e) => {handleNavigate(e)}}><HashLink  className={cx('link-section')} to={"#contact"}>Liên hệ</HashLink></li>
            </ul>

            <Logo className={cx('logo')} src={images.logoDark} />

            <div className={cx('register')}>
                <Button to={"/login/student"} className={cx('login', 'registerItem')}>Đăng nhập</Button>
                <Button to={"/signup/form"} className={cx('registerItem')} primary>Đăng ký</Button>
                <img className={cx('registerItem', 'menu')} src={'https://shub.edu.vn/images/landing/ver3/header-section/menu.svg'} alt={'Menu'} onClick={(e) => {handleOpenMenu(e)}} />
            </div>

            <div className={cx('menuListWrapper')} onClick={(e) => {handleExit(e)}} >
                <div className={cx("menuList")} >
                    <img className={cx('exitButton')} src={'https://shub.edu.vn/images/landing/ver3/hero-section/close.svg'} alt={'Exit button'} onClick={(e) => {handleExit(e)}} />
                    <ul className={cx('menuItemWrapper')}>
                        <li className={cx('menuItem', 'active')} onClick={(e) => {handleNavigate(e)}}>
                            <HashLink className={cx('item-link')} onClick={(e) => handleExit(e)} to={'#intro'} >Giới thiệu</HashLink>
                        </li>
                        <li className={cx('menuItem')}  onClick={(e) => {handleNavigate(e)}}><HashLink className={cx('item-link')} onClick={(e) => handleExit(e)} to={'#feature'}>Tính năng</HashLink></li>
                        <li className={cx('menuItem')} onClick={(e) => {handleNavigate(e)}}><HashLink className={cx('item-link')} onClick={(e) => handleExit(e)} to={'#partner'}>Đối tác</HashLink></li>
                        <li className={cx('menuItem')} onClick={(e) => {handleNavigate(e)}}><HashLink className={cx('item-link')} onClick={(e) => handleExit(e)} to={'#contact'}>Liên hệ</HashLink></li>
                    </ul>
                    <Button to={"/login"} className={cx('login')}>Đăng nhập</Button>
                    <Button to={"/signup/form"} primary className={cx('signup')}>Đăng kí</Button>
                </div>
            </div>
        </Header>
    );
}

export default HomeHeader;