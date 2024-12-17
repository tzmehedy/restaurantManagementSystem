import React, { useContext, useEffect, useState } from 'react';
import bgImg from "../../assets/images/others/authentication.png"
import img from "../../assets/images/others/authentication2.png"
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from "sweetalert2";
const Login = () => {
  const [active,setActive] = useState(false)
  const {login} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
    const handelLogin = (e) =>{
        e.preventDefault()
        const form = e.target 
        console.log(form)
        const email = form.email.value 
        const password = form.password.value 
        login(email, password)
        .then(result=>{
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "successfully login",
            showConfirmButton: false,
            timer: 1000,
            
          });
          navigate(location.state ? location.state : "/")
        })
        .catch(error=>{
          console.log(error.message)
        })



    }
    useEffect(()=>{
        loadCaptchaEnginge(6)
    },[])

    const getCaptchaText= (e) =>{
        const text = e.target.value
         if (validateCaptcha(text) == true) {
           setActive(!active)
         } else {
           alert("Captcha Does Not Match");
           setActive(!active)
         }
    }
    
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
          <div className="md:w-1/2 space-y-3">
            <form onSubmit={handelLogin} className=" space-y-3">
              <h1 className="text-center text-xl font-bold">Login</h1>
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
                <LoadCanvasTemplate />
              </div>
              <div className="space-y-2">
                <input
                  onBlur={getCaptchaText}
                  className="px-3 py-2 shadow-lg w-full md:w-2/3"
                  placeholder="Type here"
                  type="text"
                  name="recaptchaText"
                />
              </div>
              <input
                className="btn bg-[#DEAB34] w-full md:w-2/3"
                disabled={active === false}
                type="submit"
                value="Login"
              />
            </form>

            <div className="w-full md:w-2/3">
              <p>
                If you have not register please{" "}
                <Link to={"/register"} className="underline text-[#DDAA33] font-bold">
                  register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;