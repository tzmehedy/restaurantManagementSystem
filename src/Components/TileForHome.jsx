import React from 'react';

const TileForHome = ({heading, subHeading}) => {
    return (
      <div className="flex flex-col justify-center items-center mb-12">
        <p className="text-[#D99904] font-bold mb-2">---{subHeading}---</p>
        <h1 className="text-4xl  border-b-2 border-t-2 px-10 py-4">
          {heading}
        </h1>
      </div>
    );
};

export default TileForHome;