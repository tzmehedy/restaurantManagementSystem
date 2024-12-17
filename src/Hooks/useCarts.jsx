import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const {refetch,data:carts=[]} = useQuery({
        queryKey: ["carts", user?.email],
        queryFn: async()=>{
           const data = await axiosSecure.get(`/carts?email=${user.email}`)
           return data.data
        }
    })
    return [carts,refetch]

};

export default useCarts;