import React, { useState } from "react";
import { items } from "./cartItems";
import useWindowDimensions from "../../hooks/useWindowSize";

const Items = () => {
  const [activeItemID, setActiveItemID] = useState(1);
  const { width } = useWindowDimensions();

  //   console.log(activeItemID);
  console.log(width);

  return (
    <div
      className={
        width > 650
          ? "flex items-center justify-between w-full border border-red-500"
          : "flex items-center justify-between w-full border border-red-500 flex-col"
      }
    >
      <div
        className={
          width > 1200
            ? "flex items-center justify-between flex-col flex-1 border border-green-500"
            : "flex items-center justify-between flex-col flex-1 border border-green-500 p-2"
        }
      >
        <div className={width > 1200 ? "flex-1 px-20 py-5" : "flex-1"}>
          <img
            src={items[activeItemID - 1].item}
            alt="product1"
            className="rounded-lg cursor-pointer"
          />
        </div>
        {width > 650 && (
          <div className={width > 1200 ? "w-full px-20" : "w-full mt-2"}>
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
        )}
      </div>
      <div className="flex-1">
        <p>SNEAKER COMPANY</p>
      </div>
    </div>
  );
};

export default Items;
