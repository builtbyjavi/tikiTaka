import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/home/Home";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";

const ProductShow = React.lazy(() => import("./components/home/ProductShow"));
const About = React.lazy(() => import("./components/about/About"));
const NotFound = React.lazy(() => import("./components/notFound/NotFound"));

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products/:id" element={<ProductShow />} />
          <Route exact path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </React.Fragment>
  );
};

export default App;
