import React from 'react';
import { Link } from 'react-router-dom';
import footerBanner from '../images/footer-banner.jpg';

const Footer = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${footerBanner})` }}>
            <div className="hero-overlay bg-opacity-30" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}></div>
            <div className="hero-content text-center text-neutral-content w-full">
                <div className='w-full flex flex-col justify-center items-center'>
                    <div className="max-w-xl">
                        <Link to='/' className="btn btn-link no-underline hover:no-underline normal-case text-xl text-neutral font-coresens border-4 border-neutral hover:border-neutral">DeepGreen</Link>
                        <p className='text-neutral text-sm my-3 font-kiro'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem consectetur voluptas, iure ipsum ratione asperiores dolor tempora nobis labore praesentium.</p>
                        <div>
                            <Link to='/' className='btn btn-link hover:btn-primary rounded-none hover:text-gray-50 hover:no-underline text-neutral no-underline border-0 border-r-2 border-neutral'>Facebook</Link>
                        </div>
                    </div>
                    <div className="max-w-full flex flex-row flex-wrap sm:flex-nowrap gap-2 justify-center my-10">
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <p className='text-neutral'>Icon</p>
                            <div className='text-neutral text-left'>
                                <p className='uppercase text-sm font-coresens'>Luxury Dress</p>
                                <p className='uppercase text-xs font-kiro'>Tagline goes here</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <p className='text-neutral'>Icon</p>
                            <div className='text-neutral text-left'>
                                <p className='uppercase text-sm font-coresens'>Luxury Dress</p>
                                <p className='uppercase text-xs font-kiro'>Tagline goes here</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <p className='text-neutral'>Icon</p>
                            <div className='text-neutral text-left'>
                                <p className='uppercase text-sm font-coresens'>Luxury Dress</p>
                                <p className='uppercase text-xs font-kiro'>Tagline goes here</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <p className='text-neutral'>Icon</p>
                            <div className='text-neutral text-left'>
                                <p className='uppercase text-sm font-coresens'>Luxury Dress</p>
                                <p className='uppercase text-xs font-kiro'>Tagline goes here</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-2 justify-center items-center'>
                            <p className='text-neutral'>Icon</p>
                            <div className='text-neutral text-left'>
                                <p className='uppercase text-sm font-coresens'>Luxury Dress</p>
                                <p className='uppercase text-xs font-kiro'>Tagline goes here</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider w-full"></div>
                    <div className="max-w-full">
                        <p className='text-neutral text-sm my-3 font-kiro'><span className='text-primary'>DeepGreen</span> @{new Date().getFullYear()} Made with ❤ All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;