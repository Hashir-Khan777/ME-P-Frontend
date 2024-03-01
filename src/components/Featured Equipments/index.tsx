import React from "react";
import FeatureEquipmentProducts from "./FeatureEquipmentProducts";

const FeaturedEqp = () => {
  return (
    <>
      <div className="mx-auto relative bg-[#f6f5f5] h-auto pb-[1rem] ">
        <h1 className="md:text-[2.5rem] text-[1.5rem] pt-[40px] font-bold sm:pt-[100px] text-center">
        <span className="text-black">Featured {" "}</span>
          <span className="text-[#FFBA3F]">Equipments :</span>
        </h1>
          <FeatureEquipmentProducts />
        <div>
        </div>
      </div>
    </>
  );
};
export default FeaturedEqp;
