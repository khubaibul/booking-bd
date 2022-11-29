import React, { useContext } from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import billingBg from "../../Utilities/high-angle-passport-tickets-arrangement.jpg"

const Billing = () => {
    const allHotels = useLoaderData();
    const { name, id } = useParams();
    const { stayDay } = useContext(AuthContext);

    const selectedHotels = allHotels.find(hotel => hotel.hotel_id === id);
    const selectedSuite = selectedHotels.suite_option.find(suite => suite.suite_name === name)

    const { suite_name, price, capacity } = selectedSuite;

    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${billingBg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <table className="table-normal bg-slate-300 text-black font-bold">
                            <thead className='bg-slate-400'>
                                <tr>
                                    <th>Hotel</th>
                                    <th>Suite</th>
                                    <th>Capacity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{selectedHotels.name}</td>
                                    <td>{suite_name}</td>
                                    <td>{capacity}</td>
                                    <td className='flex items-center'><FaDollarSign></FaDollarSign>BDT {price * stayDay}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='btn btn-outline btn-accent mt-2 text-slate-500'>Process To Pay</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Billing;