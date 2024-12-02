import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import { FaQuoteLeft } from "react-icons/fa";

import "@smastrom/react-rating/style.css";

import "swiper/css";
import "swiper/css/navigation";
import TileForHome from '../../../Components/TileForHome';


const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([])

    useEffect(()=>{
        axios("reviews.json")
        .then(data=>setTestimonials(data.data))

    },[])
    console.log(testimonials)
    return (
      <div>
        <TileForHome
          heading="testimonials"
          subHeading="what our client say"
        ></TileForHome>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {testimonials.map((testimonial) => (
            <SwiperSlide>
              <div className="text-center space-y-10">
                <div className="flex justify-center">
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={testimonial.rating}
                    readOnly
                  />
                </div>
                <div className='flex justify-center text-5xl '>
                  <FaQuoteLeft />
                </div>

                <p>{testimonial.details}</p>
                <h1 className="text-2xl text-[#CD9003] font-bold">
                  {testimonial.name}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default Testimonials;