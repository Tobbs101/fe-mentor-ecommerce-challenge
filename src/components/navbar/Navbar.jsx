import React from "react";
import { categories } from "./categories";
import Logo from "../../assets/logo.svg";

console.log(categories);

const Navbar = () => {
  return (
    <div
      style={{ borderBottom: "1px solid #ccc" }}
      className="text-customOrange flex py-3"
    >
      <img src={Logo} />
      Navbar
    </div>
  );
};

export default Navbar;
