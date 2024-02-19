import React, { useState } from "react";
import styles from "./style.module.css";
import images from "../../utils/Images";
import { Link, useLocation } from "react-router-dom";

const BuyerSidebar = () => {
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [equipmentMenu, setEquipmentMenu] = useState(false);
  const [rentalsMenu, setRentalsMenu] = useState(false);
  const [partsMenu, setPartsMenu] = useState(false);
  const [paymentMenu, setPaymentMenu] = useState(false);

  const location = useLocation();
  return (
    <>
      <div className={styles.sidebar}>
        <img src={images.Logo} className={styles.sidebarLogoImg} />
        <img src={images.sidebarLine} className={styles.sidebarLine} />
        <Link
          to={"/"}
          className={
            location.pathname === "/" ? styles.linkActive : styles.link
          }
        >
          <img
            src={images.dashboardSidebar}
            className={styles.sidebarImgsDashboard}
          />
          <span className={styles.sideBarText}>Dashboard</span>
        </Link>
        <Link
          //   to={"Order"}
          className={location.pathname === "" ? styles.linkActive : styles.link}
        >
          <img src={images.orderSidebar} className={styles.sidebarImgs} />
          <span className={styles.sideBarText}>Orders</span>
        </Link>
        <Link
          //   to={"/rental"}
          className={location.pathname === "" ? styles.linkActive : styles.link}
        >
          <img src={images.rentalsSidebar} className={styles.sidebarImgs} />
          <span className={styles.sideBarText}>Rentals</span>
        </Link>
        <div className={styles.sidebarText3}>ACCOUNT PAGES</div>
        <Link
          to={"Profile"}
          className={
            location.pathname === "/Profile" ? styles.linkActive : styles.link
          }
        >
          <img src={images.profileSidebar} className={styles.sidebarImgs} />
          <span className={styles.sideBarText}>Profile</span>
        </Link>
        <Link
          to={"Payment"}
          className={
            location.pathname === "/Payment" ? styles.linkActive : styles.link
          }
        >
          <img src={images.paymentSidebar} className={styles.sidebarImgs} />
          <span className={styles.sideBarText}>Payments</span>
        </Link>
        <Link
          to={"Reviews"}
          className={
            location.pathname === "/Reviews" ? styles.linkActive : styles.link
          }
        >
          <img src={images.sidebarReview} className={styles.sidebarImgs} />
          <span className={styles.sideBarText}>My Reviews</span>
        </Link>
        <div className={styles.sidebarDoscDiv}>
          <img src={images.sidebarDocsImg} className={styles.sidebarDocsImg} />
          <span className={styles.sidebarDocsText}>Need help?</span>
          <span className={styles.sidebarDocsText2}>Please check our docs</span>
          <button className={styles.sidebarDocsBtn}>DOCUMENTATION</button>
        </div>
      </div>
    </>
  );
};

export default BuyerSidebar;
