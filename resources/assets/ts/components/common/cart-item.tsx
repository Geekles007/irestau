import React from 'react';
import Product from '@/core/models/Product';

interface CartProps {
    list: Product[]
}

const CartItem = ({list}: CartProps) => {

    return (
        <a>
            <div className="flex w-8 relative">
                <img src="./../icons/002-add-to-basket.svg" className="h-6 w-6 object-contain object-center" alt="cart"/>
                {list.length > 0 ? <span className="absolute top-0 right-0 bg-orange-400 text-xs h-5 w-5 flex items-center justify-center translate-y-0 text-white rounded-full font-semibold cart_number">{list.length}</span> : ""}
            </div>
        </a>
    );
}

export default CartItem;
