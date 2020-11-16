import React from 'react';
import Slider, {Settings} from 'react-slick';
import DiscountItem from './DiscountItem';

function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
      <div
        className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer absolute right-0 z-10 vertical-center"
        onClick={onClick}
      ><img src={require("./../assets/icons/002-right-chevron.svg")} className=" w-4" alt="right arrow"/></div>
    );
  }

function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
        className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer absolute left-0 z-10 vertical-center"
        onClick={onClick}
        ><img src={require("./../assets/icons/001-left-chevron.svg")} className=" w-4" alt="left arrow"/></div>
    );
}


const SliderDiscount = () => {
    const settings: Settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

    };
    return (
        <>
            <div className="w-full mt-6 mb-6">
                <Slider {...settings}>
                    {
                        [1,2,3,4,5,6,7,8,9].map(item => {
                            return (
                                <DiscountItem key={item} />
                            );
                        })
                    }
                </Slider>
            </div>
        </>
    );
}

export default SliderDiscount;
