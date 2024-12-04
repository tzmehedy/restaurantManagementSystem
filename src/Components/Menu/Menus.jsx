import React from 'react';
import MenusCard from './MenusCard';

const Menus = ({items}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
            {
                items.map(item=><MenusCard key={item._id} item={item}></MenusCard>)
            }
        </div>
    );
};

export default Menus;