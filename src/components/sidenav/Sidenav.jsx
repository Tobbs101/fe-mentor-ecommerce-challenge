import React from "react";
import { categories } from "../header/categories";

const Sidenav = () => {
  return (
    <div
      className="absolute bg-customBlack border border-red-500 w-full h-full top-0 left-0"
      style={{ opacity: "0.5" }}
    >
      <div
        className="absolute bg-white h-full p-4"
        style={{ width: "70%", opacity: "initial" }}
      >
        <ul>
          {categories.map((x, index) => (
            <li key={index}>{x.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidenav;
