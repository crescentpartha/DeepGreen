import React from 'react';
import chair from './../../images/handcrafted/chair.png';
import { Link } from 'react-router-dom';

const Exterior = () => {
    return (
        <div className='grid grid-cols-2 gap-4 justify-center items-center bg-info pl-4 sm:pl-10 py-4 sm:py-10 w-96 sm:h-80 max-h-full'>
            <div className='text-start'>
                <h4 className='uppercase font-coresens text-xs sm:text-sm'>From <span className='text-primary'>$125.00</span></h4>
                <h2 className='uppercase font-coresens text-xl sm:text-2xl my-2'>Handcrafted Exterior</h2>
                <p className='font-kiro text-xs mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis libero perferendis odit possimus deserunt?</p>
                <Link to='/' className='uppercase font-coresens text-xs sm:text-sm mt-2'>Explore</Link>
                <hr className='w-10 border-t-2 border-primary' />
            </div>
            <div className='mx-auto m-0'>
                <img className='max-w-full h-48' src={chair} alt="Chair" />
            </div>
        </div>
    );
};

export default Exterior;