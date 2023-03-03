import "./App.css";
import Header from "./components/header/Header";
import SideNav from "./components/sidenav/SideNav";
import BackDrop from "./components/backdrop/BackDrop";
import { useState } from "react";
import useWindowDimensions from "./hooks/useWindowSize";

function App() {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  const { width } = useWindowDimensions();
  return (
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
    </div>
  );
}

export default App;
