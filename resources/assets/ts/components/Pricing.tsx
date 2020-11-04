import React from 'react';
import Product from '@/core/models/Product';

interface ProductProps {
     product: Product
}

function Pricing({product}: ProductProps) {
    return (
        <>
            <div className="flex w-full items-center">
                <div className="flex flex-col">
                    <span className="text-gray-600 text-sm line-through">{`$${product.discountPrice.toFixed(2)}`}</span>
                    <span className="text-2xl">{`$${product.price.toFixed(2)}`}</span>
                </div>
                <a href="#" className="rounded-full p-3 items-center bg-black flex text-white ml-5 shadow-lg pr-6">
                    <span className="rounded-full mr-4 bg-orange-400 h-6 w-6 flex justify-center items-center "><img src="./../icons/002-add-to-basket.svg" className="h-3 w-3 object-contain object-center" alt="cart"/></span>
                    Buy Now
                </a>
            </div>
        </>
    );
}

export default Pricing;
