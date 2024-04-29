/* eslint-disable no-restricted-globals */
import React, { useEffect } from "react";
import { BrowseBtn, FlexCard, FlexParent, Styledbutton } from "./style";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import location from "../../assets/Location.png";
import { getParts } from "../../store/actions/parts.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PartCard from "./PartCard";

const PopularParts = () => {
  const { parts } = useSelector((state: any) => state.PartReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getParts());
  }, [dispatch]);

  return (
    <>
      <div className="mx-auto relative">
        <h1 className="md:text-[2.5rem] text-[1.5rem] pt-[40px] font-bold sm:pt-[100px] text-center">
          <span className="text-black">Popular </span>
          <span className="text-[#FFBA3F]">Parts :</span>
        </h1>
        <div>
          <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
            {parts.map((e: any) => (
              <PartCard item={e} />
            ))}
          </div>
        </div>
        <BrowseBtn>BROWSE PARTS</BrowseBtn>
      </div>
    </>
  );
};
export default PopularParts;
