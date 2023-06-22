import React from "react";
import { Link, Outlet } from "react-router-dom";
import  Header from "./Header";
import Footer from "./Footers";

const MainHeader = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainHeader;
