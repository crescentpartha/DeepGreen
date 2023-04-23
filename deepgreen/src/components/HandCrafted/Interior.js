import React from 'react';
import table from './../../images/handcrafted/table.png';
import { Link } from 'react-router-dom';

const Interior = () => {
    return (
        <div className='flex flex-col gap-4 justify-center items-center bg-neutral px-4 sm:px-10 pt-4 sm:pt-10 w-96 sm:h-80 max-h-full'>
            <div className='text-center'>
                <h4 className='uppercase font-coresens text-xs sm:text-sm'>From <span className='text-accent'>$125.00</span></h4>
                <h2 className='uppercase font-coresens text-xl sm:text-2xl my-2'>Handcrafted Interior</h2>
                <p className='font-kiro text-xs mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi debitis libero perferendis odit possimus deserunt?</p>
                <Link to='/' className='uppercase font-coresens text-xs sm:text-sm mt-2'>Explore</Link>
                <hr className='w-10 mx-auto border-t-2 border-accent' />
            </div>
            <div className='mx-auto m-0'>
                <img className='max-w-full h-32' src={table} alt="Table" />
            </div>
        </div>
    );
};

export default Interior;