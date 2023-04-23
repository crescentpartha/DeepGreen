import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedFirstRow from './FeaturedFirstRow';
import FeaturedSecondRow from './FeaturedSecondRow';
import FeaturedThirdRow from './FeaturedThirdRow';

const FeaturedProducts = () => {
    return (
        <div className='flex flex-col gap-5 justify-center items-center mx-10 sm:mx-20 md:mx-24 lg:mx-40 2xl:mx-auto my-10 max-w-screen-xl'>
            {/* Intro */}
            <div>
                <p><small className='uppercase text-sm font-kiro'>best handcrafted</small></p>
                <h2 className='uppercase text-lg font-coresens'>Featured Products</h2>
                <hr className='w-full mx-auto border-t my-4' />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facilis explicabo maxime perferendis, nulla sint temporibus itaque vitae ipsam illo.</p>
            </div>

            {/* Body */}
            <div className='flex flex-col gap-4 justify-center items-center mt-5'>
                {/* Featured Product Row One */}
                <FeaturedFirstRow></FeaturedFirstRow>

                {/* Featured Product Row Two */}
                <FeaturedSecondRow></FeaturedSecondRow>

                {/* Featured Product Row Three */}
                <FeaturedThirdRow></FeaturedThirdRow>
            </div>

            <hr className='w-full mx-auto border-t mb-4' />

            {/* Footer */}
            <div className='flex flex-row flex-wrap gap-4 justify-center items-center mb-5'>
                <Link to='/' className='btn btn-outline btn-sm text-xs btn-secondary rounded-none font-coresens'>Get NewsLetter</Link>
                <Link to='/' className='btn btn-primary btn-sm text-xs rounded-none text-neutral font-coresens'>View ALl Product</Link>
            </div>
        </div>
    );
};

export default FeaturedProducts;