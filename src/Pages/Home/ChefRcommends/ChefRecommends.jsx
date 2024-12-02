import React from 'react';
import TileForHome from '../../../Components/TileForHome';
import img1 from "../../../assets/images/home/slide2.jpg"
import img2 from "../../../assets/images/home/slide3.jpg"
import img3 from "../../../assets/images/home/slide4.jpg"

const ChefRecommends = () => {
    return (
      <div>
        <TileForHome
          heading="Chef Recommends"
          subHeading="should try"
        ></TileForHome>

        <section className="grid grid-cols-1 md:grid-cols-3 m-5 md:m-0 md:space-x-10 space-y-5 md:space-y-0">
          <div className="card bg-base-100 shadow-xl">
            <figure className="">
              <img
                src={img1}
                alt="Shoes"
                className="rounded-xl max-h-56 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">pizza</h2>
              <p>
                Conveniently incubate premier infrastructures whereas diverse.
              </p>
              <div className="card-actions">
                <button className="btn text-[#BB8506] hover:bg-[#1F2937] border-2 border-b-[#BB8506]">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-xl">
            <figure className="">
              <img
                src={img2}
                alt="Shoes"
                className="rounded-xl max-h-56 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Soup</h2>
              <p>
                Conveniently incubate premier infrastructures whereas diverse.
              </p>
              <div className="card-actions">
                <button className="btn text-[#BB8506] border-2 border-b-[#BB8506] hover:bg-[#1F2937]">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className="card bg-base-100  shadow-xl">
            <figure className="">
              <img
                src={img3}
                alt="Shoes"
                className="rounded-xl max-h-56 w-full"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Desert</h2>
              <p>
                Conveniently incubate premier infrastructures whereas diverse.
              </p>
              <div className="card-actions">
                <button className="btn text-[#BB8506] border-2 border-b-[#BB8506] hover:bg-[#1F2937]">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default ChefRecommends;