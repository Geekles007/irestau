import React from 'react';
import Category from '@/core/models/Category';

interface CategoryProps {
    item: Category
}

const CategoryItem = ({item}: CategoryProps) => {
    return (
        <>
            <a className="flex bg-white items-center justify-center rounded-full px-6 py-3 text-lg font-medium text-center mr-6">
                Pizza yes no or no
            </a>
        </>
    );
}

export default CategoryItem;
