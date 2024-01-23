import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
