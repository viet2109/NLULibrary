import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllQuestion, logOutUser } from '~/redux/apiRequest';
import Button from '~/components/Button';

Class.propTypes = {
    
};

function Class(props) {
    const navigate =  useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((state) => state.auth.login.currentUser)
    const [listQuestion, setListQuestion] = useState([])
    
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [])

    
    
    return (
        
        <div style={{height: '1000px'}}>
            {user&&'Chào, ' + user.name}
            <Button onClick={() => {logOutUser(user.token, dispatch, navigate)}}>Log out</Button>
            <Button onClick={() => {getAllQuestion(user.token).then((res) => {
               
                setListQuestion(res)
            })
            
            }}>Get all question</Button>
           
           {listQuestion.map((question) =>(
            <div>{question.title}</div>
           ))}
        </div>
    );
}

export default Class;