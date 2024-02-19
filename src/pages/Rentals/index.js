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
      <div className={styles.container}>
        <div className={styles.textDiv}>
          <div className={styles.text1}>{`HOME > RENTALS`}</div>
          <div className={styles.text2}>Rentals</div>
          <div className={styles.text3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </div>
        </div>
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
                    <div key={index} className={styles.readDetailsCard}>
                      <div className={styles.readDetailsCardRow}>
                        <div className={styles.readDetailsCardRowRight}>
                          <img
                            className={styles.cardLocationImg}
                            src={images.location}
                          />
                          <div className={styles.cardLocationText}>
                            {item.location}
                          </div>
                        </div>
                        <div className={styles.cardTextBold}>
                          Rs {item.price}
                        </div>
                      </div>
                      <div className={styles.readDetailsCardRow}>
                        <div className={styles.cardTextBold}>{item.name}</div>
                        <div className={styles.cardDayText}>per day</div>
                      </div>
                      <img className={styles.cardImage} src={item.image[0]} />
                      <div className={styles.cardCommentText}>
                        {item.comment}
                      </div>
                      <div
                        className={styles.readDetailsBtn}
                        onClick={() => {
                          handleNavigation(item);
                        }}
                      >
                        Read Details
                      </div>
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
export default Rentals;
