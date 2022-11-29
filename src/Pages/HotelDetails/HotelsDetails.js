import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SuiteOption from '../SuiteOption/SuiteOption';
import { FaLocationArrow } from 'react-icons/fa';
import GoogleMapReact from 'google-map-react';
import Calendar from '../Calendar/Calendar';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HotelsDetails = () => {

    const hotelDetails = useLoaderData();

    const { name, location, photo, ratings, suite_option, map, hotel_id } = hotelDetails;
    // console.log(suite_option[0]);
    const [selectedSuite, setSelectedSuite] = useState(suite_option[0].suite_name);
    const { lat, lng } = map;
    const defaultProps = {
        center: {
            lat: 22.3350,
            lng: 91.8325
        },
        zoom: 5
    };

    const getSelectedSuite = (e) => {

        setSelectedSuite(e.target.value)
    }

    return (
        <div className='mt-40'>
            <h2 className='text-center pkg-txt text-5xl mb-10 text-[#325242]'>{name}</h2>
            <div className='lg:grid lg:grid-cols-2 lg:px-20 md:px-14 px-10'>
                <div className='lg:mt-16 mb-8'>
                    <img className='rounded' src={photo} alt="" />
                    <div className='bg-slate-300 p-2 mt-10'>
                        <div className='flex items-center gap-x-2 lg:text-2xl sm:text-lg font-semibold mb-2'>
                            <FaLocationArrow></FaLocationArrow>
                            <h5>{location}</h5>
                        </div>
                        <div className='w-[70%] mx-auto rounded' style={{ height: '60vh' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyBtxjZlOvgBUYikrge54BE-RfbsJ--BbJ8" }}
                                defaultCenter={defaultProps.center}
                                defaultZoom={defaultProps.zoom}
                            >
                                <AnyReactComponent
                                    lat={22.3350}
                                    lng={91.8325}
                                    text="Shakib"
                                />
                            </GoogleMapReact>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <h4 className='text-center text-3xl font-bold mb-7'>Exclusive Suite</h4>
                        <div className='flex flex-col gap-10 lg:ml-10'>
                            {
                                suite_option.map((suite, idx) => <SuiteOption key={idx} suite={suite}></SuiteOption>)
                            }
                        </div>
                    </div>
                    <div className='mt-10 bg-slate-300 rounded pb-5 lg:ml-10'>
                        <div>
                            <Calendar></Calendar>
                        </div>
                        <div className='flex flex-col items-center pb-5'>
                            <p className='font-bold text-xl'>Select Your Desire Suite...</p>
                            <select onChange={getSelectedSuite} className="select select-accent w-full max-w-xs">
                                {
                                    suite_option.map((option, idx) => {
                                        return <option value={option.suite_name} key={idx} className='font-bold text-lg'>{option.suite_name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className=' flex justify-center'>
                            <button className='btn btn-outline btn-accent'><Link to={`/billing/${hotel_id}/${selectedSuite}`}>Process To Check-In</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotelsDetails;