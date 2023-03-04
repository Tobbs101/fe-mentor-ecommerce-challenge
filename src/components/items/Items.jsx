import React, { useState } from "react";
import { items } from "./cartItems";
import useWindowDimensions from "../../hooks/useWindowSize";
import Prev from "../../assets/icon-previous.svg";
import Next from "../../assets/icon-next.svg";
import Plus from "../../assets/icon-plus.svg";
import Minus from "../../assets/icon-minus.svg";
import CartIcon from "../../assets/icon-cart-white.svg";

const Items = () => {
  const [activeItemID, setActiveItemID] = useState(1);
  const { width } = useWindowDimensions();

  console.log(activeItemID);
  console.log(width);

  return (
    <div
      className={
        width > 650
          ? "flex items-center justify-between w-full"
          : "flex items-center justify-between w-full flex-col"
      }
    >
      <div
        className={
          width > 650
            ? "flex items-center justify-between flex-col flex-1 p-2"
            : "flex items-center justify-between flex-col flex-1"
        }
      >
        <div
          className={
            width > 1200 ? "relative flex-1 px-20 py-5" : "relative flex-1"
          }
        >
          {width < 651 && (
            <div
              className="w-full absolute flex items-center justify-between px-2"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            >
              <button
                className="bg-white h-12 w-12 rounded-full flex items-center justify-center"
                disabled={activeItemID === 1 ? true : false}
                onClick={() => {
                  setActiveItemID(activeItemID - 1);
                }}
              >
                <img src={Prev} alt="previous" className="mr-1" />
              </button>
              <button
                className="bg-white h-12 w-12 rounded-full flex items-center justify-center"
                disabled={activeItemID === items.length ? true : false}
                onClick={() => {
                  setActiveItemID(activeItemID + 1);
                }}
              >
                <img src={Next} alt="next" className="ml-1" />
              </button>
            </div>
          )}
          <img
            src={items[activeItemID - 1].item}
            alt="product1"
            className={
              width > 650 ? "rounded-lg cursor-pointer" : "cursor-pointer"
            }
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
      <div className="flex-1 p-2">
        <div
          style={{
            width: width > 1200 ? "60%" : "100%",
            padding: width > 1200 ? "0px" : "10px",
          }}
        >
          <p
            className="text-customOrange font-bold mb-3"
            style={{ fontSize: "10px" }}
          >
            SNEAKER COMPANY
          </p>
          <h1 className="text-darkBlue text-4xl font-bold mb-8">
            Fall Limited Edition Sneakers
          </h1>
          <span className="text-xs text-customGray">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </span>
          <div className="flex mt-4 items-center gap-2">
            <p className="text-darkBlue font-bold text-xl">$125.00</p>
            <p
              className="bg-paleOrange text-customOrange font-bold px-1 rounded"
              style={{ fontSize: "11px" }}
            >
              50%
            </p>
          </div>
          <p
            className="mt-1 line-through text-grayishBlue"
            style={{ fontSize: "11px" }}
          >
            $250.00
          </p>
          <div
            className={
              width > 650
                ? "flex mt-5 items-center gap-3"
                : "flex mt-5 items-center gap-3 flex-col"
            }
          >
            <div
              className={
                width > 650
                  ? "flex bg-lightGrayishBlue rounded"
                  : "w-full flex bg-lightGrayishBlue rounded"
              }
            >
              <button className="flex items-center justify-center py-2 px-3 flex-1">
                <img src={Minus} alt="minus" />
              </button>
              <p className="py-2 px-7 font-bold text-sm text-darkBlue">0</p>
              <button className="flex items-center justify-center py-2 px-3 flex-1">
                <img src={Plus} alt="plus" />
              </button>
            </div>
            <button
              className="w-full flex-1 bg-customOrange border border-customOrange py-2 px-7 rounded flex items-center justify-center text-white gap-2"
              style={{ boxShadow: "0 0 7px 0 #ccc" }}
            >
              <img
                src={CartIcon}
                alt="cart-icon"
                className="w-3 h-3 fill-white"
              />
              <p className="text-xs">Add to cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
