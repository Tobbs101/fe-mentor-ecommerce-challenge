import React, { useState } from "react";
import { items } from "./cartItems";

const Items = () => {
  const [activeItemID, setActiveItemID] = useState(1);
  return (
    <div className="flex items-center justify-between w-full border border-red-500">
      <div className="flex items-center justify-between flex-col flex-1">
        <div className="flex-1 px-20 py-5">
          <img src={items[0].item} alt="product1" className="rounded-lg" />
        </div>
        <div className="w-full px-20">
          <ul className="flex items-center justify-between flex-row gap-8">
            {items.map((x) => (
              <li className="rounded-lg overflow-hidden">
                <img src={x.thumbNail} key={x.id} alt={"thumbnail" + x.id} />
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
