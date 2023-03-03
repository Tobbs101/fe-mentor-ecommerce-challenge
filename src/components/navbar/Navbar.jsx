import React from "react";
import { categories } from "./categories";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";

const Navbar = () => {
  return (
    <div
      style={{ borderBottom: "1px solid #ccc" }}
      className="flex py-7 items-center justify-between"
    >
      <div className="flex gap-10">
        <img src={Logo} alt="logo" />
        <ul className="flex gap-8">
          {categories.map((x, index) => (
            <li key={index} className="cursor-pointer">
              {x.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-6 items-center">
        <img src={Cart} alt="cart" className="h-6 w-6 cursor-pointer" />
        <img
          src={Avatar}
          alt="avatar"
          className="border border-transparent h-8 w-8 hover:border-customOrange duration-200 cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
