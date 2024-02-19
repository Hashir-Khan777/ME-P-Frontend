import React, { useState } from "react";
import styles from "./style.module.css";
import images from "../../utils/Images";
import Pagination from "../../components/Pagination.js";

export default function BuyerReviews() {
  const [data, setData] = useState([
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
    {
      image: images.newOrderImg,
      name: "Hydrolic Pumps",
      orderBy: "Syed Ahsan Ali",
      quantity: "2",
      price: "20000",
      date: "14/06/23",
    },
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerForDashboard}>
        <div className={styles.headingText}>Give Feedback</div>
        <div className={styles.headeingMainDiv}>
          <div className={styles.product}>PRODUCT</div>
          <div className={styles.quantity}>ID</div>
          <div className={styles.price}>PRICE</div>
          <div className={styles.date}>PLACED ON</div>
          <div className={styles.eyeIcon}></div>
        </div>
        <div>
          {currentItems.map((item, index) => {
            return (
              <div className={styles.headeingMainDiv}>
                <div className={styles.mapImgDiv}>
                  <img src={item.image} className={styles.productImg} />
                  <div className={styles.mapImgTextDiv}>
                    <span className={styles.text1}>{item.name}</span>
                    {/* <span
                      className={styles.text2}
                    >{`orderBy:${item.orderBy}`}</span> */}
                  </div>
                </div>
                <div className={styles.mapQuantityText}>{item.quantity}</div>
                <div className={styles.mapPriceText}>{`PKR ${item.price}`}</div>
                <div className={styles.mapDateText}>{item.date}</div>

                <div className={styles.eyeImgDiv}>
                  <span>Give Feedback</span>
                  {/* <img src={images.eyeImg} className={styles.eyeImg} /> */}
                </div>
              </div>
            );
          })}
        </div>
        <div className={styles.forMargin}></div>
        <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={data.length}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
