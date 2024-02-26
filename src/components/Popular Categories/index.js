import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEquipments } from "../../store/actions/equipment.action";
import { getRentals } from "../../store/actions/rentals.action";
import { getParts } from "../../store/actions/parts.action";
import cranes from "../../assets/Cranes.png";
import dozers from "../../assets/Dozers.png";
import loaders from "../../assets/Loaders.png";
import motor from "../../assets/Motor Grader.png";
import excavators from "../../assets/Excavators.png";
import roller from "../../assets/Roller Compactor.png";

const PopularCategories = () => {
  const dispatch = useDispatch();

  const { equipments } = useSelector((state) => state.EquipmentReducer);
  const { rentals } = useSelector((state) => state.RentalReducer);
  const { parts } = useSelector((state) => state.PartReducer);

  useEffect(() => {
    dispatch(getEquipments());
    dispatch(getRentals());
    dispatch(getParts());
  }, [dispatch]);

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
      <h1 className="text-[2.5rem] pt-[40px] ml-0 text-center font-bold sm:ml-[100px] sm:pt-[100px]">
        <span className="text-black">Popular</span>{" "}
        <span className="text-[#FFBA3F]">Categories</span>
      </h1>
      <div className="flex flex-wrap justify-center mt-24 m-auto max-w-[80%] gap-12">
        {products.map((e, index) => (
          <div key={e.id} className="max-w-sm bg-[#F4F4F4] h-[20rem] w-[15rem]">
            <a href="#">
              <img
                className="w-[12rem] h-[12rem] object-cover m-auto block"
                src={e.image}
                alt={e.name}
              />
            </a>
            <div className="p-5">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
