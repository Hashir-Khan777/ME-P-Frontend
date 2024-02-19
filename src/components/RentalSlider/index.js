import React, { useState, useEffect } from "react";
import imagesData from "../../utils/Images"; // Renamed the imported variable to avoid conflicts
import HttpClient from "../../services/http-client";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import { getRentals } from "../../store/actions/rentals.action";

const RentalSlider = () => {
  const [imageList, setImageList] = useState([]);
  const [visibleImages, setVisibleImages] = useState(4);
  const [startIndex, setStartIndex] = useState(0);

  const { rentals } = useSelector((state) => state.RentalReducer);

  const dispatch = useDispatch();

  const getAllRental = async () => {
    try {
      const response = await HttpClient.get("/api/rental/");
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
    <div className=" mx-auto relative " style={{ width: "95%" }}>
      <div className="text-center text-4xl font-bold mb-10">
        Vehicles for <span className="text-yellow">Rent:</span>
      </div>
      <div
        className="flex flex-row gap-4 overflow-hidden  mx-auto"
        style={{ width: "95%" }}
      >
        {rentals?.length > 0 &&
          rentals
            .slice(startIndex, startIndex + visibleImages)
            .map((item, index) => (
              <div
                key={index}
                className={`w-full border-2 border-gray ${
                  visibleImages === 4
                    ? "xl:w-1/8"
                    : visibleImages === 3
                    ? "lg:w-1/6"
                    : visibleImages === 2
                    ? "md:w-1/4"
                    : "sm:w-1/2"
                }`}
              >
                <img
                  src={images.RollerCompactor}
                  alt={`Image ${index + startIndex + 1}`}
                  className="w-full h-52 "
                />
                <div className="bg-gray">
                  <div className="pl-3 pt-2 font-semibold">
                    {item.rental_name}
                  </div>
                  <div className="pl-3 text-xs  text-gray2">
                    {item.location}
                  </div>
                  <div className="pl-3 font-semibold pb-3">{`PKR ${item.price}`}</div>
                </div>
              </div>
            ))}
      </div>

      <div className="flex justify-center mt-4">
        <img
          onClick={handlePrevious}
          src={images.left}
          className="mr-4 w-14 absolute cursor-pointer active:opacity-50"
          style={{ bottom: "40%", left: "-20px" }}
        />
        <img
          onClick={handleNext}
          src={images.right}
          className="mr-4 w-14 absolute cursor-pointer active:opacity-50"
          style={{ bottom: "40%", right: "-35px" }}
        />
      </div>
    </div>
  );
};

export default RentalSlider;
