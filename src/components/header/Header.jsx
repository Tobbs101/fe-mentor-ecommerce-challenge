import React, { useState } from "react";
import { categories } from "./categories";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import Menu from "../../assets/icon-menu.svg";

const Navbar = () => {
  const [showNavItemID, setShowNavItemID] = useState(null);

  return (
    <div
      style={{ borderBottom: "1px solid #ccc" }}
      className="flex py-7 items-center justify-between"
    >
      <div className="flex gap-5 items-center">
        <img src={Menu} alt="menu" />
        <img src={Logo} alt="logo" />
        <ul className="flex gap-8 ml-7">
          {categories.map((x, index) => (
            <li
              key={index}
              value={x.id}
              className="relative cursor-pointer"
              onMouseEnter={(e) => {
                setShowNavItemID(e.target.value);
              }}
              onMouseLeave={() => {
                setShowNavItemID(null);
              }}
            >
              {x.title}
              {showNavItemID === x.id && (
                <span
                  className="absolute w-full border-2 border-customOrange left-0"
                  style={{ top: "55px" }}
                ></span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <img src={Cart} alt="cart" className="h-6 w-6 cursor-pointer" />
        <img
          src={Avatar}
          alt="avatar"
          className="border border-transparent h-9 w-9 hover:border-customOrange duration-200 cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
