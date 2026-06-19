import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "../Footer/footer";

const FrontendLayout = () => {
  return (
    <>
      <Navbar />  
      <Outlet />   
      <Footer/> 
    </>
  );
};

export default FrontendLayout;