import React from "react";
import { Routes, Route } from "react-router-dom";
import RecordList from "./components/recordList";
import ProductShow from "./components/ProductShow";
import Home from "./components/Home";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/products/:id" element={<ProductShow />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
