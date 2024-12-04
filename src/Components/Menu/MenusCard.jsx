import React from 'react';

const MenusCard = ({item}) => {
    return (
      
        <div className="card bg-base-100 shadow-xl">
          <figure className="">
            <img
              src={item.image}
              alt="Shoes"
              className="rounded-xl max-h-56 w-full"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{item.category}</h2>
            <p>
              {item.recipe}
            </p>
            <div className="card-actions">
              <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
    
    );
};

export default MenusCard;