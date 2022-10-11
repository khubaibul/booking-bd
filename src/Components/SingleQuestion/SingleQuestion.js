import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-solid-svg-icons'
import Option from '../Option/Option';



const SingleQuestion = ({ singleQuestion, setRightCount, setWrongCount, number }) => {
    
    const quizNumber = number + 1;
    const { question, options, correctAnswer } = singleQuestion;
    const splitQuestion = question.replace(/(<([^>]+)>)/gi, "")

    return (
        <div>
            <div className='flex justify-between'>
                <h2 className='text-2xl font-bold text-justify'><FontAwesomeIcon className='mr-2' icon={faSquare}></FontAwesomeIcon>Quiz:{quizNumber} {splitQuestion}</h2>
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