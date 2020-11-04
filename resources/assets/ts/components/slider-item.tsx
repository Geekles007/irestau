import React from "react";
import Product from "@/core/models/Product";
import Pricing from "./Pricing";

interface ItemProps {
    item: Product
}

const SliderItem = ({item}: ItemProps) => {
    return (
        <div key={item.id} className="flex w-full justify-center items-center">
            <div className="flex items-center">
                <img src={"./../images/" + item.image} className="w-20" alt="crab"/>
                <div className="flex flex-col items-start ml-3">
                    <span className="text-xl text-black">{item.name}</span>
                    <span className="text-sm text-orange-400">{item.calories} Calories</span>
                </div>
            </div>
            <div className="ml-4">
                <Pricing product={item} />
            </div>
        </div>
    );
}

export default SliderItem;
