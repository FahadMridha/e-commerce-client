import React from "react";
import { Outlet } from "react-router-dom";
import FooterArea from "../../Shared/footer/Footer";
import NavBar from "../../Shared/Navbar/NavBar";

const MainLoyout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <FooterArea />
    </div>
  );
};

export default MainLoyout;
