import React from 'react';
import { Outlet } from 'react-router';
import CustomLink from './CustomLink';

const Home = () => {
    return (
        <div className='mb-20 mt-12'>
            <div>
                <nav className='flex flex-row flex-wrap gap-3 justify-center items-center uppercase text-sm font-kiro py-2'>
                    <CustomLink className='hover:border-b-4 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='/'>All Products</CustomLink>
                    <CustomLink className='hover:border-b-4 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='table'>Table</CustomLink>
                    <CustomLink className='hover:border-b-4 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='chair'>Chair</CustomLink>
                    <CustomLink className='hover:border-b-4 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='sofa'>Sofa</CustomLink>
                    <CustomLink className='hover:border-b-4 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='decoration'>Decoration</CustomLink>
                    <CustomLink className='hover:border-b-4 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='other'>Other</CustomLink>
                </nav>
                <hr className='max-w-lg sm:w-96 w-full mx-auto border-t-2' />
                <p className='p-4 max-w-screen-md mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illum non reprehenderit dicta qui rem maxime corporis quasi dolorum blanditiis.</p>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;