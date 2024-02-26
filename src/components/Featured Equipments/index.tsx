import React from "react";
import { Default } from "react-toastify/dist/utils";
import { BrowseButton, Containerdiv, FlexCard, FlexParent, Styledbutton } from "./style";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import location from "../../assets/Location.png";
import { data } from "../../pages/Rentals/ProductsData";
import FilterView from "../../pages/Rentals/FilterView";
import FeatureEquipmentProducts from "./FeatureEquipmentProducts";

const FeaturedEqp = () => {


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
    {
      id: 4,
      title: "Engine",
      location: "Clifton Karachi, Pakistan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: f1,
    },
    {
      id: 5,
      title: "Engine",
      location: "Clifton Karachi, Pakistan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: f2,
    },
    {
      id: 6,
      title: "Engine",
      location: "Clifton Karachi, Pakistan",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      image: f3,
    },
  ];

  return (
    <>
      <div className="mx-auto relative bg-[#f6f5f5] h-auto">
        <h1 className="text-[2.5rem] pt-[40px] ml-0 font-bold sm:ml-[100px] sm:pt-[100px] relative left-[3.6rem]">
          <span className="text-black">Featured {" "}</span>
          <span className="text-[#FFBA3F]">Equipments :</span>
        </h1>
          <FeatureEquipmentProducts />
        <div>
          {/* <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
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
                <div className="mb-3 text-[0.7rem] text-[#3a3a3a] max-w-[90%] m-auto block leading-6">
                  <p>{e.description}</p>
                </div>
                <div>
                  {" "}
                  <Styledbutton><b>EXPLORE</b></Styledbutton>
                </div>
              </FlexCard>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
};
export default FeaturedEqp;
