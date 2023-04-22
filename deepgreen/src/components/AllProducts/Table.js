import React from 'react';
import useTable from '../../hooks/useTable';
import DisplayProduct from './DisplayProduct';

const Table = () => {
    const [tables] = useTable();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-center items-center mx-10 sm:mx-20 md:mx-24 lg:mx-40 2xl:mx-auto my-10 max-w-screen-xl'>
            {
                tables.map(product => <DisplayProduct
                    key={product.id}
                    product={product}
                ></DisplayProduct>)
            }
        </div>
    );
};

export default Table;