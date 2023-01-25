import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../Shared/Navbar/NavBar";

const MainLoyout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLoyout;
