import React from "react";
import { GrCart } from "react-icons/gr";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="position-relative p-0 m-0">
      <span className="cart-icon">
        <GrCart />
      </span>

      <span className="position-absolute top-0 start-50 translate-middle-y badge rounded-circle bg-danger">
        0
      </span>
    </div>
  );
};

export default Cart;
