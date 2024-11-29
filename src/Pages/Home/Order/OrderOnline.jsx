import React from 'react';
import "swiper/css";
import "swiper/css/pagination";



import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import img1 from "../../../assets/images/home/slide1.jpg"
import img2 from "../../../assets/images/home/slide2.jpg"
import img3 from "../../../assets/images/home/slide3.jpg"
import img4 from "../../../assets/images/home/slide4.jpg"
import TileForHome from '../../../Components/TileForHome';

const OrderOnline = () => {
    return (
      <div className="my-20">
        <div className="">
          <TileForHome
            heading="Order Online"
            subHeading="From 11 AM to 10 PM"
          ></TileForHome>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" />
            <h1 className="uppercase text-center -mt-16 text-xl text-white">
              Salads
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" />
            <h1 className="uppercase text-center -mt-16 text-xl text-white">
              Pizzas
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" />
            <h1 className="uppercase text-center -mt-16 text-xl text-white">
              Soups
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" />
            <h1 className="uppercase text-center -mt-16 text-xl text-white">
              Deserts
            </h1>
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default OrderOnline;