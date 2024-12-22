import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import useCarts from '../../../Hooks/useCarts';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router';

const Carts = () => {
    const [carts,refetch] = useCarts()
    const totalPrice = carts.reduce((total, cart)=> total + cart.price,0)
    const axiosSecure = useAxiosSecure()

    const handelDelete = (_id) =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/carts/${_id}`)
            .then(data=>{
                refetch()
                if(data.data.deletedCount>0){
                    Swal.fire({
                      title: "Deleted!",
                      text: "Your file has been deleted.",
                      icon: "success",
                    });
                }
            })
          }
        });
    }
    return (
      <div className="overflow-x-auto">
        <div>
          <TileForHome
            heading="wanna add more?"
            subHeading="My Cart"
          ></TileForHome>
        </div>

        <div className="bg-slate-100 overflow-x-auto shadow-lg p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <h1 className="text-2xl font-bold">Total Order: {carts.length}</h1>
            <h1 className="text-2xl font-bold">
              Total Price: ${Math.ceil(totalPrice)}
            </h1>
            <button className="btn border-none bg-[#D1A054] font-bold">
              <Link to={"/dashboard/payment"}>Pay</Link>
            </button>
          </div>
          <div className="divider"></div>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>

                  {carts.map((cart, index) => (
                    <tr key={cart._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={cart.image} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{cart.name}</td>
                      <td>${cart.price}</td>
                      <th>
                        <button
                          onClick={()=>handelDelete(cart._id)}
                          className="btn text-xl text-red-700"
                        >
                          <MdDelete />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Carts;