import React, { useState } from "react";
import { items } from "./cartItems";

const Items = () => {
  const [activeItemID, setActiveItemID] = useState(1);

  console.log(activeItemID);

  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-between flex-col flex-1">
        <div className="flex-1 px-20 py-5">
          <img
            src={items[activeItemID - 1].item}
            alt="product1"
            className="rounded-lg cursor-pointer"
          />
        </div>
        <div className="w-full px-20">
          <ul className="flex items-center justify-between flex-row gap-8 py-1">
            {items.map((x) => (
              <li
                key={x.id}
                className={
                  activeItemID === x.id
                    ? "rounded-lg overflow-hidden cursor-pointer border-2 border-customOrange"
                    : "rounded-lg overflow-hidden cursor-pointer border-2 border-transparent"
                }
                onClick={() => {
                  setActiveItemID(x.id);
                }}
              >
                <img
                  src={x.thumbNail}
                  alt={"thumbnail" + x.id}
                  style={{ opacity: activeItemID === x.id ? "0.4" : "1" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <p>SNEAKER COMPANY</p>
      </div>
    </div>
  );
};

export default Items;
