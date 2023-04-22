import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-info">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 uppercase font-coresens text-xs">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>About</Link></li>
                        <li><Link to='/'>Online Shop</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                        <li><Link to='/'>Contact Us</Link></li>
                        <li>
                            <div className="sm:hidden inline-flex">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                                        <div className="indicator">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            <span className="badge badge-sm indicator-item">5</span>
                                        </div>
                                    </label>
                                </div>
                                <p className='ml-0 font-coresens text-xs'>$100.00</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-link no-underline hover:no-underline normal-case text-xl text-secondary font-coresens border-4 border-secondary hover:border-secondary rounded-none">DeepGreen</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 uppercase font-coresens text-xs">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Online Shop</Link></li>
                    <li><Link to='/'>Blog</Link></li>
                    <li><Link to='/'>Contact Us</Link></li>
                </ul>
            </div>
            <div className="navbar-end hidden sm:inline-flex">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">5</span>
                        </div>
                    </label>
                </div>
                <p className='border-r-2 border-l-neutral rounded-none pr-4 mx-2 font-coresens text-xs'>$100.00</p>
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
            </div>
        </div>
    );
};

export default Navbar;