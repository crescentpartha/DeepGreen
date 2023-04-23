import React from 'react';
import banner from '../../images/middle-banner.jpg';
import { Link } from 'react-router-dom';

const MiddleBanner = () => {
    return (
        <div className=''>
            {/* Middle Banner */}
            <div className="flex flex-col justify-start items-end pr-2 sm:pr-10 lg:pr-40 2xl:pr-60 h-full min-h-screen-lg bg-no-repeat bg-center bg-cover min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="w-56 sm:w-96 text-start p-2">
                    {/* There are some content over image */}
                    <p><small className='text-xs font-kiro'>DeepGreen Creative Template</small></p>
                    <h2 className='text-lg sm:text-2xl my-2'>We can bring <span className='capitalize font-coresens'>amazing experience</span> for your creative works<span className='text-primary'>.</span></h2>
                    <p className='font-kiro text-xs sm:text-sm mb-2'><span className='font-semibold'>GreenDeep focus </span>lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum itaque inventore omnis, nihil officia aut suscipit veniam maxime.</p>
                    <Link to='/' className='uppercase font-coresens text-xs'>Explore</Link>
                    <hr className='w-5 border-t-2 border-primary' />
                </div>
            </div>
        </div>
    );
};

export default MiddleBanner;