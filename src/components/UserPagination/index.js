import React from "react";
import styles from "./styles.module.css";
import images from "../../utils/Images";

function UserPagination({
  itemsPerPage,
  totalItems,
  currentPage,
  onPageChange,
}) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [currentPage, currentPage + 1, currentPage + 2].filter(
    (pageNumber) => pageNumber >= 1 && pageNumber <= totalPages
  );

  return (
    <nav className="mb-[4rem]">
      <ul className={styles.pagination}>
        {currentPage > 1 && (
          <li>
            <button
              className={styles.activePage}
              onClick={() => onPageChange(currentPage - 1)}
            >
              Prev
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li key={number}>
            <button
              className={
                number === currentPage ? styles.activePage : styles.activePage2
              }
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage !== totalPages && (
          <li>
            {/* <button
              className={styles.activePage2}
              onClick={() => onPageChange(totalPages)}
            >
              Last
            </button> */}
            <div
              className={styles.lastImgDiv}
              onClick={() => onPageChange(totalPages)}
            >
              <img src={images.paginationLastImg} className={styles.lastImg} />
            </div>
          </li>
        )}
        {/* {currentPage < totalPages && (
          <li>
            <button
              className={styles.activePage}
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )} */}
      </ul>
    </nav>
  );
}

export default UserPagination;
