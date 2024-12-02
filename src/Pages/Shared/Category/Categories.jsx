import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5 ms:space-x-5'>
            {
                items.map(item=> <CategoryCard item={item} key={item._id}></CategoryCard>)
            }
        </div>
    );
};

export default Categories;