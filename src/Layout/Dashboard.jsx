import React from 'react';
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router';
import { FaShop } from "react-icons/fa6";
import useCarts from '../Hooks/useCarts';
import { ImSpoonKnife } from "react-icons/im";

const Dashboard = () => {
    const [carts] = useCarts()
    const isAdmin = true
    return (
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="bg-[#CB7B04] w-full md:w-1/5 h-screen p-4 menu">
          <ul className="space-y-3">
            {isAdmin ? (
              <>
                <li>
                  <NavLink className=" bg-white text-start w-full" to={"/"}>
                    <FaUser></FaUser>
                    Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" bg-white text-start w-full"
                    to={"/dashboard/addItems"}
                  >
                    <ImSpoonKnife></ImSpoonKnife>
                    Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" bg-white text-start w-full"
                    to={"/dashboard/bookings"}
                  >
                    <FaCalendar></FaCalendar>
                    Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" bg-white text-start w-full"
                    to={"/dashboard/users"}
                  >
                    <FaUser></FaUser>
                    All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink className=" bg-white text-start w-full" to={"/"}>
                    <FaUser></FaUser>
                    User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" bg-white text-start w-full"
                    to={"/dashboard/carts"}
                  >
                    <FaShoppingCart></FaShoppingCart>
                    My Carts ({carts.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className=" bg-white text-start w-full"
                    to={"/dashboard/bookings"}
                  >
                    <FaCalendar></FaCalendar>
                    Bookings
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink className=" bg-white text-start w-full" to={"/"}>
                <FaHome></FaHome>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className=" bg-white text-start w-full" to={"/ourMenu"}>
                <FaList></FaList>
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                className=" bg-white text-start w-full"
                to={"/ourShop/salad"}
              >
                <FaShop />
                Our Shop
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex-1 p-8">
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default Dashboard;