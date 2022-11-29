import React from 'react';
import { Link } from 'react-router-dom';
import { FaBed } from 'react-icons/fa';

const Hotel = ({ hotel }) => {
    const { name, photo, location, ratings, suite_option, hotel_id } = hotel;
    return (
        <div className='p-4'>
            <Link to={`/hotel/${hotel_id}`} aria-label='View Item'>
                <h1 className='text-center text-4xl font-extrabold text-slate-600 card-header-txt'>{name}</h1>
                <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
                    <img
                        className='object-cover w-full h-56 md:h-64 xl:h-80'
                        src={photo}
                        alt=''
                    />
                    <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
                        <br />
                        <br />
                        <br />
                        <br />
                        <h1 className='text-xl tracking-wide font-extrabold text-slate-300 card-header-txt'>{name}</h1>
                        <h3 className='text-lg tracking-wide text-slate-300'>{location}</h3>
                        <div className='badge-accent badge w-28 font-bold'>Ratings {ratings}</div>
                        <br />
                        <div>
                            {
                                suite_option.map(singleSuit => {
                                    return <div className='flex items-center gap-x-2 text-accent text-lg'>
                                        <FaBed></FaBed>
                                        <p className='text-slate-400 font-bold'>{singleSuit.suite_name}</p>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Hotel;