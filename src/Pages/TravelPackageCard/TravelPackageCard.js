import React from 'react';
import { Link } from 'react-router-dom';
import "./TravelPackageCard.css";

const TravelPackageCard = ({ place }) => {
    const { photo, place_category, place_name, id } = place;
    return (
        <div>
            <Link to={`/hotels/${id}`} aria-label='View Item'>
                <h1 className='text-center text-4xl font-extrabold text-slate-300 card-header-txt'>{place_name}</h1>
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
                        <h1 className='text-xl tracking-wide font-extrabold text-slate-300 card-header-txt'>{place_name}</h1>
                        <h3 className='text-lg tracking-wide text-slate-300'>{place_category}</h3>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default TravelPackageCard;