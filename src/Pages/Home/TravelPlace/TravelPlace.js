import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Hotel from '../../Hotel/Hotel';

const TravelPlace = () => {
    const [placeDetails, setPlaceDetails] = useState({});
    const loactionWiseHotel = useLoaderData();

    useEffect(() => {
        fetch(`https://booking-bd-app-server.vercel.app/place/${loactionWiseHotel[0].hotel_location_id}`)
            .then(res => res.json())
            .then(data => setPlaceDetails(data))
    }, [loactionWiseHotel]);

    return (
        <div className='grid lg:grid-cols-2 mt-40 lg:px-10 md:px-10'>
            <div className='grid grid-cols-1 gap-y-20'>
                {
                    loactionWiseHotel.map(hotel => <Hotel key={hotel.hotel_id} hotel={hotel}></Hotel>)
                }
            </div>
            <div className='p-10 pt-3 lg:mx-8 md:mx-4'>
                <h1 className='text-center text-4xl pkg-txt'>{placeDetails.place}</h1>
                <p className='text-justify mb-5'>{placeDetails.description}</p>
                <img className='rounded-lg' src={placeDetails.photo} alt="" />
            </div>
        </div>
    );
};

export default TravelPlace;