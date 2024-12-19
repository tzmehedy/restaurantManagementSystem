import axios from 'axios';


const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});
const useAxiosSecure = () => {
    axiosSecure.interceptors.request.use(function(config){
      config.headers.authorization = `${localStorage.getItem("Access-Token")}`
      return config
    })
    return axiosSecure
};
export default useAxiosSecure;