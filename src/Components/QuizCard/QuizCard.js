import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import SingleQuestion from '../SingleQuestion/SingleQuestion';
import './QuizCard.css'

const QuizCard = () => {
    const quizCard = useLoaderData();
    const { name, logo, total, questions } = quizCard.data;
    return (
        <div className='overflow-hidden'>
            <div className='bg-slate-400 lg:w-[80%] lg:mx-auto mx-2 flex flex-col justify-center items-center rounded my-5 p-5'>
                <h2 className='text-4xl font-bold mb-2'>Quiz of {name}</h2>
                <img className='w-[25%]' src={logo} alt="" />
                <h3 className='text-lg font-bold'>Total Question: {total}</h3>
            </div>
            <div className='question-container lg:grid'>
                <div className='grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
                    {
                        questions.map(singleQuestion => <SingleQuestion key={singleQuestion.id} singleQuestion={singleQuestion}></SingleQuestion>)
                    }
                </div>
                <div>
                    <div className='ans-calculation bg-slate-400 lg:mt-5 rounded-lg p-5'>
                        <h4>Correct Answer: 5</h4>
                        <h4>Wrong Answer: 5</h4>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5 my-10'>
                <NavLink className="btn btn-sm border-none text-yellow-50 btn-accent" to="/quiz/1">React</NavLink>
                <NavLink className="btn btn-sm border-none text-yellow-50 btn-accent" to="/quiz/2">JavaScript</NavLink>
                <NavLink className="btn btn-sm border-none text-yellow-50 btn-accent" to="/quiz/4">CSS</NavLink>
                <NavLink className="btn btn-sm border-none text-yellow-50 btn-accent" to="/quiz/5">Git</NavLink>
            </div>
        </div>
    );
};

export default QuizCard;