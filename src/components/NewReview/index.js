import React, { useEffect, useState } from "react";
import "./style.css";
import images from "../../utils/Images";
import Pagination from "../Pagination.js";

export default function NewReviews(props) {
  // console.log(props);
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
  // const itemsPerPage = 2;
  const [itemsPerPage, setItemsPerPage] = useState();
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    console.log(props.props1);
    if (props.props1 == "Recent Reviews") {
      setItemsPerPage(3);
    } else {
      setItemsPerPage(2);
    }
  }, []);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div
        className={
          itemsPerPage === 2
            ? "manageReviewContainer"
            : "manageReviewContainer2"
        }
      >
        <div className="manageReviewHeadingText">{props.props1}</div>
        <div>
          {currentItems.map((item, index) => {
            return (
              <div
                className={
                  itemsPerPage === 2
                    ? "manageReviewMapMainDiv"
                    : "manageReviewMapMainDiv2"
                }
              >
                <div className="managereviewDiv">
                  <div>
                    <div className="nameRatingDiv">
                      <div className="nameText">{item.name}</div>
                      {item.rating.map((item, index) => {
                        return (
                          <img
                            key={index}
                            src={item}
                            className={
                              itemsPerPage === 2
                                ? "ratingStarImg"
                                : "ratingStarImg2"
                            }
                          />
                        );
                      })}
                    </div>
                    <div
                      className={itemsPerPage === 2 ? "titeText" : "titeText2"}
                    >
                      {item.title}
                    </div>
                    <div
                      className={
                        itemsPerPage === 2 ? "productText" : "productText2"
                      }
                    >{`Product name: ${item.productName}`}</div>
                  </div>
                  {itemsPerPage === 2 && (
                    <div className="doneCrossImgDiv">
                      <img src={item.doneImg} className="doneDeclineImg" />
                      <img src={item.crossImg} className="doneDeclineImg" />
                    </div>
                  )}
                </div>
                <img src={images.manageReviwLine} className="mapLastLineImg" />
              </div>
            );
          })}
        </div>
      </div>
      {itemsPerPage === 2 && (
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
}
