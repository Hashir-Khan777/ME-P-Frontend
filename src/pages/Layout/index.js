import React from "react";
import { Link, Outlet } from "react-router-dom";
import SellerHeader from "../../components/SeelerHeader";

export default function Layout() {
  return (
    <>
      <SellerHeader />
      <Outlet />
    </>
  );
}
