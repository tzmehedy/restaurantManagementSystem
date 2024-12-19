import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import Swal from "sweetalert2";

const Users = () => {
    const axiosSecure = useAxiosSecure()

    const {data: users = [],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const data = await axiosSecure.get("/users");
            return data.data
        }
    })

    const handelUserRole = (_id) =>{
        Swal.fire({
          title: "Are you sure?",
          text: "Set Admin",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes,  Set role as Admin",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.patch(`/users/admin/${_id}`).then((data) => {
              refetch();
              if (data.data.modifiedCount > 0) {
                Swal.fire({
                  title: "Updated!",
                  text: "Updated the role as Admin",
                  icon: "success",
                });
              }
            });
          }
        });

    }

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
            axiosSecure.delete(`/users/${_id}`).then((data) => {
              refetch();
              if (data.data.deletedCount > 0) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            });
          }
        });
    }
    return (
      <div>
        <TileForHome
          heading="Manage all users"
          subHeading="How many??"
        ></TileForHome>

        <div className="bg-slate-100 overflow-x-auto shadow-lg p-5">
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <h1 className="text-2xl font-bold">Total Users: {users.length}</h1>
          </div>
          <div className="divider"></div>

          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}

                  {users.map((user, index) => (
                    <tr key={user._id}>
                      <th>{index + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>
                        {user?.role ? (
                          "admin"
                        ) : (
                          <>
                            <button
                              onClick={()=>handelUserRole(user._id)}
                              className="btn bg-[#CB7B04]"
                            >
                              <FaUser></FaUser>
                            </button>
                          </>
                        )}
                      </td>
                      <td>
                        <button
                          onClick={() => handelDelete(user._id)}
                          className="btn text-xl text-red-700"
                        >
                          <MdDelete />
                        </button>
                      </td>
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

export default Users;