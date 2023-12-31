import React from "react";
import PreLoader from "./components/preloader/PreLoader";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Gallery } from "./components/Gallery";
import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Contact } from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div className="App">
        <PreLoader />
        <NavBar />
        <Banner />
        <Gallery />
        <Events />

        <Contact />
        <Footer />

        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
}

export default App;
