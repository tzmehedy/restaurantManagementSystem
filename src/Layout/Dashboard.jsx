import React from 'react';
import { FaCalendar, FaHome, FaList, FaShoppingCart, FaUser } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router';
import { FaShop } from "react-icons/fa6";

const Dashboard = () => {
    return (
      <div className="container mx-auto flex flex-col md:flex-row">
        <div className="bg-[#CB7B04] w-full md:w-1/5 h-100vh p-4 menu">
          <ul className="space-y-3">
            <li>
              <NavLink className=" bg-white text-start w-full" to={"/"}>
              <FaUser></FaUser>
                Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink className=" bg-white text-start w-full" to={"carts"}>
                <FaShoppingCart></FaShoppingCart>
                My Carts
              </NavLink>
            </li>
            <li>
              <NavLink className=" bg-white text-start w-full" to={"bookings"}>
                <FaCalendar></FaCalendar>
                Bookings
              </NavLink>
            </li>

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