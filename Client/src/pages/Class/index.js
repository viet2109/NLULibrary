import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

Class.propTypes = {
    
};

function Class(props) {
    const navigate =  useNavigate();
    const user = useSelector((state) => state.auth.login.currentUser)
    
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [])
    
    return (
        
        <div style={{height: '1000px'}}>
            {user&&'Chào, ' + user.name}
        </div>
    );
}

export default Class;