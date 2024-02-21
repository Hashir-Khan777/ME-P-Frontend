import { useContext, useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthContext } from "./utils/auth/auth";
import BuyerRouting from "./utils/BuyerRouting";
import { Provider } from "react-redux";
import Store from "./store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routing from "./utils/Routing/index";
import AdminRouting from "./utils/AdminRouting";

function App() {
  return (
    <Provider store={Store}>
      <AdminRouting />
      <Routing />
      <BuyerRouting />
      {/* <Footer /> */}
      <ToastContainer />
    </Provider>
  );
}

export default App;
