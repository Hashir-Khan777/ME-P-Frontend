import React, {useState} from "react";
import ProductFilter from "../../components/Product Filter";
import Header from "../Rentals/Header";
import UserPagination from "../../components/UserPagination";
import styles from "../Rentals/style.module.css";
import { data } from "../Rentals/ProductsData";

const Equipment = () => {
  const [currentPage, setCurrentPage ] = useState(1);
  const [itemsPerPage, ] = useState(3);
  const handlePageChange = (pageNumber:any) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <Header title={"Equipment"} para={"Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."} subTitle={"HOME > EQUIPMENT"} />
      <ProductFilter />
      <div className={styles.paginationDiv}>
        <UserPagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};
export default Equipment;
