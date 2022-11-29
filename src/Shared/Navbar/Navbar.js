import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthContext/AuthProvider';
import logo from "../../Utilities/choose.png";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="navbar pb-2 lg:px-10 absolute top-0 left-0 right-0 bg-transparent">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            !user && <li className='text-success text-xl font-bold'><Link to="/login">Login</Link></li>
                        }
                        <li tabIndex={0}>
                            <Link className="justify-between text-slate-400">
                                Category
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2 z-50">
                                <li className='btn my-1'><Link>Cox's Bazar</Link></li>
                                <li className='btn my-1'><Link>Sajek Valley</Link></li>
                                <li className='btn my-1'><Link>Saint Martin</Link></li>
                                <li className='btn my-1'><Link>Sundarban</Link></li>
                            </ul>
                        </li>
                        {
                            !user && <li><Link to="/signup" className='text-success text-xl font-bold'>SignUp</Link></li>
                        }
                    </ul>
                </div>
                <Link to="/" className="normal-case text-xl"><img className='lg:w-24 z-50 lg: md:w-14 sm:10 w-14 rounded-full ' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {
                        !user && <li className='text-success text-xl font-bold'><Link to="/login">Login</Link></li>
                    }
                    <li tabIndex={0}>
                        <Link className='text-success text-xl font-bold'>
                            Category
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </Link>
                        <ul className="p-2 z-50">
                            <li className='btn my-1'><Link to="/hotels/1">Cox's Bazar</Link></li>
                            <li className='btn my-1'><Link to="/hotels/2">Sajek Valley</Link></li>
                            <li className='btn my-1'><Link to="/hotels/3">Saint Martin</Link></li>
                            <li className='btn my-1'><Link to="/hotels/4">Sundarban</Link></li>
                        </ul>
                    </li>
                    {
                        !user && <li><Link to="/signup" className='text-success text-xl font-bold'>SignUp</Link></li>
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/profile" className="btn">
                    {
                        user ? <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                        : "User"
                    }
                </Link>
            </div>
        </div>
    );
};

export default Navbar;