/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styles from "./style.module.css";
import UserPagination from "../../components/UserPagination";
import Header from "../Rentals/Header";
import { data } from "./PartsData";
import FilterView from "../Rentals/FilterView";

const Parts = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
        <FilterView data={data} />
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
