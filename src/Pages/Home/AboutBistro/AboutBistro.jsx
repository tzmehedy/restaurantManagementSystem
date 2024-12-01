import React from 'react';
import bgImg from "../../../assets/images/home/chef-service.jpg"

const AboutBistro = () => {
    return (
      <div
        className="h-[400px] bg-no-repeat bg-cover flex justify-center items-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className='m-10 p-10 bg-white text-center space-y-3'>
          <h1 className="uppercase text-2xl font-bold">Bistro Boss</h1>
          <p className=''>
            Holisticly brand cost effective materials before value-added
            services. Completely pursue stand-alone total linkage for corporate
            niche markets. Assertively innovate high-payoff human capital with
            market-driven process improvements. Seamlessly develop business
            synergy rather.
          </p>
        </div>
      </div>
    );
};

export default AboutBistro;