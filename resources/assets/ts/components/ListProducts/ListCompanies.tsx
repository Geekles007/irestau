import React, { useState } from 'react';
import CompanyItem from './CompanyItem';
import Company from '@/core/models/Company';

const ListCompanies = () => {

    const [list, setList] = useState<Company[]>([
        {
            id: 1,
            name: 'McDonalds',
            cover: "fastfood.jpg",
            logo: "mcdonalds.svg",
            deliveryTime: "30 - 45min",
            rate: 2.3,
            isClosed: false,
            closedAt: "9pm",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolorum rem natus veritatis repellendus sapiente ipsa! Asperiores illum fugiat"
        },
        {
            id: 2,
            name: 'Shawars',
            cover: "shawarma.jpg",
            logo: "mcdonalds.svg",
            deliveryTime: "20 - 45min",
            rate: 4.3,
            isClosed: true,
            closedAt: "10pm",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolorum rem natus veritatis repellendus sapiente ipsa! Asperiores illum fugiat"
        },
        {
            id: 3,
            name: 'Lee\'s food',
            cover: "sushis.jpg",
            logo: "mcdonalds.svg",
            deliveryTime: "30 - 45min",
            rate: 2.9,
            isClosed: false,
            closedAt: "7pm",
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dolorum rem natus veritatis repellendus sapiente ipsa! Asperiores illum fugiat"
        },
    ]);

    return (
        <div className="my-10 z-0">
            <div className="grid grid-cols-3 gap-6">
                {
                    list.map(item => {
                        return (
                            <CompanyItem data={item} key={item.id} />
                        );
                    })
                }
            </div>
        </div>
    );
}

export default ListCompanies;
