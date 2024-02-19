import "../../App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import AdminSidebar from "../../components/AdminSidebar";
import AdminHeader from "../../components/AdminHeader";
import AdminDashboard from "../../pages/AdminDashboard";
import AdminProfile from "../../pages/AdminProfile";
import Stores from "../../pages/Stores";
import Querries from "../../pages/Querries";
import Earnings from "../../pages/Earnings";

const AdminRouting = () => {
  const routeTitles = {
    "/admin/dashboard": "Admin",
    "/admin/profile": "Syed Ahsan",
    "/admin/Stores": "Stores",
    "/admin/Querries": "Querries",
    "/admin/Earnings": "Earnings",
  };

  const location = useLocation();
  const currentPath = location.pathname;
  const currentPageTitle = routeTitles[currentPath] || "Page Not Found";
  return currentPath.includes("admin") ? (
    <div className="mainContainer">
      <AdminSidebar />
      <div className="mainInsideContainer">
        <AdminHeader prop1={currentPageTitle} />
        <Routes>
          <Route
            path="/admin/dashboard"
            element={
              <>
                <AdminDashboard />
              </>
            }
          />
          <Route
            path="/admin/profile"
            element={
              <>
                <AdminProfile />
              </>
            }
          />
          <Route
            path="/admin/Stores"
            element={
              <>
                <Stores />
              </>
            }
          />{" "}
          <Route
            path="/admin/Querries"
            element={
              <>
                <Querries />
              </>
            }
          />
          <Route
            path="/admin/Earnings"
            element={
              <>
                <Earnings />
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

export default AdminRouting;
