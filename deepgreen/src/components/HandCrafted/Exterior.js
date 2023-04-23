import React from 'react';
import chair from './../../images/handcrafted/chair-flip.png';
import { Link } from 'react-router-dom';

const Exterior = () => {
    return (
        <div className='grid grid-cols-2 gap-4 justify-center items-center md:items-start bg-info pl-4 sm:pl-10 pt-10 w-96 sm:h-80 max-h-full'>
            <div className='text-start pb-10'>
                <h4 className='uppercase font-coresens text-xs sm:text-sm'>From <span className='text-primary'>$125.00</span></h4>
                <h2 className='uppercase font-coresens text-xl sm:text-2xl my-2'>Handcrafted Exterior</h2>
                <p className='font-kiro text-xs mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis libero perferendis odit possimus deserunt?</p>
                <Link to='/' className='uppercase font-coresens text-xs sm:text-sm mt-2'>Explore</Link>
                <hr className='w-10 border-t-2 border-primary' />
            </div>

            {/* Block Image Section */}
            {/* <div className='mx-auto m-0'>
                <img className='max-w-full h-48' src={chair} alt="Chair" />
            </div> */}

            {/* Background Image Section */}
            <div className="hero h-full bg-no-repeat bg-left-bottom bg-cover" style={{ backgroundImage: `url(${chair})` }}>
                <div className="hero-overlay bg-opacity-10"></div>
                <div className="hero-content text-center text-neutral-content w-full p-0 pt-20 pb-5">
                    {/* There were no content over image */}
                </div>
            </div>
        </div>
    );
};

export default Exterior;