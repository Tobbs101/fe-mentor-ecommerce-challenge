import "./App.css";
import Header from "./components/header/Header";
import SideNav from "./components/sidenav/SideNav";
import BackDrop from "./components/backdrop/BackDrop";
import { useState } from "react";
import useWindowDimensions from "./hooks/useWindowSize";
import { CartContext } from "../src/context/CartContext";
import Items from "./components/items/Items";

function App() {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const [toggleBackDrop, setToggleBackDrop] = useState(false);
  const [imgBackDrop, setImgBackDrop] = useState(false);
  const { width } = useWindowDimensions();
  const [cartDetails, setCartDetails] = useState({});
  console.log(toggleBackDrop);
  console.log("img", imgBackDrop);

  return (
    <CartContext.Provider value={{ cartDetails, setCartDetails }}>
      <div
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          position: "relative",
          minHeight: "100vh",
        }}
      >
        {width < 745 && toggleBackDrop && <BackDrop />}
        <Header
          toggleNav={toggleSideNav}
          setToggleNav={setToggleSideNav}
          toggleBackDrop={toggleBackDrop}
          setToggleBackDrop={setToggleBackDrop}
        />
        {width < 745 && toggleSideNav && (
          <SideNav
            toggleNav={toggleSideNav}
            setToggleNav={setToggleSideNav}
            toggleBackDrop={toggleBackDrop}
            setToggleBackDrop={setToggleBackDrop}
          />
        )}
        <Items imgBackDrop={imgBackDrop} setImgBackDrop={setImgBackDrop} />
      </div>
    </CartContext.Provider>
  );
}

export default App;
