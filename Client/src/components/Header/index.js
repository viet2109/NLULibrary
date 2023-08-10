import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind" ;
import styles from './Header.module.scss'

Header.propTypes = {
    
};
const cx = classNames.bind(styles)
function Header({className, children}) {
    return (
        <div className={cx('wrapper', className)}>
           {children}
        </div>
    );
}

export default Header;