import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { FaPeopleArrows, FaStar, FaArtstation } from 'react-icons/fa';

const SuiteOption = ({ suite }) => {
    const { suite_name, suite_bed, capacity, price, amenities } = suite;
    return (
        <div className='lg:flex md:flex gap-x-5 bg-slate-300 p-4 rounded'>
            <div className='w-[60%]'>
                <ReactImageMagnify {...{
                    smallImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        isFluidWidth: true,
                        src: suite_bed
                    },
                    largeImage: {
                        alt: 'Wristwatch by Ted Baker London',
                        src: suite_bed,
                        width: 900,
                        height: 700
                    }
                }} />
            </div>
            <div>
                <h3 className='text-2xl font-semibold'>{suite_name}</h3>
                <div className='flex items-center gap-x-2'>
                    <FaPeopleArrows></FaPeopleArrows>
                    <p>{capacity}</p>
                </div>
                <div>
                    <h3 className='text-xl font-semibold'>BDT {price}</h3>
                </div>
                <div className='mt-2'>
                    <div className='flex items-center gap-x-2 text-xl'>
                        <FaArtstation></FaArtstation>
                        <h3>Amenities</h3>
                    </div>
                    <div className='grid grid-cols-2 gap-x-2'>
                        {
                            amenities.map((aminity, idx) => {
                                return <div key={idx} className='flex items-center gap-x-1'>
                                    <FaStar></FaStar>
                                    <small className='font-semibold'>{aminity}</small>
                                </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuiteOption;