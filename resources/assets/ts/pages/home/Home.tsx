import React, { useState } from "react";
import Layout from "@/layouts/Layout";
import Pricing from "@/components/Pricing";
import { usePage } from "@inertiajs/inertia-react";

import Product from "@/core/models/Product";
import SliderProducts from "@/components/Slider";

const Home = () => {
    const { best } = usePage<any>().props;

    const [image, setImage] = useState("burger-classic.png");

    const products: Product[] = [
        {
            id: 1,
            name: "Sushis",
            discountPrice: 7.50,
            price: 9.40,
            image: "sushis.png",
            calories: 80
        },
        {
            id: 2,
            name: "Special Crab",
            discountPrice: 8.50,
            price: 10.40,
            image: "crab.png",
            calories: 120
        },
    ]

    return (
        <>
            <div className="flex h-screen">
                <div className="flex flex-col w-1/2 justify-center pl-24 pr-10">
                    <h3 className="text-2xl leading-7">Explosion taste burger <br/> <strong>With special sauce</strong></h3>
                    <p className="my-3 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus praesentium ab autem fugiat quia saepe, deleniti velit molestiae adipisci quidem non eum provident id, blanditiis cum aut, corrupti voluptate sint <strong>Rest</strong> ?</p>
                    <Pricing product={best} />
                </div>
                <div className="flex items-center justify-center w-1/2">
                    <img className="w-full" src={"./../images/" + best.image} alt="burger"/>
                </div>
            </div>
            <div className="flex justify-between absolute bottom-0 p-12 w-full">
                <div className="flex w5-12">
                    <div className="relative flex items-center">
                        <div className="h-24 w-24 border-t-2 border-l-2 border-gray-500 border-dashed rotate-180 rounded-full flex items-center justify-center">
                            <div className="h-20 w-20 rounded-full bg-orange-400 flex justify-center items-center">
                                <img src={"./../images/" + image} className=" h-16 w-16 mr-0" alt="Burger classic"/>
                            </div>
                        </div>
                        <div className="flex flex-col ml-6">
                            <span className="text-lg">Burger Classic</span>
                            <a href="#" className="mt-1 font-semibold flex items-center see_menu">See the menu <img src="./../icons/005-right-arrow.svg" className="h-4 w-4 ml-2 transition-all duration-500" alt="right arrow"/></a>
                        </div>
                    </div>
                </div>
                <SliderProducts products={products} />
            </div>
        </>
    );
};

Home.layout = (page: React.ReactNode) => <Layout noFooter={true} child={page} />;

export default Home;
