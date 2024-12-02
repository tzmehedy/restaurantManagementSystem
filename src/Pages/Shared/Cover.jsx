import React from 'react';
const Cover = ({img, title, text}) => {
    return (
      <div
        className="w-full bg-cover bg-no-repeat h-[500px] bg-fixed flex justify-center items-center "
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="text-white bg-black bg-opacity-60 py-10 px-20 md:py-20 md:px-40 text-center space-y-3">
          <h1 className="text-5xl">{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    );
};

export default Cover;