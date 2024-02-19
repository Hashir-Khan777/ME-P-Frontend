import React, { useState } from "react";
import styles from "./style.module.css";
import profile1 from "../../assets/profile1.png";
import bellImg from "../../assets/bellImg.png";
import images from "../../utils/Images";

const BuyerHeader = () => {
  const [notification, setNotificatin] = useState(false);
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.header1}>
          <div>
            <div className={styles.equipmentText}>Hello</div>
            <div className={styles.ABCText}>Syed Ahsan</div>
          </div>
          {notification === true && (
            <div className={styles.natificationDiv}>
              <div className={styles.natificationDivChild}>
                <div className={styles.natificationDivChild1}>
                  <img
                    src={images.chartGreen}
                    className={styles.natificationDivChild1Img1}
                  />
                  <img
                    src={images.notification1}
                    className={styles.natificationDivChild1Img2}
                  />
                  <span className={styles.natificationDivChild1Text1}>
                    New Order
                  </span>
                  <span className={styles.natificationDivChild1Text2}>
                    (Order ID: 005)
                  </span>
                </div>
                <div className={styles.natificationDivChild2}>2s</div>
              </div>
              <div className={styles.natificationDivChild}>
                <div className={styles.natificationDivChild1}>
                  <img
                    src={images.chatrRed}
                    className={styles.natificationDivChild1Img1}
                  />
                  <img
                    src={images.notification2}
                    className={styles.natificationDivChild1Img2}
                  />
                  <span className={styles.natificationDivChild1Text1}>
                    Order Canceled
                  </span>
                  <span className={styles.natificationDivChild1Text2}>
                    (Order ID: 004)
                  </span>
                </div>
                <div className={styles.natificationDivChild2}>1s</div>
              </div>
              <div className={styles.natificationDivChild}>
                <div className={styles.natificationDivChild1}>
                  <img
                    src={images.chartYellow}
                    className={styles.natificationDivChild1Img1}
                  />
                  <img
                    src={images.notification3}
                    className={styles.natificationDivChild1Img2}
                  />
                  <span className={styles.natificationDivChild1Text1}>
                    Order Canceled
                  </span>
                  <span className={styles.natificationDivChild1Text2}>
                    (Order ID: 005)
                  </span>
                </div>
                <div className={styles.natificationDivChild2}>1s</div>
              </div>
            </div>
          )}
          <div className={styles.imgDiv}>
            <img
              src={bellImg}
              className={styles.bellImg}
              onClick={() => {
                setNotificatin(!notification);
              }}
            />
            <img src={profile1} className={styles.profileImg} />
          </div>
        </div>
      </div>
    </>
  );
};
export default BuyerHeader;
