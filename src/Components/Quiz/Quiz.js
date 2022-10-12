import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total, id } = quiz;
    return (
        <div className="card w-[80%] mx-auto bg-slate-400 p-10 shadow-xl ">
            <figure><img className='w-[50%]' src={logo} alt={name} /></figure>
            <div className="card-body">
                <div className='flex flex-col items-center'>
                    <h2 className="card-title text-3xl mb-5">{name}</h2>
                    <div className="badge badge-accent font-bold">Total Quiz: {total}</div>
                </div>
                <Link to={`/quiz/${id}`} className='btn btn-accent flex flex-col items-center mt-5'>
                    Start Quiz
                    <FontAwesomeIcon icon={faRightLong}></FontAwesomeIcon>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;