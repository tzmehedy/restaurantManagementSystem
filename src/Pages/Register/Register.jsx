import React, { useContext } from 'react';
import bgImg from "../../assets/images/others/authentication.png";
import img from "../../assets/images/others/authentication2.png";
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
  const {createUser} = useContext(AuthContext)
  const navigate = useNavigate()

    const handelRegister = (e) =>{
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const email = form.email.value 
        const password = form.password.value 
        const photoURL = form.photoURL.value 

        createUser(email,password)
        .then(result=>{
          toast.success("Register Successfully Completed")
          navigate("/")
        })
        .catch(error=>{
          console.log(error.message)
        })

    }
    return (
      <div
        className="bg-cover p-20  flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div
          className=" w-full border-gray-500 shadow-xl flex flex-col md:flex-row-reverse justify-center p-10"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="md:w-1/2">
            <img src={img} alt="" />
          </div>
          <div className="md:w-1/2 space-y-3">
            <form onSubmit={handelRegister} className=" space-y-3">
              <h1 className="text-center text-xl font-bold">Sign Up</h1>
              <div className="space-y-2">
                <label htmlFor="name">Name</label> <br />
                <input
                  className="px-3 py-2 shadow-lg w-full md:w-2/3"
                  placeholder="Enter Your Name"
                  type="text"
                  name="name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email">Email</label> <br />
                <input
                  className="px-3 py-2 shadow-lg w-full md:w-2/3"
                  placeholder="Enter Your Email"
                  type="email"
                  name="email"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="password">Password</label> <br />
                <input
                  className="px-3 py-2 shadow-lg w-full md:w-2/3"
                  placeholder="Enter Your Password"
                  type="password"
                  name="password"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="photoURL">Photo URL</label> <br />
                <input
                  className="px-3 py-2 shadow-lg w-full md:w-2/3"
                  placeholder="Enter Your Photo URL"
                  type="text"
                  name="photoURL"
                />
              </div>
              
             
              <input
                className="btn bg-[#DEAB34] w-full md:w-2/3"
                type="submit"
                value="Register"
              />
            </form>

            <div className="w-full md:w-2/3">
              <p>
                If you are register please{" "}
                <Link
                  to={"/login"}
                  className="underline text-[#DDAA33] font-bold"
                >
                  login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;