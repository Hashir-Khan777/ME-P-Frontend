import React, { useState } from "react";
// import "./style.css";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";

export default function ManageReviews() {
  const [data, setData] = useState([
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },

    {
      name: "Syed Ahsan Ali",
      rating: [
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
        images.ratingStar,
      ],
      title:
        "“Thrilled with my hydraulic pumps purchase! Superior performance and efficient delivery. Highly recommended!”",
      productName: "Hydrolic Pumps",
      doneImg: images.doneImg,
      crossImg: images.crossImg,
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="manageReviewContainer">
        <div className="manageReviewHeadingText">Manage Reviews</div>
        <div>
          {currentItems.map((item, index) => {
            return (
              <div className="manageReviewMapMainDiv">
                <div className="managereviewDiv">
                  <div>
                    <div className="nameRatingDiv">
                      <div className="nameText">{item.name}</div>
                      {item.rating.map((item, index) => {
                        return (
                          <img
                            key={index}
                            src={item}
                            className="ratingStarImg"
                          />
                        );
                      })}
                    </div>
                    <div className="titeText">{item.title}</div>
                    <div className="productText">{`Product name: ${item.productName}`}</div>
                  </div>
                  <div className="doneCrossImgDiv">
                    <img src={item.doneImg} className="doneDeclineImg" />
                    <img src={item.crossImg} className="doneDeclineImg" />
                  </div>
                </div>
                <img src={images.manageReviwLine} className="mapLastLineImg" />
              </div>
            );
          })}
        </div>
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
