import React from 'react';
import Pricing from './common/Pricing';
import Product from '@/core/models/Product';

interface BestProps {
    item: Product
}

const Body = ({item}: BestProps) => {
    return (
        <div className="flex h-screen">
            <div className="flex flex-col w-1/2 justify-center pl-24 pr-10">
                <h3 className="text-2xl leading-7">Explosion taste burger <br/> <strong>With special sauce</strong></h3>
                <p className="my-3 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium ab autem fugiat quia saepe, deleniti velit molestiae adipisci quidem non eum provident id, blanditiis cum aut, corrupti voluptate sint <strong>Rest</strong> ?</p>
                <Pricing product={item} />
            </div>
            <div className="flex items-center justify-center w-1/2">
                <img className="w-full" src={"./../images/" + item.image} alt="burger"/>
            </div>
        </div>
    );
}

export default Body;
