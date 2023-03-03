import React, { useState } from "react";
import { categories } from "./categories";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import Menu from "../../assets/icon-menu.svg";
import useWindowDimensions from "../../hooks/useWindowSize";

const Navbar = () => {
  const [showNavItemID, setShowNavItemID] = useState(null);
  const { width } = useWindowDimensions();

  console.log(width);

  return (
    <div
      style={{ borderBottom: "1px solid #ccc" }}
      className="flex py-7 items-center justify-between px-2"
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
        <span className="flex items-center justify-center cursor-pointer hover:bg-slate-100 border border-transparent hover:border-slate-100 h-9 w-9 rounded-full">
          <img src={Cart} alt="cart" className="" />
        </span>

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
