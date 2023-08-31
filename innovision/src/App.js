import React from "react";
import PreLoader from "./components/preloader/PreLoader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
function App() {
  return (
    <>
      <PreLoader />
      <div className="App">
        <NavBar />
        <Banner />
      </div>
    </>
  );
}

export default App;
