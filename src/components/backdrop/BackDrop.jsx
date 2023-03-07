import React from "react";

const BackDrop = () => {
  return (
    // <div
    //   className="absolute bg-customBlack w-full h-full top-0 left-0"
    //   style={{ opacity: "0.5", zIndex: "10" }}
    // ></div>
    <div
      className="bg-customBlack"
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        opacity: 0.5,
        zIndex: 10,
      }}
    ></div>
  );
};

export default BackDrop;
