import React from 'react';
import { Link } from 'react-router-dom';
import tabletop2 from '../../images/features-product/tabletop2.png';
import table from '../../images/handcrafted/table.png';

const FeaturedSecondRow = () => {
    return (
        <div className='flex flex-row flex-wrap md:flex-nowrap gap-4 w-full'>
            <div className='flex flex-col gap-4 justify-center items-center bg-info px-4 sm:px-10 pt-10 w-full md:w-5/6 lg:w-4/6 xl:w-3/6 2xl:w-2/6 sm:h-80 max-h-full'>
                <div className='text-center'>
                    <h4 className='uppercase font-coresens text-xs sm:text-sm'>Price <span className='text-primary'>$125.00</span></h4>
                    <h2 className='uppercase font-coresens text-xl sm:text-2xl my-2'>Study Table</h2>
                    <p className='font-kiro text-xs mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, placeat!</p>
                    <Link to='/' className='uppercase font-coresens text-xs sm:text-sm mt-2'>Add To Cart</Link>
                    <hr className='w-10 mx-auto border-t-2 border-primary' />
                </div>

                {/* Background Image Section */}
                <div className="hero h-full bg-no-repeat bg-top bg-cover" style={{ backgroundImage: `url(${table})` }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content w-full p-0 pt-20 pb-5">
                        {/* There were no content over image */}
                    </div>
                </div>
            </div>

            <div className='grow grid grid-cols-2 gap-4 justify-center items-center md:items-start bg-info sm:h-80 max-h-full'>
                <div className='text-start pb-10 pl-4 sm:pl-10 pt-10'>
                    <h4 className='uppercase font-coresens text-xs sm:text-sm'>Price <span className='text-primary'>$125.00</span></h4>
                    <h2 className='uppercase font-coresens text-xl sm:text-2xl my-2'>TableTop Accessory</h2>
                    <p className='font-kiro text-xs mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, inventore!</p>
                    <Link to='/' className='uppercase font-coresens text-xs sm:text-sm mt-2'>Add To Cart</Link>
                    <hr className='w-10 border-t-2 border-primary' />
                </div>

                {/* Background Image Section */}
                <div className="hero h-full bg-no-repeat bg-left-top bg-cover" style={{ backgroundImage: `url(${tabletop2})` }}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content w-full p-0 pt-20 pb-5">
                        {/* There were no content over image */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedSecondRow;