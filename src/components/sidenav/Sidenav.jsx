import React from "react";
import { categories } from "../header/categories";
import Close from "../../assets/icon-close.svg";

const SideNav = ({
  toggleNav,
  setToggleNav,
  toggleBackDrop,
  setToggleBackDrop,
}) => {
  return (
    <div
      className="absolute bg-white h-full p-7 top-0 left-0"
      style={{ width: "70%", opacity: "unset", zIndex: "20" }}
    >
      <button
        onClick={() => {
          setToggleNav(!toggleNav);
          setToggleBackDrop(!toggleBackDrop);
        }}
      >
        <img src={Close} alt="close" className="mb-20" />
      </button>
      <ul>
        {categories.map((x, index) => (
          <li key={index} className="mb-7 font-bold text-darkBlue text-xl">
            {x.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
