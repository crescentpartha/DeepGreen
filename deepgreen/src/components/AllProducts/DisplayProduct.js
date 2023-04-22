import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

const DisplayProduct = ({ product }) => {
    const { name, price, img, status } = product;
    return (
        <div>
            <div className='flex flex-col gap-1 justify-center items-start bg-info p-4 h-48'>
                <p className={`${status === "new" ? "text-primary" : "text-accent"} text-start uppercase font-coresens text-xs`}>{status}</p>
                <div className='mx-auto m-0'>
                    <img className='max-w-full h-32' src={img} alt={name} />
                </div>
            </div>

            <div className='flex flex-row flex-nowrap gap-2 justify-between items-center mx-3 mt-2'>
                <div className='text-left'>
                    <p className='uppercase text-xs font-kiro font-semibold text-neutral-600'>{name}</p>
                    <p className='text-xs font-kiro font-semibold text-primary'>${price}</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCartShopping} className='text-neutral-300' />
                </div>
            </div>
        </div>
    );
};

export default DisplayProduct;