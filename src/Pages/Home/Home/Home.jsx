import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnline from '../Order/OrderOnline';
import AboutBistro from '../AboutBistro/AboutBistro';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <div className='max-w-[1024px] mx-auto'>
          <OrderOnline></OrderOnline>
          <AboutBistro></AboutBistro>
        </div>
      </div>
    );
};

export default Home;