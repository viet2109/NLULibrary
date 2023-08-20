import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './QuestionItems.module.scss'
import FormQuestion from '~/components/FormQuestion';
QuestionItems.propTypes = {
    
};

const cx = classNames.bind(styles)

function QuestionItems({currentItems}) {
    return (
        <div className={cx('wrapper')}>
            {currentItems && currentItems.map((item, index) => <FormQuestion key={index} title={item.question} />)}
        </div>
    );
}

export default QuestionItems;