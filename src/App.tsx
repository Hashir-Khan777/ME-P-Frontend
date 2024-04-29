import { useContext, useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import { AuthContext } from "./utils/auth/auth";
import BuyerRouting from "./utils/BuyerRouting";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Routing from "./utils/Routing/index";
import AdminRouting from "./utils/AdminRouting";
import { useDispatch, useSelector } from "react-redux";
import { verifyUser } from "./store/actions/auth.action";
import { isEmpty } from "./helpers";
import { getStoreByUserId } from "./store/actions/store.action";
import { Box } from "@mui/material";

function App() {
  const dispatch = useDispatch();

  const { user } = useSelector((state: any) => state.AuthReducer);

  useEffect(() => {
    dispatch(verifyUser());
  }, [dispatch]);

  useEffect(() => {
    if (!isEmpty(user)) {
      dispatch(getStoreByUserId({ _id: user?._id }));
    }
  }, [user]);

  return (
    <Box sx={{ overflowX: "hidden" }}>
      <AdminRouting />
      <Routing />
      <BuyerRouting />
      <Footer />
      <ToastContainer />
    </Box>
  );
}

export default App;
