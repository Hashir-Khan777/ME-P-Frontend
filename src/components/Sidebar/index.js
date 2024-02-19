import React, { useState } from "react";
import "./Sidebar.css";
import images from "../../utils/Images";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [categoryMenu, setCategoryMenu] = useState(false);
  const [equipmentMenu, setEquipmentMenu] = useState(false);
  const [rentalsMenu, setRentalsMenu] = useState(false);
  const [partsMenu, setPartsMenu] = useState(false);
  const [paymentMenu, setPaymentMenu] = useState(false);

  const location = useLocation();
  return (
    <>
      <div className="sidebar">
        <img src={images.Logo} className="sidebarLogoImg" />
        <img src={images.sidebarLine} className="sidebarLine" />
        <Link
          to={"/seller/dashboard"}
          className={`link ${
            location.pathname === "/seller/dashboard" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardSidebar} className="sidebarImgsDashboard" />
          <span className="sideBarText">Dashboard</span>
        </Link>
        {/* <div
          className="sidebarChilderns2"
          onClick={() => {
            setCategoryMenu(!categoryMenu);
          }}
        > */}
        {/* <div className="sidebarChildernsInside"> */}
        <Link
          to={"/seller/category"}
          className={`link ${
            location.pathname === "/seller/category" ? "active" : "link"
          }`}
        >
          <img src={images.categortSidebar} className="sidebarImgs" />
          <span className="sideBarText">Category</span>
        </Link>
        {/* <img src={images.categortSidebar} className="sidebarImgs" /> */}
        {/* <span className="sideBarText">Category</span> */}
        {/* {categoryMenu ? (
              <img src={images.upArrow} className="arrowImgs" />
            ) : (
              <img src={images.downArrow} className="arrowImgs" />
            )} */}
        {/* </div> */}
        {/* </div> */}
        {/* {categoryMenu === true && (
          <div className="dropdownDiv">
            <Link
              to={"addCategory"}
              className={`link2 ${
                location.pathname === "/addCategory" ? "active" : "link2"
              }`}
            >
              <img src={images.categortSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Category 1</span>
            </Link>

            <div className="dropdownItem">
              <img src={images.categortSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Category 1</span>
            </div>
            <div className="dropdownItem">
              <img src={images.categortSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Category 1</span>
            </div>
          </div>
        )} */}
        <Link
          to={"/seller/equipment"}
          className={`link ${
            location.pathname === "/seller/equipment" ? "active" : "link"
          }`}
        >
          <img src={images.equipmentSidebar} className="sidebarImgs" />
          <span className="sideBarText">Equipment</span>
        </Link>
        <Link
          to={"/seller/rental"}
          className={`link ${
            location.pathname === "/seller/rental" ? "active" : "link"
          }`}
        >
          <img src={images.rentalsSidebar} className="sidebarImgs" />
          <span className="sideBarText">Rentals</span>
        </Link>
        {/* <div
          className="sidebarChilderns2"
          onClick={() => {
            setEquipmentMenu(!equipmentMenu);
          }}
        >
          <div className="sidebarChildernsInside">
            <img src={images.equipmentSidebar} className="sidebarImgs" />
            <span className="sideBarText">Equipment</span>
            {equipmentMenu ? (
              <img src={images.upArrow} className="arrowImgs" />
            ) : (
              <img src={images.downArrow} className="arrowImgs" />
            )}
          </div>
        </div>
        {equipmentMenu === true && (
          <div className="dropdownDiv">
            <Link
              to={"addEquipment"}
              className={`link2 ${
                location.pathname === "/addEquipment" ? "active" : "link2"
              }`}
            >
              <img src={images.equipmentSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Equipment 1</span>
            </Link>
            <div className="dropdownItem">
              <img src={images.equipmentSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Equipment 1</span>
            </div>
            <div className="dropdownItem">
              <img src={images.equipmentSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Equipment 1</span>
            </div>
          </div>
        )}
        <div
          className="sidebarChilderns2"
          onClick={() => {
            setRentalsMenu(!rentalsMenu);
          }}
        >
          <div className="sidebarChildernsInside">
            <img src={images.rentalsSidebar} className="sidebarImgs" />
            <span className="sideBarText">Rentals</span>
            {equipmentMenu ? (
              <img src={images.upArrow} className="arrowImgs" />
            ) : (
              <img src={images.downArrow} className="arrowImgs" />
            )}
          </div>
        </div>
        {rentalsMenu === true && (
          <div className="dropdownDiv">
            <Link
              to={"addRental"}
              className={`link2 ${
                location.pathname === "/addRental" ? "active" : "link2"
              }`}
            >
              <img src={images.rentalsSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Rentals 1</span>
            </Link>
            <div className="dropdownItem">
              <img src={images.rentalsSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Rentals 1</span>
            </div>
            <div className="dropdownItem">
              <img src={images.rentalsSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Rentals 1</span>
            </div>
          </div>
        )} */}
        <Link
          to={"/seller/parts"}
          className={`link ${
            location.pathname === "/seller/parts" ? "active" : "link"
          }`}
        >
          <img src={images.partsSidebar} className="sidebarImgs" />
          <span className="sideBarText">Parts</span>
        </Link>
        {/* <div
          className="sidebarChilderns2"
          onClick={() => {
            setPartsMenu(!partsMenu);
          }}
        >
          <div className="sidebarChildernsInside">
            <img src={images.partsSidebar} className="sidebarImgs" />
            <span className="sideBarText">Parts</span>
            {partsMenu ? (
              <img src={images.upArrow} className="arrowImgs" />
            ) : (
              <img src={images.downArrow} className="arrowImgs" />
            )}
          </div>
        </div>
        {partsMenu === true && (
          <div className="dropdownDiv">
            <Link
              to={"addParts"}
              className={`link2 ${
                location.pathname === "/addParts" ? "active" : "link2"
              }`}
            >
              <img src={images.partsSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Parts 1</span>
            </Link>
            <div className="dropdownItem">
              <img src={images.partsSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Parts 1</span>
            </div>
            <div className="dropdownItem">
              <img src={images.partsSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Parts 1</span>
            </div>
          </div>
        )} */}

        <Link
          to={"Order"}
          className={`link ${
            location.pathname === "/Order" ? "active" : "link"
          }`}
        >
          <img src={images.orderSidebar} className="sidebarImgs" />
          <span className="sideBarText">Order</span>
        </Link>
        <div className="sidebarText3">ACCOUNT PAGES</div>
        <Link
          to={"profile"}
          className={`link ${
            location.pathname === "/profile" ? "active" : "link"
          }`}
        >
          <img src={images.profileSidebar} className="sidebarImgs" />
          <span className="sideBarText">Profile</span>
        </Link>
        <Link
          // to={"/"}
          className={`link ${location.pathname === "" ? "active" : "link"}`}
        >
          <img src={images.paymentSidebar} className="sidebarImgs" />
          <span className="sideBarText">Payments</span>
        </Link>
        {/* <div
          className="sidebarChilderns2"
          onClick={() => {
            setPaymentMenu(!paymentMenu);
          }}
        >
          <div className="sidebarChildernsInside">
            <img src={images.paymentSidebar} className="sidebarImgs" />
            <span className="sideBarText">Payments</span>
            {paymentMenu ? (
              <img src={images.upArrow} className="arrowImgs" />
            ) : (
              <img src={images.downArrow} className="arrowImgs" />
            )}
          </div>
        </div>
        {paymentMenu === true && (
          <div className="dropdownDiv">
            <div className="dropdownItem">
              <img src={images.paymentSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Payments 1</span>
            </div>
            <div className="dropdownItem">
              <img src={images.paymentSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Payments 1</span>
            </div>
            <div className="dropdownItem">
              <img src={images.paymentSidebar} className="sidebarImgs" />
              <span className="sideBarText2">Payments 1</span>
            </div>
          </div>
        )} */}
        <Link
          to={"/Reviews"}
          className={`link ${
            location.pathname === "/Reviews" ? "active" : "link"
          }`}
        >
          <img src={images.manageReviewSidebar} className="sidebarImgs" />
          <span className="sideBarText">Review</span>
        </Link>
        {/* <div className="sidebarChilderns">
          <img src={images.manageReviewSidebar} className="sidebarImgs" />
          <span className="sideBarText">Manage Review</span>
        </div> */}
        <div className="sidebarDoscDiv">
          <img src={images.sidebarDocsImg} className="sidebarDocsImg" />
          <span className="sidebarDocsText">Need help?</span>
          <span className="sidebarDocsText2">Please check our docs</span>
          <button className="sidebarDocsBtn">DOCUMENTATION</button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
