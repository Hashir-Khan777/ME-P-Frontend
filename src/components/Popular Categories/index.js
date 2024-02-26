import React, { useEffect, useState } from "react";
import { ParentFlex, Parentdiv, StyledCard } from "./style";
import { Key } from "@mui/icons-material";
import HttpClient from "../../services/http-client";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { getEquipments } from "../../store/actions/equipment.action";
import { getRentals } from "../../store/actions/rentals.action";
import { getParts } from "../../store/actions/parts.action";
import location from "../../assets/Location.png";
import cranes from "../../assets/Cranes.png";
import dozers from "../../assets/Dozers.png";
import loaders from "../../assets/Loaders.png";
import motor from "../../assets/Motor Grader.png";
import excavators from "../../assets/Excavators.png";
import roller from "../../assets/Roller Compactor.png";
import {
  Containerdiv,
  FlexCard,
  FlexParent,
  Styledbutton,
} from "../Featured Equipments/style";

const PopularCategories = () => {
  const dispatch = useDispatch();

  const { equipments } = useSelector((state) => state.EquipmentReducer);
  const { rentals } = useSelector((state) => state.RentalReducer);
  const { parts } = useSelector((state) => state.PartReducer);

  console.log(equipments, rentals, parts);

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
      <div className="flex flex-wrap justify-center mt-24 m-auto max-w-[80%]">
        {products.map((e, index) => (
          <div key={e.id} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <FlexParent>
              <FlexCard>
              <img
                style={{ top: 
                  e.name === "Cranes" ? "-7rem" :
                  e.name === "Loaders" ? "-6rem" :
                  e.name === "Dozers" ? "-1rem" : "-4rem"
                }}
                  className="w-[18vw] relative h-auto mx-auto"
                  src={e.image}
                  alt="products"
                />
                <h2 className="text-center mt-2">{e.name}</h2>
              </FlexCard>
            </FlexParent>
          </div>
        ))}
      </div>
    </>
  );
};


export default PopularCategories;
