/* eslint-disable no-restricted-globals */
import React from "react";
import { BrowseBtn, FlexCard, FlexParent, Styledbutton } from "./style";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import location from "../../assets/Location.png";

const PopularParts = () => {

  const products = [
    {
      id: 1,
      title: "Engine",
      location: "Clifton Karachi, Pakistan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: f1,
    },
    {
      id: 2,
      title: "Engine",
      location: "Clifton Karachi, Pakistan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: f2,
    },
    {
      id: 3,
      title: "Engine",
      location: "Clifton Karachi, Pakistan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: f3,
    },
  ];

  return (
    <>
      <div className="mx-auto relative">
        <h1 className="md:text-[2.5rem] text-[1.5rem] pt-[40px] font-bold sm:pt-[100px] text-center">
          <span className="text-black">Popular {" "}</span>
          <span className="text-[#FFBA3F]">Parts :</span>
        </h1>
        <div>
          <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
            {products.map((e, index) => (
              <FlexCard key={e.id}>
                <div className="bgyellow">
                  <p>{e.location}</p>
                </div>

                <div className="imgclass">
                  <img src={e.image} alt="f1" />
                </div>
                <div className="justifybtn">
                  <div>
                    <span className="text-sm">
                      <b>{e.title}</b>
                    </span>
                  </div>{" "}
                  <div>
                    <span>
                      <b>$</b> <b className="yellowcolor">46000</b>
                    </span>
                  </div>
                </div>
                <div className="mb-3 sm:text-[0.7rem] text-[0.6rem] text-[#3a3a3a] max-w-[90%] m-auto block leading-6">
                  <p>{e.description}</p>
                </div>
                <div>
                  {" "}
                  <Styledbutton><b>EXPLORE</b></Styledbutton>
                </div>

              </FlexCard>
            ))}
          </div>
        </div>
        <BrowseBtn>BROWSE PARTS</BrowseBtn>
      </div>
    </>
  );
};
export default PopularParts;
