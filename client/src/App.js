import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductShow from "./components/home/ProductShow";
import Home from "./components/home/Home";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/products/:id" element={<ProductShow />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
};

export default App;
