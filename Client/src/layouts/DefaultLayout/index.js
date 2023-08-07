import React from 'react';
import PropTypes from 'prop-types';
import styles from "./DefaultLayout.module.scss"
import classNames from "classnames/bind" ;

Defaultlayout.propTypes = {
    
};

const cx = classNames.bind(styles)


function Defaultlayout({children}) {
    return (
        <div className={cx(styles.wrapper)}>
            {children}
        </div>
    );
}

export default Defaultlayout;