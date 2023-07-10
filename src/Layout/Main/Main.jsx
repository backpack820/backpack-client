import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../pages/shared/Footer/Footer";
import Navba from "../../pages/shared/Navbar/Navba";

const Main = () => {
  return (
    <div>
      <Navba />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
