import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
      axios("http://localhost:5000/menus").then((data) => {
        setMenus(data.data);
        console.log(data.data);
      });
    }, []);
    console.log(menus)
    return menus
};

export default useMenu;