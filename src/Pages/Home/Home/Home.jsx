import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../Order/OrderOnline';
import AboutBistro from '../AboutBistro/AboutBistro';
import PopularMenu from '../PopularMenu/PopularMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRcommends/ChefRecommends';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Bistro Boss || Home</title>
        </Helmet>
        <Banner></Banner>
        <div className="max-w-[1024px] mx-auto space-y-20">
          <OrderOnline></OrderOnline>
          <AboutBistro></AboutBistro>
          <PopularMenu></PopularMenu>
          <CallUs></CallUs>
          <ChefRecommends></ChefRecommends>
          <FromOurMenu></FromOurMenu>
          <Testimonials></Testimonials>
        </div>
      </div>
    );
};

export default Home;