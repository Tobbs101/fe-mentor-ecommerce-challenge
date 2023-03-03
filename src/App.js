import "./App.css";
import Header from "./components/header/Header";
import Sidenav from "./components/sidenav/Sidenav";
import BackDrop from "./components/backdrop/BackDrop";
import { useState } from "react";

function App() {
  const [toggleSideNav, setToggleSideNav] = useState(false);
  return (
    <div
      style={{
        maxWidth: "1440px",
        margin: "0 auto",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <BackDrop toggleNav={toggleSideNav} />
      <Header toggleNav={toggleSideNav} setToggleNav={setToggleSideNav} />
      <Sidenav toggleNav={toggleSideNav} setToggleNav={setToggleSideNav} />
    </div>
  );
}

export default App;
