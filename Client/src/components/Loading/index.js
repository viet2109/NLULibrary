import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Loading.module.scss'
Loading.propTypes = {
    
};

const cx = classNames.bind(styles)
function Loading({text}) {
    return (
        <div className={cx('loading-wrapper')}>
        <div className={cx('loading')}>

        <div className={cx('text')}>{text}</div>
        <span className={cx('ring')}></span>
        </div>
      </div>
    );
}

export default Loading;