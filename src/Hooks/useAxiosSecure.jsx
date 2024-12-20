import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router';


const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
  const { Logout } = useAuth();
  const navigate = useNavigate();

    axiosSecure.interceptors.request.use(function(config){
      config.headers.authorization = `${localStorage.getItem("Access-Token")}`
      return config
    },function (error) {
    // Do something with request error
    return Promise.reject(error)})
    
    axiosSecure.interceptors.response.use(function(config){
      return config 
    }, function(err){
      const status = err.response.status 
      if(status === 401 || status === 403){
        Logout()
        navigate("/login",{replace:true})
      }
      return Promise.reject(err)
    })
    return axiosSecure
};
export default useAxiosSecure;