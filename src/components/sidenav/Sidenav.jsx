import React from "react";
import { categories } from "../header/categories";

const Sidenav = () => {
  return (
    <div
      className="absolute bg-customBlack border border-red-500 w-full h-full top-0 left-0"
      style={{ opacity: "0.5" }}
    >
      <div className="bg-white h-full" style={{ width: "70%", opacity: "1" }}>
        <ul>
          {categories.map((x, index) => (
            <li key={index}>{x.title}</li>
          ))}
        </ul>
      </div>
      <p>Collections</p>
    </div>
  );
};

export default Sidenav;
