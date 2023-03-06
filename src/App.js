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
  const { width } = useWindowDimensions();
  const [cartDetails, setCartDetails] = useState({});
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
        {width < 745 && toggleSideNav && <BackDrop />}
        <Header toggleNav={toggleSideNav} setToggleNav={setToggleSideNav} />
        {width < 745 && toggleSideNav && (
          <SideNav toggleNav={toggleSideNav} setToggleNav={setToggleSideNav} />
        )}
        <Items />
      </div>
    </CartContext.Provider>
  );
}

export default App;
