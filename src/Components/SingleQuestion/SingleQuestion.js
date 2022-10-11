import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';



const SingleQuestion = ({ singleQuestion, setRightCount, setWrongCount }) => {
    const { question, options, correctAnswer } = singleQuestion;
    const splitQuestion = question.replace(/(<([^>]+)>)/gi, "")


    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-center text-2xl font-bold'><FontAwesomeIcon className='mr-2' icon={faSquare}></FontAwesomeIcon>{splitQuestion}</h2>
            </div>
            <div className='grid lg:grid-cols-2'>
                {
                    options.map((option, idx) => <Option key={idx} option={option} correctAnswer={correctAnswer} setRightCount={setRightCount} setWrongCount={setWrongCount}></Option>)
                }
            </div>
        </div>
    );
};

export default SingleQuestion;