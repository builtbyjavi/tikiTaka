import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductShow from "./components/home/ProductShow";
import Home from "./components/home/Home";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import About from "./components/about/About";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/products/:id" element={<ProductShow />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
