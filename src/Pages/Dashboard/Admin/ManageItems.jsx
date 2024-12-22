import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import useMenu from '../../../Hooks/useMenu';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import { Link } from 'react-router';


const ManageItems = () => {
    const [menus, refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handelDelete = (id) => {
        console.log(id)
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then( async (result) => {
          if (result.isConfirmed) {
            const res = await axiosSecure.delete(`/menus/${id}`)
            console.log(res.data)
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }

            
          }
        });

    }
    return (
      <div>
        <TileForHome
          heading="manage all items"
          subHeading="Hurry Up"
        ></TileForHome>

        <div className="bg-slate-300 p-5">
          <h1 className="font-bold text-2xl">Total Items: {menus.length}</h1>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
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
                  {/* row 1 */}

                  {menus?.map((menu, index) => (
                    <tr>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={menu.image} />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>{menu.name}</td>
                      <td>${menu.price}</td>
                      <th className="">
                        <button className="btn btn-ghost text-xl">
                          <Link to={`/dashboard/updateItems/${menu._id}`}>
                            <FaRegEdit></FaRegEdit>
                          </Link>
                        </button>
                        <button
                          onClick={() => handelDelete(menu._id)}
                          className="btn btn-ghost text-xl text-red-600"
                        >
                          <MdDelete></MdDelete>
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

export default ManageItems;