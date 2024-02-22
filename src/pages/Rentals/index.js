/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import images from "../../utils/Images";
import styles from "./style.module.css";
import { Slider } from "@mui/material";
import UserPagination from "../../components/UserPagination";
import { useNavigate } from "react-router-dom";
const Rentals = () => {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Caterpillar",
      name: "3 Ton Excavator",
      location: "Clifton Karachi, Pakistan",
      price: "9,600,000",
      Model: "325LN",
      Condition: "Used",
      SKU: "48678",
      Year: "2015",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod sed do eiusmod.",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
        contact: "+92312846700",
        email: "syedahsan235@gmail.com",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.f1, images.f2, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 3,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 2,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
  ]);
  const [value, setValue] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNavigation = (item) => {
    const relatedProduct = data
      .filter((obj) => obj.name === item.name)
      .slice(0, 4);
    navigate(`details/${item._id}`, {
      state: {
        data: item,
        relatedProduct,
      },
    });
  };

  console.log(value);
  return (
    <>
      <div className="w-full">
        <div className="w-full bg-[#F4F4F4] flex flex-col justify-center items-center h-[16rem]">
          <div className="text-[#807D7E] font-500 text-[0.7rem] items-center tracking-[2px]">{`HOME > RENTALS`}</div>
          <div className="text-[#000] font-700 text-[2rem] items-center mt-2 font-bold mb-2">
            Rentals
          </div>
          <div className="text-[#6D6E76] font-500 text-sm items-center w-[40%] my-0 mx-auto mt-2 justify-center text-center leading-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
        </div>
        <div className="py-0 px-[3%]">
          <div className="w-full flex flex-row pt-10">
            {showFilter ? (
              <div className="w-[25%] mt-10 relative left-[1.5rem]">
                <div className="w-[80%] flex flex-row items-center justify-between mx-0 my-auto border-b-1 border-solid border-b-[#BEBCBD] pb-5">
                  <span className="text-[#ffba3f] font-semibold text-[1.2rem] items-center">
                    Filter
                  </span>
                  <img
                    onClick={() => setShowFilter(false)}
                    src={images.filter}
                    className="w-[20px] h-[22px] cursor-pointer"
                  />
                </div>
                <div className="w-[80%] flex flex-col mx-0 my-auto pb-2">
                  <div>Categories</div>
                  <span>All</span>
                  <span>Hydrolic Pumps</span>
                  <span>Engine</span>
                  <span>Filters</span>
                </div>
                <div className="w-[80%] flex flex-col mx-0 my-auto pb-6 mt-8">
                  <div className="text-[#807d7e] text-md font-600">Price</div>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    valueLabelDisplay="auto"
                    sx={{ color: "#FFBA3F" }}
                    value={value}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-[80%] flex flex-row items-center mx-0 my-auto justify-between mt-8">
                  <div>70</div>
                  <div>600</div>
                </div>
              </div>
            ) : (
              <div className="w-[15%] flex flex-col mt-10 items-center">
                <img
                  src={images.filter}
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => setShowFilter(true)}
                />
                <hr className="w-[23px] border-none h-[1px] mt-3 bg-[#BEBCBD]" />
              </div>
            )}
            {/* start */}
            <div className="w-[90%] flex flex-col bg-white px-0 py-8 box-border pb-10">
              <div className="w-full flex flex-row items-end justify-between">
                <div className="w-3/12 bg-gray-200 rounded-md flex items-center">
                  <img src={images.search} className="ml-3 w-5 h-5" />
                  <input
                    placeholder="Search"
                    className="w-full bg-transparent ml-2 focus:outline-none"
                  />
                </div>
                <span>{`Showing ${currentPage}-${currentItems.length} of ${data?.length} results`}</span>
              </div>
              <div className="flex flex-wrap justify-between mt-8">
                {currentItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="w-[30%] bg-white rounded-lg shadow-md p-4 mb-8"
                    >
                      <div className="flex justify-between">
                        <div>
                          <img className="w-4 h-4" src={images.location} />
                          <span className="text-sm text-gray-500 ml-1">
                            {item.location}
                          </span>
                        </div>
                        <div className="font-bold text-black">
                          Rs {item.price}
                        </div>
                      </div>
                      <div className="flex justify-between mt-2">
                        <div className="font-bold">{item.name}</div>
                        <div className="text-gray-500 text-sm">per day</div>
                      </div>
                      <img className="w-full mt-2" src={item.image[0]} />
                      <div className="text-gray-600 mt-2">{item.comment}</div>
                      <div
                        className="bg-yellow-500 text-white font-semibold rounded-md text-center mt-4 py-2 cursor-pointer"
                        onClick={() => handleNavigation(item)}
                      >
                        Read Details
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* end */}
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <UserPagination
            itemsPerPage={itemsPerPage}
            totalItems={data.length}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};
export default Rentals;
