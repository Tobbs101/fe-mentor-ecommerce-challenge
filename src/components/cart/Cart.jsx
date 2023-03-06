import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { items } from "../items/cartItems";
import Delete from "../../assets/icon-delete.svg";

const Cart = ({ width }) => {
  const { cartDetails } = useContext(CartContext);

  console.log(cartDetails);

  if (cartDetails.itemQuantity > 0) {
    return (
      <div
        className="flex items-start justify-center flex-col absolute bg-white rounded-lg"
        style={{
          minHeight: "200px",
          width: width > 744 ? "370px" : width - 20,
          right: width > 1440 ? "0px" : "10px",
          top: width > 744 ? "75px" : "105px",
          boxShadow: "5px 5px 40px 5px #ccc",
          zIndex: "100",
        }}
      >
        <div
          className="w-full py-3 px-5"
          style={{ borderBottom: "1px solid #e5e5e5" }}
        >
          <h1 className="font-bold text-darkBlue">Cart</h1>
        </div>
        <div className="flex-1 w-full flex flex-col items-start p-5 justify-between">
          <div className="w-full flex items-center justify-between">
            <div className="flex items-center gap-1">
              <img
                src={items[0].thumbNail}
                alt="item"
                className="w-auto rounded-lg"
                style={{ height: "55px" }}
              />
              <div
                className=" px-1 flex flex-col items-start justify-between"
                style={{ height: "55px" }}
              >
                <p className="text-customGray">{cartDetails.name}</p>
                <div className="text-customGray">
                  ${cartDetails.price}.00 x {cartDetails.itemQuantity}{" "}
                  <b className="text-darkBlue">
                    ${cartDetails.itemQuantity * cartDetails.price}.00
                  </b>
                </div>
              </div>
            </div>
            <img src={Delete} alt="delete" className="cursor-pointer" />
          </div>
          <button className="w-full bg-customOrange border border-customOrange rounded-md text-xs text-white py-3">
            Checkout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-between flex-col absolute bg-white rounded-lg"
      style={{
        minHeight: "200px",
        width: width > 744 ? "370px" : width - 20,
        right: width > 1440 ? "0px" : "10px",
        top: width > 744 ? "75px" : "105px",
        boxShadow: "5px 5px 40px 5px #ccc",
        zIndex: "100",
      }}
    >
      <div
        className="w-full py-3 px-5"
        style={{ borderBottom: "1px solid #e5e5e5" }}
      >
        <h1 className="font-bold text-darkBlue">Cart</h1>
      </div>
      <div className="flex-1 w-full flex items-center justify-center">
        <p className="text-slate-400 font-bold">Your cart is empty.</p>
      </div>
    </div>
  );
};

export default Cart;
