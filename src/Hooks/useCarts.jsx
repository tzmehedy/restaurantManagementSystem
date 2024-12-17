import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCarts = () => {
    const axiosSecure = useAxiosSecure()
    const {data:carts=[]} = useQuery({
        queryKey: ["carts"],
        queryFn: async()=>{
           const data = await axiosSecure.get("/carts")
           return data.data
        }
    })
    return [carts]

};

export default useCarts;