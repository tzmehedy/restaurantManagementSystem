import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import bgImg from "../../../assets/images/home/featured.jpg"

const FromOurMenu = () => {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return (
      <div
        className="bg-cover bg-opacity-80 bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="bg-gradient-to-r from-black to-gray-400 opacity-90 p-20">
          <TileForHome
            heading="From Our Menu"
            subHeading="check it out"
          ></TileForHome>

          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="md:w-1/2">
              <img src={bgImg} className="w-full h-[200px]" alt="" />
            </div>
            <div className="text-white md:w-1/2 space-y-2">
              <p>{formattedDate}</p>
              <h1 className="text-2xl uppercase font-bold">
                Where can i get some?
              </h1>
              <p>
                Progressively synthesize adaptive channels after market
                positioning quality vectors. Completely empower robust
                outsourcing after an expanded array of mindshare.
              </p>
              <button className='btn bg-gray-500 border-2 border-b-gray-800 border-l-0 border-t-0 border-r-0 text-white'>Read More</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default FromOurMenu;