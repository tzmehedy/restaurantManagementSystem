import React from 'react';

const PopularSectionCard = ({popularMenu}) => {
    const {name, image, recipe, price} = popularMenu
    return (
        <div className='flex justify-between space-x-3'>
            <img className='w-24 rounded-r-full rounded-bl-full rounded-b-full' src={image} alt="" />

            <div>
                <h1 className='font-bold'>{name}....................</h1>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>

        </div>
    );
};

export default PopularSectionCard;