import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthContext/AuthProvider';
import { FaGoogle, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <>
            {
                user
                    ?
                    <div className="card w-96 glass mt-40 mx-auto p-8 bg-slate-200 hover:bg-slate-300">
                        <figure>
                            {
                                user.photoURL 
                                ? <img className='rounded' src={user.photoURL} alt="User Img" />
                                : <FaUser></FaUser>
                            }
                        </figure>
                        <div className=" p-4 my-4">
                            <h4 className="font-bold text-center text-xl">{user.displayName}</h4>
                            <h3 className="text-lg text-center flex items-center gap-x-1"><FaGoogle></FaGoogle>{user.email}</h3>
                            <small className='text-center font-bold'>User ID: {user.uid.toUpperCase()}</small>
                            <div className="card-actions justify-center mt-2">
                                <button className="btn btn-outline btn-success">Update Profile</button>
                            </div>
                            <div className="mt-2 flex justify-center">
                                <button onClick={logOut} className="btn btn-outline btn-error">Sign Out</button>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='mt-48 mb-96'>
                        <h1 className='text-center text-red-700 text-2xl font-bold'>You Are Not Logged In.
                            <Link className='text-warning' to="/login"> Please Login </Link>
                            To Continue...</h1>
                    </div>

            }
        </>
    );
};

export default UserProfile;