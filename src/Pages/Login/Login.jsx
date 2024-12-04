import React from 'react';
import bgImg from "../../assets/images/others/authentication.png"
import img from "../../assets/images/others/authentication2.png"
const Login = () => {
    return (
      <div
        className="bg-cover p-20  flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          className=" w-full border-gray-500 shadow-xl flex flex-col md:flex-row justify-center p-10"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="md:w-1/2">
            <img src={img} alt="" />
          </div>
          <form className="md:w-1/2 space-y-3 ">
            <h1 className="text-center text-xl font-bold">Login</h1>
            <div className="space-y-2">
              <label htmlFor="email">Email</label> <br />
              <input
                className="px-3 py-2 shadow-lg w-full md:w-2/3"
                placeholder="Enter Your Email"
                type="email"
                name="email"
                id=""
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label> <br />
              <input
                className="px-3 py-2 shadow-lg w-full md:w-2/3"
                placeholder="Enter Your Password"
                type="password"
                name="password"
                id=""
              />
            </div>
            <div className="space-y-2">
              <input
                className="px-3 py-2 shadow-lg w-full md:w-2/3"
                placeholder=""
                type="text"
                name="text"
                id=""
              />
            </div>
            <div className="space-y-2">
              <input
                className="px-3 py-2 shadow-lg w-full md:w-2/3"
                placeholder="Type here"
                type="text"
                name="recaptchaText"
                id=""
              />
            </div>
            <input
              className="btn bg-[#DEAB34] w-full md:w-2/3"
              type="submit"
              value="Login"
            />
          </form>
        </div>
      </div>
    );
};

export default Login;