import React, { useState } from "react";
import images from "../../utils/Images";
import styles from "./style.module.css";
import { Slider } from "@mui/material";
import UserPagination from "../../components/UserPagination";
import { useNavigate } from "react-router-dom";
import Header from "../Rentals/Header";

const Parts = () => {
  const navigate = useNavigate();

  const [showFilter, setShowFilter] = useState(false);
  const [data, setData] = useState([
    {
      _id: "1071230814",
      image: [images.f1, images.f2, images.f3],
      category: "Excavators",
      make: "Crown",
      name: "Roller Compactor",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator \n All parts genuine \n condition  10/10 \n Engine and pump genuine \n Visit us or call us for details \n *Serious buyers and only phone calls willbe entertained* \n *No text / whatsapp messages willbe Answered*",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
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
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Roller Compactor",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Roller Compactor",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Roller Compactor",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Roller Compactor",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Hydrolic Pumps",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Hydrolic Pumps",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Hydrolic Pumps",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Engine",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
      ],
    },
    {
      _id: "1071230814",
      image: [
        images.RollerCompactor,
        images.RollerCompactor,
        images.RollerCompactor,
      ],
      category: "Excavators",
      make: "Crown",
      name: "Engine",
      location: "Karachi, Pakistan",
      price: "2.500.000",
      description:
        "Imported excavator All parts genuine condition  10/10 Engine and pump genuine Visit us or call us for details Serious buyers and only phone calls willbe entertained No text / whatsapp messages willbe Answered",
      userData: {
        profileImg: images.profile1,
        name: "Syed Ahsan Ali",
        joiningData: "jul 2019",
      },
      review: [
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
          title:
            "Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!",
          images: [images.Excavators, images.Excavators, images.Excavators],
        },
        {
          name: "Syed Ahsan Ali",
          star: 5,
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
    navigate(`Details/${item._id}`, {
      state: {
        data: item,
        relatedProduct,
      },
    });
  };

  console.log(value);
  return (
    <>
      <div className={styles.container}>
      <Header title={"Parts"} para={"Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."} subTitle={"HOME > PARTS"}/>
        <div className={styles.containerTwo}>
          <div className={styles.secondDiv}>
            {showFilter ? (
              <div className={styles.showFilterDiv}>
                <div className={styles.showFilterDivOne}>
                  <span>Filter</span>
                  <img
                    onClick={() => setShowFilter(false)}
                    src={images.filter}
                    className={styles.hideFilterDivImg}
                  />
                </div>
                <div className={styles.showFilterDivTwo}>
                  <div>Categories</div>
                  <span>All</span>
                  <span>Hydrolic Pumps</span>
                  <span>Engine</span>
                  <span>Filters</span>
                </div>
                <div className={styles.showFilterDivThree}>
                  <div>Price</div>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    valueLabelDisplay="auto"
                    sx={{ color: "#FFBA3F" }}
                    value={value}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.showFilterDivFour}>
                  <div>70</div>
                  <div>600</div>
                </div>
              </div>
            ) : (
              <div className={styles.hideFilterDiv}>
                <img
                  src={images.filter}
                  className={styles.hideFilterDivImg}
                  onClick={() => setShowFilter(true)}
                />
                <hr className={styles.hideFilterDivHr} />
              </div>
            )}
            <div className={styles.secondDivSecond}>
              <div className={styles.searchMainDiv}>
                <div className={styles.searchDiv}>
                  <img src={images.search} className={styles.searchImg} />
                  <input placeholder="Search" className={styles.searchInput} />
                </div>
                <span>{`Showing ${currentPage}-${currentItems.length} of ${data?.length} results`}</span>
              </div>
              <div className={styles.mapMainDiv}>
                {currentItems.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={styles.mapDiv}
                      onClick={() => {
                        handleNavigation(item);
                      }}
                    >
                      <img src={item.image[0]} className={styles.mapImg} />
                      <div className={styles.mapText1}>{item.name}</div>
                      <div className={styles.mapText2}>{item.location}</div>
                      <div className={styles.mapText3}>{item.price}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.paginationDiv}>
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
export default Parts;
