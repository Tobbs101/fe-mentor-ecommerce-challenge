import React from "react";
import { categories } from "../header/categories";
import Close from "../../assets/icon-close.svg";

const Sidenav = ({ toggleNav, setToggleNav }) => {
  return (
    <div
      className="absolute bg-white h-full p-4 top-0 left-0"
      style={{ width: "70%", opacity: "unset", zIndex: "20" }}
    >
      <ul>
        {categories.map((x, index) => (
          <li key={index}>{x.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidenav;
