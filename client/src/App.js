import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Cart from "./components/cart/Cart";

const Home = React.lazy(() => import("./components/home/Home"));
const ProductShow = React.lazy(() => import("./components/home/ProductShow"));
const About = React.lazy(() => import("./components/about/About"));
const NotFound = React.lazy(() => import("./components/notFound/NotFound"));
const AllProducts = React.lazy(() =>
  import("./components/products/AllProducts")
);

const App = () => {
  const showCart = useSelector((state) => state.header.showCart);
  return (
    <React.Fragment>
      <Navbar />
      {showCart && <Cart />}
      <Suspense>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<AllProducts />} />
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
