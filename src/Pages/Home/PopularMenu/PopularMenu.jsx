import React, { useEffect, useState } from 'react';
import TileForHome from '../../../Components/TileForHome';
import axios from "axios"
import PopularSectionCard from './PopularSectionCard';

const PopularMenu = () => {
  const [popularMenus, setPopularMenus] = useState([])

  useEffect(()=>{
    axios("menu.json").then((data) => {
      const popularMenus = data.data.filter(p=>p.category === "popular") 
      setPopularMenus(popularMenus)
    })
  },[])
  console.log(popularMenus)
    return (
      <div className="">
        <TileForHome
          heading="From Our Menu"
          subHeading="Check it Out"
        ></TileForHome>

        <section className='grid grid-cols-1 md:grid-cols-2 gap-5'>
          {popularMenus.map((popularMenu) => (
            <PopularSectionCard popularMenu={popularMenu}></PopularSectionCard>
          ))}
        </section>
      </div>
    );
};

export default PopularMenu;