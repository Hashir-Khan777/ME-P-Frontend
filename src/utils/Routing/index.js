import React from "react";
import "../../App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddEquipment from "../../pages/AddEquipment";
import Addcategory from "../../pages/AddCategory";
import AddRental from "../../pages/AddRentals";
import AddParts from "../../pages/AddParts";
import Profile from "../../pages/Profile";
import NewOrderScreen from "../../pages/NewOrderScreen";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import SellerHeader from "../../components/SeelerHeader";
import Sidebar from "../../components/Sidebar";
import Reviews from "../../pages/Reviews";
import Category from "../../pages/AddCategory";
import Equipment from "../../pages/AddEquipment";
import Rental from "../../pages/AddRentals";
import Dashboard from "../../pages/Dashboard";

const Routing = () => {
  const routeTitles = {
    "/seller/dashboard": "Dashboard",
    "/seller/equipment": "Equipment",
    "/seller/category": "Category",
    "/seller/rental": "Rental",
    "/seller/parts": "Parts",
    "/seller/profile": "Profile",
    "/seller/Order": "Order",
    "/seller/Reviews": "Reviews",
  };
  const location = useLocation();
  const currentPath = location.pathname;
  const currentPageTitle = routeTitles[currentPath] || "Page Not Found";
  return currentPath.includes("seller") ? (
    <div className="mainContainer">
      <Sidebar />
      <div className="mainInsideContainer">
        <SellerHeader prop1={currentPageTitle} />
        <Routes>
          <Route
            path="/seller/dashboard"
            element={
              <>
                <Dashboard />
              </>
            }
          />
          <Route
            path="/seller/category"
            element={
              <>
                <Category />
              </>
            }
          />
          <Route
            path="/seller/equipment"
            element={
              <>
                <Equipment />
              </>
            }
          />
          <Route
            path="/seller/rental"
            element={
              <>
                <Rental />
              </>
            }
          />
          <Route
            path="/seller/parts"
            element={
              <>
                <AddParts />
              </>
            }
          />
          <Route
            path="/seller/profile"
            element={
              <>
                <Profile />
              </>
            }
          />
          <Route
            path="/seller/Order"
            element={
              <>
                <NewOrderScreen />
              </>
            }
          />
          <Route
            path="/seller/Reviews"
            element={
              <>
                <Reviews />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Routing;
