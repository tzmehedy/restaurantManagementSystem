import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
    const [menus, setMenus] = useState([]);
    useEffect(() => {
      axios("menu.json").then((data) => {
        setMenus(data.data)
      });
    }, []);
    console.log(menus)
    return menus
};

export default useMenu;