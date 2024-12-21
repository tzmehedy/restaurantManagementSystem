import axios from "axios";
import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
  const axiosPublic = useAxiosPublic()
    // const [menus, setMenus] = useState([]);
    // useEffect(() => {
    //    axios("http://localhost:5000/menus").then((data) => {
    //     setMenus(data.data);
    //   });
    // }, []);
    // return menus

    const {data:menus=[]} = useQuery({
      queryKey: ['menus'],
      queryFn: async()=>{
        const res =  await axiosPublic.get("/menus")
        console.log(res.data)
        return res.data
      }
    })
     console.log(menus);
    return [menus]
};

export default useMenu;