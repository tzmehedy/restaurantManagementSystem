import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const MenusCard = ({item}) => {

  const axiosSecure = useAxiosSecure()

  const {user} = useAuth()
  console.log(user)

  const  handelAddToCart = () =>{
    const cartItem = {
      menuID : item._id,
      userEmail: user.email,
      name: item.name,
      price:item.price,
      image: item.image
    }
    axiosSecure.post("/carts", cartItem)
    .then(data=>
    {
      if (data.data.insertedId) {
        toast.success("Item is added in the Add To Cart", {
          autoClose: 500,
        });
      }
    }
    )
  }
    return (
      
        <div className="card bg-base-100 shadow-2xl min-h-96">
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
              <button onClick={handelAddToCart} className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                Add to cart
              </button>
            </div>
          </div>
        </div>
    
    );
};

export default MenusCard;