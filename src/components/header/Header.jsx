import React, { useState, useContext } from "react";
import { categories } from "./categories";
import Logo from "../../assets/logo.svg";
import CartIcon from "../../assets/icon-cart.svg";
import Avatar from "../../assets/image-avatar.png";
import Menu from "../../assets/icon-menu.svg";
import useWindowDimensions from "../../hooks/useWindowSize";
import Cart from "../cart/Cart";
import { CartContext } from "../../context/CartContext";

const Navbar = ({ toggleNav, setToggleNav }) => {
  const [showNavItemID, setShowNavItemID] = useState(null);
  const [showCart, setShowCart] = useState(false);
  const { width } = useWindowDimensions();
  const { cartDetails } = useContext(CartContext);

  // console.log(width);
  // console.log(toggleNav);

  console.log(cartDetails);

  return (
    <div
      style={{ borderBottom: "1px solid #e5e5e5" }}
      className="relative flex py-7 items-center justify-between px-3"
    >
      {showCart && <Cart width={width} setShowCart={setShowCart} />}
      <div className="flex gap-5 items-center">
        {width < 745 && (
          <button
            className="cursor-pointer"
            onClick={() => {
              setToggleNav(!toggleNav);
            }}
          >
            <img src={Menu} alt="menu" />
          </button>
        )}
        <img src={Logo} alt="logo" />
        {width > 744 && (
          <ul className="flex gap-8 ml-7">
            {categories.map((x, index) => (
              <li
                key={index}
                value={x.id}
                className="text-customGray hover:text-darkBlue relative cursor-pointer"
                onMouseEnter={(e) => {
                  setShowNavItemID(e.target.value);
                }}
                onMouseLeave={() => {
                  setShowNavItemID(null);
                }}
              >
                {x.title}
                {showNavItemID === x.id && (
                  <span
                    className="absolute w-full border-2 border-customOrange left-0"
                    style={{ top: "56px" }}
                  ></span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <button
          className="relative flex items-center justify-center cursor-pointer hover:bg-slate-100 border border-transparent hover:border-slate-100 h-10 w-10 rounded-full"
          onClick={() => {
            setShowCart(!showCart);
          }}
        >
          {cartDetails.itemQuantity > 0 && (
            <div className="absolute top-1 right-0 bg-customOrange text-white border border-customOrange h-3 w-4 flex items-center justify-center p-1 rounded-lg">
              <p style={{ fontSize: "10px" }}>{cartDetails.itemQuantity}</p>
            </div>
          )}
          <img src={CartIcon} alt="cart" className="" />
        </button>
        <img
          src={Avatar}
          alt="avatar"
          className="border-2 border-transparent h-10 w-10 hover:border-customOrange duration-200 cursor-pointer rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
