import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './PageNotFound.module.scss'
import Button from '~/components/Button';
PageNotFound.propTypes = {
    
};

const cx = classNames.bind(styles)

function PageNotFound(props) {
    
    
    return (
        
        <div className={cx('wrapper')}>
           <h1 className={cx('not-found')}>Oops!</h1>
           <h2 className={cx('title')}>404 - page not found</h2>
           <p className={cx('des')}>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
           <Button className={cx('home-button')} primary to={'/'}>go to homepage</Button>
        </div>
    );
}

export default PageNotFound;