import "../../App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import ResponsiveAppBar from "../../components/Header";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Equipment from "../../pages/Equipment";
import Parts from "../../pages/Parts";
import PartsDetails from "../../pages/PartsDetails";
import RentalsDetails from "../../pages/RentalsDetails";
import EquipmentDetails from "../../pages/EquipmentDetails";
import Rentals from "../../pages/Rentals";
import Contact from "../../pages/Contact";
import PrivacyPolicy from "../../pages/Privacy Policy";
import CartPage from "../../pages/Cart Page";
import CheckoutPage from "../../pages/Checkout Page";
import BecomeSeller from "../../pages/become a seller";
import ThankYouPage from "../../pages/Thankyou page";
import SignIn from "../../pages/Sign In";
import SignUp from "../../pages/Sign Up";
import CreateStore from "./../../pages/createstore";

const BuyerRouting = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return !currentPath.includes("seller") && !currentPath.includes("admin") ? (
    <div className="mainInsideContainer">
      <ResponsiveAppBar />
      <div>
        <Routes>
          <Route path="/user" element={<></>}></Route>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="About"
            element={
              <>
                <About />
              </>
            }
          />
          <Route
            path="Equipment"
            element={
              <>
                <Equipment />
              </>
            }
          />
          <Route
            path="Parts"
            element={
              <>
                <Parts />
              </>
            }
          />
          <Route
            path="part/details/:_id"
            element={
              <>
                <PartsDetails />
              </>
            }
          />
          <Route
            path="rental/details/:_id"
            element={
              <>
                <RentalsDetails />
              </>
            }
          />
          <Route
            path="equipment/details/:_id"
            element={
              <>
                <EquipmentDetails />
              </>
            }
          />
          <Route
            path="Rentals"
            element={
              <>
                <Rentals />
              </>
            }
          />
          <Route
            path="Contact"
            element={
              <>
                <Contact />
              </>
            }
          />
          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route
            path="CartPage"
            element={
              <>
                <CartPage />
              </>
            }
          />
          <Route
            path="CheckoutPage"
            element={
              <>
                <CheckoutPage />
              </>
            }
          />
          <Route
            path="BecomeSeller"
            element={
              <>
                <BecomeSeller />
              </>
            }
          />
          <Route
            path="ThankYouPage"
            element={
              <>
                <ThankYouPage />
              </>
            }
          />
          <Route path="login" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="createstore/:plan" element={<CreateStore />} />
        </Routes>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default BuyerRouting;
