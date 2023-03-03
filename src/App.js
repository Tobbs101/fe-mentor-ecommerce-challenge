import "./App.css";
import Header from "./components/header/Header";
import Sidenav from "./components/sidenav/Sidenav";
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
      <Header toggleNav={toggleSideNav} setToggleNav={setToggleSideNav} />
      <Sidenav toggleNav={toggleSideNav} />
    </div>
  );
}

export default App;
