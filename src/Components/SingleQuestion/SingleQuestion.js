import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';

const SingleQuestion = ({ singleQuestion }) => {
    const { question, options } = singleQuestion;
    return (
        <div className='border m-5'>
            <h2>{question}<FontAwesomeIcon icon={faEye}></FontAwesomeIcon></h2>
            <div className='grid grid-cols-2'>
                {
                    options.map((option, idx) => <Option key={idx} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;