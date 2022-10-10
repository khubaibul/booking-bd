import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';

const QuizCard = () => {
    const quizCard = useLoaderData();
    const { name, logo, total, questions } = quizCard.data;
    return (
        <div>
            <div className='bg-slate-400 lg:w-[80%] lg:mx-auto mx-2 flex flex-col justify-center items-center rounded my-5 p-5'>
                <h2 className='text-4xl font-bold mb-2'>Quiz of {name}</h2>
                <img className='w-[25%]' src={logo} alt="" />
                <h3 className='text-lg font-bold'>Total Question: {total}</h3>
            </div>
            <div className='grid grid-cols-2'>
                {
                    questions.map(singleQuestion => <SingleQuestion key={singleQuestion.id} singleQuestion={singleQuestion}></SingleQuestion>)
                }
            </div>
        </div>
    );
};

export default QuizCard;