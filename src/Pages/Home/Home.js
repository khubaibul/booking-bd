import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import heroBg from "../../Utilities/hero-bg.jpg";
import cardBg from "../../Utilities/1991562_Freepik.jpg";
import "./Home.css";
import TravelPackageCard from '../TravelPackageCard/TravelPackageCard';

const Home = () => {
    const allPlace = useLoaderData();
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 lg:text-5xl md:text-3xl sm:text-3xl font-bold hero-txt">BookingBD.com</h1>
                        <p className="mb-5 hero-tag text-lg">Let us transport you with our highly affordable and reliable packages.</p>
                        <button className="btn btn-primary"><Link to="/" className='font-bold'>Get Booked</Link></button>
                    </div>
                </div>
            </div>
            <div className='lg:my-28 md:my-20 sm:my-10 my-10'>
                <h2 className='text-center lg:text-5xl text-3xl font-bold pkg-txt'>Here Is Your Travel Packages...</h2>
            </div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${cardBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-x-48 lg:gap-y-20 gap-10 sm:py-10'>
                    {
                        allPlace.map(place => <TravelPackageCard key={place.id} place={place}></TravelPackageCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;