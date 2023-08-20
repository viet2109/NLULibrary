import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FormQuestion.module.scss'

FormQuestion.propTypes = {
    
};

const cx = classNames.bind(styles)

function FormQuestion({ title,className, onClick}) {
    return (
        <div className={cx('wrapper', className)} onClick={onClick}>
            <div className={cx('after')}></div>
            <p className={cx('title')}>{title}</p>
        </div>
    );
}

export default FormQuestion;