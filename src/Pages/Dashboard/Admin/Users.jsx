import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { MdDelete } from 'react-icons/md';

const Users = () => {
    const axiosSecure = useAxiosSecure()

    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const data = await axiosSecure.get("/users")
            return data.data
        }
    })
    return (
        <div>
            <TileForHome heading="Manage all users" subHeading="How many??"></TileForHome>

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
                                <tr key={user.id}>
                                  <th>{index + 1}</th>
                                  <td>
                                    {user.name}
                                  </td>
                                  <td>{user.email}</td>
                                  <td></td>
                                  <td>
                                    <button
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