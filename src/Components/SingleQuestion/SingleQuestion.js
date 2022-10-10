import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';

const SingleQuestion = ({ singleQuestion }) => {
    const { question, options } = singleQuestion;
    return (
        <div className='border m-5 bg-slate-400 p-5 rounded-lg'>
            <div className='flex justify-between'>
                <h2 className='text-center text-2xl font-bold'>{question}</h2>
                <button className='btn btn-accent btn-sm'>
                    <span className='flex items-center justify-center'><FontAwesomeIcon icon={faEye}></FontAwesomeIcon></span>
                </button>
            </div>
            <div className='grid lg:grid-cols-2'>
                {
                    options.map((option, idx) => <Option key={idx} option={option}></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;