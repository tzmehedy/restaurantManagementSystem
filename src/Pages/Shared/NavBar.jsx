import { NavLink } from 'react-router';
import { FaShoppingCart } from "react-icons/fa";
import useCarts from '../../Hooks/useCarts';
import useAuth from '../../Hooks/useAuth';
import { toast } from 'react-toastify';

const NavBar = () => {
  const { user, Logout } = useAuth();
  const [carts] = useCarts()
  const handelLogout = () =>{
    Logout()
    .then(data=>{
      toast.success("Successfully Logout")
    })
    .then(error=>toast.error(`${error.message}`))
  }
    const navLinks = (
      <>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/contactUs"}>Contact Us</NavLink>
        </li>
        <li>
          <NavLink to={"/ourMenu"}>Our Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/dashboard"}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to={"/ourShop/salad"}>Our Shop</NavLink>
        </li>
        {user ? (
          <li>
            <button onClick={handelLogout}>Logout</button>
          </li>
        ) : (
          <li>
            <NavLink to={"/login"}>Login</NavLink>
          </li>
        )}
        <li>
          <NavLink
            to={"/dashboard"}
            className="bg-green-600 rounded-full"
          >
            <button className="flex items-center relative">
              <FaShoppingCart className="text-xl"></FaShoppingCart>
              {user ? (
                <div className="-bottom-2  -right-2 text-red-700 font-bold absolute">
                  {carts.length}
                </div>
              ) : (
                <div className="-top-1  -right-1 text-red-700  font-bold absolute">
                  0
                </div>
              )}
            </button>
          </NavLink>
        </li>
      </>
    );
    return (
      <div className="navbar fixed z-30  bg-[#D99904] opacity-80 text-white font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#DDAA33] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl uppercase">Bistro Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    );
};

export default NavBar;