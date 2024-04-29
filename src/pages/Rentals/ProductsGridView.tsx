/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import styles from "./style.module.css";
import images from "../../utils/Images";
import { useNavigate } from "react-router-dom";
import RentalCard from "../../components/RentalSlider/RentalCard";

const ProductsGridView = (props: any) => {
  const { data } = props;
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <div className={styles.secondDivSecond}>
        <div className={styles.searchMainDiv}>
          <div className={styles.searchDiv}>
            <img src={images.search} className={styles.searchImg} />
            <input placeholder="Search" className={styles.searchInput} />
          </div>
          <span>{`Showing ${currentPage}-${currentItems.length} of ${data?.length} results`}</span>
        </div>
        <div className={styles.mapMainDiv}>
          {currentItems.map((item: any) => {
            return <RentalCard item={item} />;
          })}
        </div>
      </div>
    </>
  );
};

export default ProductsGridView;
