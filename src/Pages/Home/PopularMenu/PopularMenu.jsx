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
      <div className="space-y-10">
        <TileForHome
          heading="From Our Menu"
          subHeading="Check it Out"
        ></TileForHome>

        <section className='grid grid-cols-1 md:grid-cols-2 m-5 md:m-0 gap-5'>
          {popularMenus.map((popularMenu) => (
            <PopularSectionCard popularMenu={popularMenu}></PopularSectionCard>
          ))}
        </section>

        <div className='text-center'>
          <button className='btn font-bold border-l-0 border-t-0 border-r-0 border-b-2 border-gray-700'>View Full Menu</button>
        </div>
      </div>
    );
};

export default PopularMenu;