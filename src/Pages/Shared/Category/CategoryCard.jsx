import React from 'react';

const CategoryCard = ({item}) => {

    return (
      <div className="flex justify-between space-x-3">
        <img
          className="w-24 rounded-r-full rounded-bl-full rounded-b-full"
          src={item.image}
          alt=""
        />
        <div>
          <h1 className="font-bold">{item.name}....................</h1>
          <p>{item.recipe}</p>
        </div>
        <p>${item.price}</p>
      </div>
    );
};

export default CategoryCard;