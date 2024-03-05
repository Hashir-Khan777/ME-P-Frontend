/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import imagesData from "../../utils/Images"; // Renamed the imported variable to avoid conflicts
import HttpClient from "../../services/http-client";
import images from "../../utils/Images";
import { useDispatch, useSelector } from "react-redux";
import roller from "../../assets/Roller Compactor.png";
import { useNavigate } from "react-router-dom";
import { getRentals } from "../../store/actions/rentals.action";

const PartsGridView = (props: any) => {
  const { data } = props;
  const navigate = useNavigate();
  const [imageList, setImageList] = useState([]);
  const [visibleImages, setVisibleImages] = useState(4);
  const [startIndex, setStartIndex] = useState(0);
  const [value, setValue] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const handlePageChange = (pageNumber: any) => {
    setCurrentPage(pageNumber);
  };

  const products = [
    {
      id: 1,
      name: "Roller Compactor",
      location: "Karachi, Pakistan",
      price: "PKR 2.500.000",
      image: roller,
    },
    {
      id: 2,
      name: "Loaders",
      location: "Karachi, Pakistan",
      price: "PKR 2.500.000",
      image: roller,
    },
    {
      id: 3,
      name: "Cranes",
      location: "Karachi, Pakistan",
      price: "PKR 2.500.000",
      image: roller,
    },
    {
      id: 4,
      name: "Excavators",
      location: "Karachi, Pakistan",
      price: "PKR 2.500.000",
      image: roller,
    },
  ];
  const { rentals } = useSelector((state: any) => state.RentalReducer);

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
  const handleNavigation = (item: any) => {
    const relatedProduct = data
      .filter((obj: any) => obj.name === item.name)
      .slice(0, 4);
    navigate(`Details/${item._id}`, {
      state: {
        data: item,
        relatedProduct,
      },
    });
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

  // useEffect(() => {
  //   dispatch(getRentals());
  // }, [dispatch]);



  return (
    <div className=" mx-auto relative " style={{ width: "100%" }}>
      <h1 className="sm:text-[2.5rem] text-[1.5rem] pt-[40px] ml-0 text-center font-bold sm:ml-[100px] sm:pt-[100px]">
        <span className="text-black">Vehicles for </span>
        <span className="text-[#FFBA3F]">Rent:</span>
      </h1>

      <div className="flex flex-wrap justify-center mt-12 m-auto max-w-[100%] gap-10 ">
        {currentItems.map((e: any, index: number) => (
          <div
            key={index}
            className="sm:h-[20rem] sm:w-[15rem] h-[16rem] w-[12rem] mb-10  max-w-sm bg-white border border-[#b9b8b9] rounded"
          >
            <a href="#">
              <img
                className="sm:w-[8rem] sm:h-[8rem] w-[6rem] h-[6rem] object-cover m-auto block mt-12"
                src={e.image}
                alt={e.name}
              />
            </a>
            <div className="h-[6rem] relative bg-[#f4f5f7] w-full p-4 sm:top-[2.85rem] rounded top-[0.82rem] leading-3">
              <p className="mb-3 text-[1rem] text-[#3a3a3a] font-semibold">
                {e.name}
              </p>
              <p className="mb-3 text-[0.8rem] font-600 text-gray2">
                {e.location}
              </p>
              <p className="mb-3 text-[0.8rem] text-[#3a3a3a] font-semibold">
                {e.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartsGridView;
