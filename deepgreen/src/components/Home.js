import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mb-20 mt-12'>
            <div>
                <nav className='flex flex-row flex-wrap gap-3 justify-center items-center uppercase text-sm font-kiro'>
                    <Link className='hover:border-b-2 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='/'>All Products</Link>
                    <Link className='hover:border-b-2 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='table'>Table</Link>
                    <Link className='hover:border-b-2 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='chair'>Chair</Link>
                    <Link className='hover:border-b-2 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='sofa'>Sofa</Link>
                    <Link className='hover:border-b-2 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='decoration'>Decoration</Link>
                    <Link className='hover:border-b-2 hover:border-primary border-b-2 border-white sm:py-2 py-1' to='other'>Other</Link>
                </nav>
                <hr className='sm:w-96 w-full mx-auto' />
                <p className='p-4 max-w-screen-md mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illum non reprehenderit dicta qui rem maxime corporis quasi dolorum blanditiis.</p>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;