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

    const {data:menus=[], refetch} = useQuery({
      queryKey: ['menus'],
      queryFn: async()=>{
        const res =  await axiosPublic.get("/menus")
        return res.data
      }
    })
    return [menus, refetch]
};

export default useMenu;