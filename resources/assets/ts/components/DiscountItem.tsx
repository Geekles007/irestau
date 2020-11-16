import React from 'react';

const DiscountItem = () => {
    return (
        <a>
            <div className="h-40 mx-3 shadow-lg hover:shadow-xl transition-all duration-500 rounded-lg overflow-hidden bg-orange-400">
                <img src="./../images/1-min.jpg" className="object-cover" alt="discount 1"/>
            </div>
        </a>
    );
}

export default DiscountItem;
