import React from 'react';
import Cover from '../Shared/Cover';
import img from "../../assets/images/menu/banner3.jpg";

const OurMenu = () => {
    const text = "Would you like to try a dish?";
    return (
        <div>
            <Cover img={img} title="Our Menu" text={text}></Cover>
        </div>
    );
};

export default OurMenu;