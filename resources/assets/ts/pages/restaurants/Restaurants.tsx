import React from 'react';

import ContentLoader from 'react-content-loader'

import Layout from '@/layouts/Layout';
import Contact from '@/components/Contact';
import SliderDiscount from '@/components/SliderDiscount';
import Filter from '@/components/common/filter/Filter';
import ListProducts from '@/components/ListProducts/ListCompanies';
import Loader from '@/components/common/Loader';

const RestaurantsPage = () => {
    return (
        <>
            <div className="min-h-screen pt-24 px-12">
                <SliderDiscount />
                <h3 className="font-bold text-5xl my-8">Restaurants</h3>
                <Filter />
                <ListProducts />
            </div>
        </>
    );
}

RestaurantsPage.layout = (page: React.ReactNode) => <Layout noFooter={false} child={page} />;

export default RestaurantsPage;
