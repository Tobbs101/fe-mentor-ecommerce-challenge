import React from "react";
import { categories } from "./categories";
import Logo from "../../assets/logo.svg";

console.log(categories);

const Navbar = () => {
  return (
    <div
      style={{ borderBottom: "1px solid #ccc" }}
      className="flex py-3 items-center justify-between"
    >
      <div className="flex gap-10">
        <img src={Logo} alt="logo" />
        <ul className="flex gap-8">
          {categories.map((x, index) => (
            <li key={index}>{x.title}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-customOrange">Cart</p>
      </div>
    </div>
  );
};

export default Navbar;
