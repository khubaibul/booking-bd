import { NavLink } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className='lg:w-[80%] lg:mx-auto'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="navlink-ul menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <NavLink to="/home">Home</NavLink>
                            </li>
                            <li tabIndex={0}>
                                <a>
                                    Quiz
                                    <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                <ul className="p-2 bg-base-100">
                                    <li><NavLink to="/quiz/1">React</NavLink></li>
                                    <li><NavLink to="/quiz/2">JavaScript</NavLink></li>
                                    <li><NavLink to="/quiz/4">CSS</NavLink></li>
                                    <li><NavLink to="/quiz/5">Git</NavLink></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/analytics">Analytics</NavLink>
                            </li>
                            <li>
                                <NavLink to="blog">Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">About Us</NavLink>
                            </li>
                        </ul>
                    </div>
                    <NavLink to="/home" className="btn btn-ghost normal-case lg:text-3xl font-bold ">
                        CodeQuizGame
                    </NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="navlink-ul menu menu-horizontal p-0">
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li className='z-50' tabIndex={0}>
                            <a>
                                Quiz
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                            </a>
                            <ul className="p-2 bg-base-100">
                                <li><NavLink to="/quiz/1">React</NavLink></li>
                                <li><NavLink to="/quiz/2">JavaScript</NavLink></li>
                                <li><NavLink to="/quiz/4">CSS</NavLink></li>
                                <li><NavLink to="/quiz/5">Git</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink to="/analytics">Analytics</NavLink>
                        </li>
                        <li>
                            <NavLink to="blog">Blog</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;