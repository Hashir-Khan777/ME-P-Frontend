/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import UserPagination from "../../components/UserPagination";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import FilterView from "./FilterView";
import { data } from "./ProductsData";
import { getRentals } from "../../store/actions/rentals.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const Rentals = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { rentals } = useSelector((state) => state.RentalReducer);

  const [value, setValue] = useState([0, 100]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getRentals());
  }, [dispatch]);

  return (
    <>
      <div className={styles.container}>
        <Header
          title={"Rentals"}
          para={
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
          }
          subTitle={"HOME > RENTALS"}
        />
        <FilterView data={rentals} />
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
