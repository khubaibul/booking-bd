import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizzes = useLoaderData();
    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 my-10'>
            {
                quizzes.data.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
            }
        </div>
    );
};

export default Quizzes;