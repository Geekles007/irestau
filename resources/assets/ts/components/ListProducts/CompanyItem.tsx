import React from 'react';
import { FaStar, FaHourglass, FaTimesCircle, FaClock } from 'react-icons/fa';
import Company from '@/core/models/Company';

import moment from 'moment';

interface IRestraurantProps {
    data: Company
}

const CompanyItem = ({data}: IRestraurantProps) => {
    return (
        <>
            <a className="product__item flex h-56 shadow-lg hover:shadow-xl transition-all duration-300 bg-white overflow-hidden rounded-xl relative">
                <div className="inline-flex gap-3 p-3 absolute top-0 left-0 right-0 justify-end z-10">
                    <div className="inline-flex gap-x-2 bg-orange-100 items-center  py-1 px-3 rounded-full">
                        <img src="./../icons/001-shipping.svg" className="w-4 h-4 object-center object-contain" alt="shipping"/>
                        <span className="text-orange-400 font-semiboldt text-xs font-semibold">{data.deliveryTime}</span>
                    </div>
                    <div className="flex items-center gap-x-2 rounded-full bg-white py-1 px-3 text-xs">
                        <FaStar className="text-orange-400" />
                        {data.rate}
                    </div>
                </div>
                <div className="inline-flex items-center gap-3 w-full absolute z-10 left-0 bottom-0 right-0 p-3">
                    <div className="flex items-center justify-center rounded-lg bg-white p-2 h-12 w-12">
                        <img src={"./../images/" + data.logo} alt="mcdonalds" className="object-contain object-center"/>
                    </div>
                    <div className="w-10/12 font-semibold h-12 bg-white flex items-center px-3 rounded-lg">
                        <span>{data.name}</span>
                    </div>
                </div>
                <img src={"./../images/" + data.cover} alt="fast food" className={"absolute z-0 left-0 right-0 bottom-0 top-0 object-cover object-center h-full w-full " + (data.isClosed ? "closed" : "")}/>
                <div className="flex flex-col text-base absolute bottom-0 left-0 right-0 top-0 bg-white p-4 z-30 product__item-details">
                    <p>{data.description}</p>
                    <div className="inline-flex gap-x-2 absolute bottom-0 right-0 mr-3 mb-3 bg-red-100 items-center  py-1 px-3 rounded-full">
                        <FaClock className="text-red-400" />
    <span className="text-red-400 font-semiboldt text-xs font-semibold">Closed at { data.closedAt }</span>
                    </div>
                </div>
            </a>
        </>
    );
}

export default CompanyItem;
