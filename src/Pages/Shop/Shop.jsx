import React, { useState } from 'react';
import Cover from '../Shared/Cover';
import bannerImg from "../../assets/images/shop/banner2.jpg"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { Helmet } from 'react-helmet-async';
import useMenu from '../../Hooks/useMenu';
import Menus from '../../Components/Menu/Menus';
import { useParams } from 'react-router';

const Shop = () => {
    const [menus] = useMenu()
    const categories = ["salad","pizza","soup", "dessert", "drinks"]
    const category = useParams()
    const index = categories.indexOf(category.category)
    const pizzas = menus.filter((item) => item.category === "pizza");
    const salads = menus.filter((item) => item.category === "salad");
    const soups = menus.filter((item) => item.category === "soup");
    const desserts = menus.filter((item) => item.category === "dessert");
    const drinks = menus.filter((item) => item.category === "drinks");

    const [tabIndex, setTabIndex] = useState(index);
    return (
      <div>
        <Helmet>
          <title>Bistro Boss || Our Shop</title>
        </Helmet>
        <Cover img={bannerImg} title="Our Shop"></Cover>
        <div className="text-center mt-20">
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Soups</Tab>
              <Tab>Deserts</Tab>
              <Tab>Drinks</Tab>
            </TabList>

            <TabPanel>
              <Menus items={salads}></Menus>
            </TabPanel>
            <TabPanel>
              <Menus items={pizzas}></Menus>
            </TabPanel>
            <TabPanel>
              <Menus items={soups}></Menus>
            </TabPanel>
            <TabPanel>
              <Menus items={desserts}></Menus>
            </TabPanel>
            <TabPanel>
              <Menus items={drinks}></Menus>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
};

export default Shop;