import React, { useState } from 'react';
import Slider from 'react-slick';
import Category from '@/core/models/Category';
import CategoryItem from './CategoryItem';

const categories: Category[] = [
    { id: 1, name: "" },
    { id: 2, name: "" },
    { id: 3, name: "" },
    { id: 4, name: "" },
    { id: 5, name: "" },
    { id: 6, name: "" },
    { id: 7, name: "" },
    { id: 8, name: "" },
    { id: 9, name: "" },
    { id: 10, name: "" },
    { id: 11, name: "" },
];

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer absolute right-0 z-10"
        onClick={onClick}
      ><img src={require("./../assets/icons/002-right-chevron.svg")} className=" w-4" alt="right arrow"/></div>
    );
  }

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
        className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer absolute left-0 z-10"
        onClick={onClick}
        ><img src={require("./../assets/icons/001-left-chevron.svg")} className=" w-4" alt="left arrow"/></div>
    );
}

const ListCategories = () => {

    const [settings, setSettings] = useState({
        dots: true,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 1,
        cssEase: "linear",
        variableWidth: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    });

    return (
        <>
            <div className="w-full p-6 h-20 overflow-hidden">
                <Slider {...settings}>
                    {
                        categories.map((item: Category) => {
                            return (
                                <CategoryItem key={item.id} item={item} />
                            );
                        })
                    }
                </Slider>
            </div>
        </>
    );
}

export default ListCategories;
