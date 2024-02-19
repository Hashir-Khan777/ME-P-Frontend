import React from "react";
import "./style.css";

function Pagination({ itemsPerPage, totalItems, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = [currentPage, currentPage + 1, currentPage + 2].filter(
    (pageNumber) => pageNumber >= 1 && pageNumber <= totalPages
  );

  return (
    <nav>
      <ul className="pagination">
        {currentPage > 1 && (
          <li className="page-item">
            <button
              className="active-page2"
              onClick={() => onPageChange(currentPage - 1)}
            >
              Prev
            </button>
          </li>
        )}
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <button
              className={`page-link ${
                number === currentPage ? "active-page" : "active-page2"
              }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </button>
          </li>
        ))}
        {currentPage < totalPages && (
          <li className="page-item">
            <button
              className="active-page2"
              onClick={() => onPageChange(currentPage + 1)}
            >
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
