/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import images from "../../utils/Images";
import styles from "./style.module.css";
import { Slider } from "@mui/material";
import UserPagination from "../../components/UserPagination";
import { useNavigate } from "react-router-dom";
import { data } from "./PartsData";
import { IoMdClose } from "react-icons/io";
import FilterSidebar from "../Rentals/FilterSidebar";
import Header from "../Rentals/Header";

const Parts = () => {
  const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

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
        <Header
          title={"Parts"}
          para={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          }
          subTitle={"HOME > PARTS"}
        />
        <div className={styles.containerTwo}>
          <div className={styles.secondDiv}>
            {/* {showFilter ? (
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
            )} */}
            {showFilter ? (
              <>
                <div className={styles.sidebarMobile}>
                  <IoMdClose
                    className={styles.closeIcon}
                    onClick={() => setShowFilter(false)}
                  />
                  <FilterSidebar
                    images={images}
                    setShowFilter={setShowFilter}
                    value={value}
                    handleChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <div className={styles.hideFilterDiv}>
                <img
                  src={images.filter}
                  className={"w-[22px] h-[24px] cursor-pointer"}
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
              <div className="flex flex-wrap mt-12 max-w-[100%] gap-10 m-auto justify-center">
                {currentItems.map((e, index) => {
                  return (
                    <div
                      key={index}
                      className="sm:h-[20rem] sm:w-[15rem] h-[16rem] w-[12rem] mb-10  max-w-sm bg-white border border-[#b9b8b9] rounded"
                      onClick={() => {
                        handleNavigation(e);
                      }}
                    >
                      <a href="#">
                        <img
                          className="sm:w-[14rem] sm:h-[8rem] w-[6rem] h-[6rem] object-cover m-auto block mt-12"
                          src={e.image[0]}
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
