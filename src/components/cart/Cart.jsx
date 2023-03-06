import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ({ width }) => {
  const { cartDetails } = useContext(CartContext);

  console.log(cartDetails);

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
