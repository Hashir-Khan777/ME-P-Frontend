import React, { useEffect, useState } from "react";
import { Parentdiv, ProductCard } from "./style";
import roller from "../../assets/Roller Compactor.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import forward from "../../assets/Forward Button.png";
import backward from "../../assets/Go Back.png";
import HttpClient from "../../services/http-client";
const CustomCarousel = () => {
  const [allRental, setAllRental] = useState<any[]>([]);
  interface SampleNextArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
  interface SamplePrevArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
  }
  useEffect(() => {
    getAllRental();
  }, []);
  const getAllRental = async () => {
    try {
      const response = await HttpClient.get("api/rental/");
      setAllRental(response.data.rentals);
      // const categoriesForSet = response?.data?.categories.slice(0, 6);
      // console.log("categoriesForSet=-=--==", categoriesForSet);
    } catch (error) {
      console.log("allCategory-=-=-=-=error", error);
    }
  };
  const SampleNextArrow: React.FC<SampleNextArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ display: "block", width: "50px", height: "40px" }}
        onClick={onClick}
        src={forward}
        alt="forward"
      />
    );
  };

  const SamplePrevArrow: React.FC<SamplePrevArrowProps> = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        className={className}
        style={{ display: "block", width: "50px", height: "40px" }}
        onClick={onClick}
        src={backward}
        alt="backward"
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 801 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <Parentdiv>
        <h1>
          <span className="styledblack">Vehicles for</span>{" "}
          <span className="styledYellow">Rent:</span>
        </h1>

        <Slider {...settings}>
          {allRental?.map((item, index) => {
            console.log(allRental.length);

            return (
              <div>{item._id}</div>
              // <ProductCard>
              //   {/* <div>
              //     <img src={roller} alt="roller" />
              //   </div> */}
              //   <div className="bgGrey">
              //     {/* <p style={{ fontWeight: "600" }}>Roller Compactor</p>
              //     <small>Karachi, Pakistan</small> */}
              //     <p style={{ fontWeight: "600" }}>{item._id}</p>
              //   </div>
              // </ProductCard>
            );
          })}
          {/* {[...Array(10)].map((item) => {
            console.log(item);

            return (
              <ProductCard>
                <div>
                  <img src={roller} alt="roller" />
                </div>
                <div className="bgGrey">
                  <p style={{ fontWeight: "600" }}>Roller Compactor</p>
                  <small>Karachi, Pakistan</small>
                  <p style={{ fontWeight: "600" }}>PKR 2.500.000</p>
                </div>
              </ProductCard>
            );
          })} */}
        </Slider>
      </Parentdiv>
    </>
  );
};

export default CustomCarousel;
