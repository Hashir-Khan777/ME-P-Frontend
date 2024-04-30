import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import cranes from "../../assets/Cranes.png";
import dozers from "../../assets/Dozers.png";
import loaders from "../../assets/Loaders.png";
import motor from "../../assets/Motor Grader.png";
import excavators from "../../assets/Excavators.png";
import roller from "../../assets/Roller Compactor.png";

const PopularCategories = () => {
  const dispatch = useDispatch();

  const products = [
    {
      id: 1,
      name: "Roller Compactor",
      image: roller,
    },
    {
      id: 2,
      name: "Loaders",
      image: loaders,
    },
    {
      id: 3,
      name: "Cranes",
      image: cranes,
    },
    {
      id: 4,
      name: "Excavators",
      image: excavators,
    },
    {
      id: 5,
      name: "Dozers",
      image: dozers,
    },
    {
      id: 6,
      name: "Motor Grater",
      image: motor,
    },
  ];

  return (
    <>
      <h1 className="md:text-[2.5rem] text-[1.5rem] mt-[40px] font-bold sm:mt-[8rem] text-center">
        <span className="text-black">Popular</span>{" "}
        <span className="text-[#FFBA3F]">Categories</span>
      </h1>
      <div className="flex flex-wrap justify-center mt-24 m-auto max-w-[80%] gap-12">
        {products.map((e, index) => (
          <div
            key={e.id}
            className="max-w-sm bg-[#F4F4F4] sm:h-[10rem] sm:w-[15rem] h-[8rem] w-[13rem] mb-10"
          >
            <a href="#">
              <img
                className="sm:w-[12rem] sm:h-[12rem] w-[10rem] h-[10rem] object-cover m-auto block relative top-[-4rem]"
                src={e.image}
                alt={e.name}
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 relative top-[-5rem] text-center sm:text-lg text-md">
                {e.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PopularCategories;
