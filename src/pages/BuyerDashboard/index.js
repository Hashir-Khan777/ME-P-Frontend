import React, { useState } from "react";
import styles from "./style.module.css";
import images from "../../utils/Images";

export default function BuyerDashboard() {
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
  return (
    <div className={styles.container}>
      <div className={styles.firstMain}>
        <div className={styles.personalDetailsDiv}>
          <h1>Personal Details:</h1>
          <h2>
            Name:<span>Syed Ahsan Ali</span>
          </h2>
          <h2>
            Email:<span>syedahsan2305@gmail.com</span>
          </h2>
          <h2>
            Phone:<span>03128046700</span>
          </h2>
        </div>
        <div className={styles.addressBookDiv}>
          <div>
            <h1>Address Book:</h1>
            <h2>DEFAULT DELIVERY ADDRESS</h2>
            <span>Syed Ahsan</span>
            <br />
            <span>
              Saghir center c-76 <br /> Sindh - Karachi - F.B Area - Block 16
            </span>
          </div>
          <img src={images.line} />
          <div>
            <h2>DEFAULT BILLING ADDRESS</h2>
            <span>Syed Ahsan</span>
            <br />
            <span>
              Saghir center c-76 <br /> Sindh - Karachi - F.B Area - Block 16
            </span>
          </div>
        </div>
      </div>
      <div className={styles.containerForDashboard}>
        <div className={styles.headingText}>Recent Orders</div>
        <div className={styles.headeingMainDiv}>
          <div className={styles.product}>PRODUCT</div>
          <div className={styles.quantity}>ID</div>
          <div className={styles.price}>PRICE</div>
          <div className={styles.date}>PLACED ON</div>
          <div className={styles.eyeIcon}></div>
        </div>
        <div>
          {data.map((item, index) => {
            return (
              <div className={styles.headeingMainDiv}>
                <div className={styles.mapImgDiv}>
                  <img src={item.image} className={styles.productImg} />
                  <div className={styles.mapImgTextDiv}>
                    <span className={styles.text1}>{item.name}</span>
                    <span
                      className={styles.text2}
                    >{`orderBy:${item.orderBy}`}</span>
                  </div>
                </div>
                <div className={styles.mapQuantityText}>{item.quantity}</div>
                <div className={styles.mapPriceText}>{`PKR ${item.price}`}</div>
                <div className={styles.mapDateText}>{item.date}</div>

                <div className={styles.eyeImgDiv}>
                  <img src={images.eyeImg} className={styles.eyeImg} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
