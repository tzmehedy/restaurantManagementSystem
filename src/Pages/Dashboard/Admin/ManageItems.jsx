import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import useMenu from '../../../Hooks/useMenu';
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


const ManageItems = () => {
    const [menus] = useMenu()
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
                      <th>
                        {index+1}
                      </th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={menu.image}
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td>
                        {menu.name}
                      </td>
                      <td>${menu.price}</td>
                      <th className=''>
                        <button className="btn btn-ghost text-xl">
                           <FaRegEdit></FaRegEdit>
                        </button>
                        <button className="btn btn-ghost text-xl text-red-600">
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