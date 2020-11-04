import React, { useState } from "react";
import Product from "@/core/models/Product";

import Slider from 'react-slick';
import SliderItem from "./slider-item";

interface ProductProps {
    products: Product[]
}

const SliderProducts = ({products}: ProductProps) => {

    const customeSlider: any = React.createRef();

    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 5000,
        cssEase: "linear",
        pauseOnHover: true
    });

    const goNext = () => {
        customeSlider.current.slickNext();
    }

    const goPrevious = () => {
        customeSlider.current.slickPrev();
    }

    return (
        <div className="flex flex-col w-500 bg-white shadow-md rounded-lg">
            <div className="flex justify-between p-3 w-full border-b border-dashed">
                <span>Discount coupon</span>
                <div className="inline-flex gap-5 text-sm">
                    <a href="#" className="flex items-center transition-all duration-500 hover:text-orange-400" onClick={goPrevious}> <img src="./../icons/004-left-arrow.svg" className="w-4 mr-2" alt="left arrow"/> Prev</a>
                    <a href="#" className="flex items-center transition-all duration-500 hover:text-orange-400" onClick={goNext}>Next <img src="./../icons/005-right-arrow.svg" className="w-4 ml-2" alt="right arrow"/></a>
                </div>
            </div>
            <div className="w-full p-3 h-24 overflow-hidden">
                <Slider {...sliderSettings} ref={customeSlider}>
                    {
                        products.map(item => {
                            return (
                                <SliderItem key={item.id} item={item} />
                            );
                        })
                    }
                </Slider>
            </div>
        </div>
    );
}

export default SliderProducts;
