import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { items } from "../items/cartItems";

const Cart = ({ width }) => {
  const { cartDetails } = useContext(CartContext);

  console.log(cartDetails);

  if (cartDetails.itemQuantity > 0) {
    return (
      <div
        className="flex items-start justify-center flex-col absolute bg-white rounded-lg"
        style={{
          height: "230px",
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
            <img
              src={items[0].thumbNail}
              alt="item"
              className="w-auto rounded-lg"
              style={{ height: "55px" }}
            />
            <span
              className=" px-1 flex flex-col items-start justify-between border border-red-400"
              style={{ height: "55px" }}
            >
              <p>{cartDetails.name}</p>
              <p>
                ${cartDetails.price}.00 x {cartDetails.itemQuantity}{" "}
                {cartDetails.itemQuantity * cartDetails.price}.00
              </p>
            </span>
          </div>
          <button>Checkout</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex items-center justify-between flex-col absolute bg-white rounded-lg"
      style={{
        height: "230px",
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
