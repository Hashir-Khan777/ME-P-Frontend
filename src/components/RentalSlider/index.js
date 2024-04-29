/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import imagesData from "../../utils/Images"; // Renamed the imported variable to avoid conflicts
import HttpClient from "../../services/http-client";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { getRentals } from "../../store/actions/rentals.action";
import roller from "../../assets/Roller Compactor.png";
import { Link } from "react-router-dom";
import RentalCard from "./RentalCard";

const RentalSlider = () => {
  const [imageList, setImageList] = useState([]);
  const [visibleImages, setVisibleImages] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const { rentals } = useSelector((state) => state.RentalReducer);

  const dispatch = useDispatch();

  const getAllRental = async () => {
    try {
      const response = await HttpClient.get("/rental/");
      console.log("rental res=--==-=-=-", response.data.rentals.length);
      setImageList(response.data.rentals);
    } catch (error) {
      console.log("rental error-=-=-=-=error", error);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleImages < imageList.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setVisibleImages(4);
        getAllRental();
      } else if (window.innerWidth >= 1024) {
        setVisibleImages(3);
        getAllRental();
      } else if (window.innerWidth >= 768) {
        setVisibleImages(2);
        getAllRental();
      } else {
        setVisibleImages(1);
        getAllRental();
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(getRentals());
  }, [dispatch]);

  return (
    <div className=" mx-auto relative " style={{ width: "100%" }}>
      <h1 className="sm:text-[2.5rem] text-[1.5rem] pt-[40px] ml-0 text-center font-bold sm:ml-[100px] sm:pt-[100px]">
        <span className="text-black">Vehicles for </span>
        <span className="text-[#FFBA3F]">Rent:</span>
      </h1>

      <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
        {rentals.map((e) => (
          <RentalCard item={e} />
        ))}
      </div>

      <div className="justify-center mt-4 sm:flex hidden">
        <img
          onClick={handlePrevious}
          src={images.left}
          className="mr-4 w-14 absolute cursor-pointer active:opacity-50"
          style={{ bottom: "30%", left: "2rem" }}
        />
        <img
          onClick={handleNext}
          src={images.right}
          className="mr-4 w-14 absolute cursor-pointer active:opacity-50"
          style={{ bottom: "30%", right: "2rem" }}
        />
      </div>
    </div>
  );
};

export default RentalSlider;
