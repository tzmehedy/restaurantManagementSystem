import React from 'react';
import Cover from '../Shared/Cover';
import bannerImg from "../../assets/images/menu/banner3.jpg";
import TileForHome from '../../Components/TileForHome';
import Categories from '../Shared/Category/Categories';
import useMenu from '../../Hooks/useMenu';
import dessertBg from "../../assets/images/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/images/menu/pizza-bg.jpg"
import saladBg from "../../assets/images/menu/salad-bg.jpg"
import soupBg from "../../assets/images/menu/soup-bg.jpg"
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

const OurMenu = () => {
    const menus = useMenu()
    const offered = menus.filter(item=> item.category === "offered")
    const pizzas = menus.filter(item=> item.category === "pizza")
    const salads = menus.filter(item=> item.category === "salad")
    const soups = menus.filter(item=> item.category === "soup")
    const desserts = menus.filter(item=> item.category === "dessert")
    const drinks = menus.filter(item=> item.category === "drinks")
   
    return (
      <div className="space-y-20">
        <Helmet>
          <title>Bistro Boss || Menu</title>
        </Helmet>
        <Cover img={bannerImg} title="Our Menu"></Cover>
        <div className="p-5">
          <TileForHome
            heading="today's offer"
            subHeading="don't miss"
          ></TileForHome>
          <Categories items={offered}></Categories>
        </div>
        <div className="space-y-10">
          <Cover img={dessertBg} title="desserts"></Cover>
          <div className="p-5">
            <Categories items={desserts}></Categories>
          </div>
          <div className="text-center">
            <Link to={`/ourShop/dessert`}>
              <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="space-y-10">
          <Cover img={pizzaBg} title="pizza"></Cover>
          <div className="p-5">
            <Categories items={pizzas}></Categories>
          </div>
          <div className="text-center">
            <Link to={`/ourShop/pizza`}>
              <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="space-y-10">
          <Cover img={saladBg} title="salad"></Cover>
          <div className="p-5">
            <Categories items={salads}></Categories>
          </div>
          <div className="text-center">
            <Link to={`/ourShop/salad`}>
              <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                Order Now
              </button>
            </Link>
          </div>
        </div>
        <div className="space-y-10">
          <Cover img={soupBg} title="soup"></Cover>
          <div className="p-5">
            <Categories items={soups}></Categories>
          </div>
          <div className="text-center pb-20">
            <Link to={`/ourShop/soup`}>
              <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default OurMenu;