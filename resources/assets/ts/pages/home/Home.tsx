import React, { useState } from "react";
import Layout from "@/layouts/Layout";
import Pricing from "@/components/common/Pricing";
import { usePage } from "@inertiajs/inertia-react";

import Product from "@/core/models/Product";
import SliderProducts from "@/components/Slider";
import SeeMenu from "@/components/SeeMenu";
import Body from "@/components/Body";

const Home = () => {
    const { best } = usePage<any>().props;

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

    const menu = {
        id: 1,
        name: "Inter burger",
        products: products,
        company: {
            id: 1,
            name: "King Burger",
            logo: "burger-classic.png"
        }
    };


    return (
        <>
            <Body item={best}/>
            <div className="flex justify-between absolute bottom-0 p-12 w-full">
                <SeeMenu menu={menu}></SeeMenu>
                <SliderProducts products={products} />
            </div>
        </>
    );
};

Home.layout = (page: React.ReactNode) => <Layout noFooter={true} child={page} />;

export default Home;
