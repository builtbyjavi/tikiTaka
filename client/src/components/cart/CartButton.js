import React from "react";
import { GrCart } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { headerActions, bgActions } from "../../store/ui-slice";
import "./CartButton.css";

const CartButton = () => {
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.cartTotalQuantity);
  const showCart = useSelector((state) => state.header.showCart);

  const toggleShowCart = () => {
    dispatch(bgActions.isDarkBg(!showCart));
    dispatch(headerActions.toggleCart());
  };

  return (
    <button className="btn border-0 py-0" onClick={toggleShowCart}>
      <div className="position-relative p-0 m-0">
        <span className="cart-icon">
          <GrCart />
        </span>

        <span className="position-absolute top-0 start-50 translate-middle-y badge bg-light text-dark">
          {cartTotal}
        </span>
      </div>
    </button>
  );
};

export default CartButton;
