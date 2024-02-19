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
        <img
          src={images.Logo}
          className="sidebarLogoImg"
          onClick={() => navigate("/")}
        />
        <img src={images.sidebarLine} className="sidebarLine" />
        <Link
          to={"/"}
          className={`link ${location.pathname === "/" ? "active" : "link"}`}
        >
          <img src={images.dashboardSidebar} className="sidebarImgsDashboard" />
          <span className="sideBarText">Dashboard</span>
        </Link>

        <Link
          to={"/Stores"}
          className={`link ${
            location.pathname === "/Stores" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardStores} className="sidebarImgs" />
          <span className="sideBarText">Stores</span>
        </Link>

        <Link
          to={"/Earnings"}
          className={`link ${
            location.pathname === "/Earnings" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardEarnings} className="sidebarImgs" />
          <span className="sideBarText">Earnings</span>
        </Link>
        <Link
          to={"/Querries"}
          className={`link ${
            location.pathname === "/Querries" ? "active" : "link"
          }`}
        >
          <img src={images.dashboardQuerries} className="sidebarImgs" />
          <span className="sideBarText">Querries</span>
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
      </div>
    </>
  );
};

export default AdminSidebar;
