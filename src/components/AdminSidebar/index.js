import React, { useState } from "react";
import "./Sidebar.css";
import images from "../../utils/Images";
import { Link, useLocation, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <div className="sidebar">
        <img src={images.Logo} className="sidebarLogoImg" />
        <img src={images.sidebarLine} className="sidebarLine" />
        <Link
          to={"/admin/dashboard"}
          className={`link ${
            location.pathname === "/admin/dashboard" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardSidebar} className="sidebarImgsDashboard" />
          <span className="sideBarText">Dashboard</span>
        </Link>

        <Link
          to={"/admin/Stores"}
          className={`link ${
            location.pathname === "/admin/Stores" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardStores} className="sidebarImgs" />
          <span className="sideBarText">Stores</span>
        </Link>

        <Link
          to={"/admin/category"}
          className={`link ${
            location.pathname === "/admin/category" ? "active" : "link"
          }`}
        >
          <img src={images.categortSidebar} className="sidebarImgs" />
          <span className="sideBarText">Category</span>
        </Link>

        <Link
          to={"/admin/Earnings"}
          className={`link ${
            location.pathname === "/admin/Earnings" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardEarnings} className="sidebarImgs" />
          <span className="sideBarText">Earnings</span>
        </Link>
        <Link
          to={"/admin/Querries"}
          className={`link ${
            location.pathname === "/admin/Querries" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardQuerries} className="sidebarImgs" />
          <span className="sideBarText">Querries</span>
        </Link>

        <div className="sidebarText3">ACCOUNT PAGES</div>
        <Link
          to={"/admin/profile"}
          className={`link ${
            location.pathname === "/admin/profile" ? "active" : "link"
          }`}
        >
          <img src={images.profileSidebar} className="sidebarImgs" />
          <span className="sideBarText">Profile</span>
        </Link>
        {/* <Link
          // to={"/"}
          className={`link ${location.pathname === "" ? "active" : "link"}`}
        >
          <img src={images.paymentSidebar} className="sidebarImgs" />
          <span className="sideBarText">Payments</span>
        </Link> */}
      </div>
    </>
  );
};

export default AdminSidebar;
