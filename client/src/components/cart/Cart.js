import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import { bgActions, headerActions } from "../../store/ui-slice";

const Cart = (props) => {
  const isEmpty = useSelector((state) => state.cart.isEmpty);
  const isCheckedOut = useSelector((state) => state.cart.isCheckedOut);
  const cartState = useSelector((state) => state.cart.cartItems);
  const subtotal = useSelector((state) => state.cart.cartSubtotal);
  const showCart = useSelector((state) => state.header.showCart);
  const dispatch = useDispatch();

  const toggleShowCart = () => {
    if (isCheckedOut) {
      dispatch(cartActions.toggleCheckout());
    }
    dispatch(bgActions.isDarkBg(!showCart));
    dispatch(headerActions.toggleCart());
  };

  const checkoutHandler = () => {
    dispatch(cartActions.checkOut());
  };

  return (
    <Card
      className={`${classes.cart} bg-light position-absolute top-50 start-50 translate-middle`}
    >
      <h2>Your Shopping Cart</h2>
      {isEmpty && isCheckedOut && (
        <div>
          <p className="text-center py-3">
            Thank You For Shopping With Us! Enjoy :)
          </p>
          <div className="text-end">
            <button
              className="btn border border-1 border-secondary mx-1"
              onClick={toggleShowCart}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {isEmpty && !isCheckedOut && (
        <div>
          <p className="text-center py-3">Shopping Cart is Empty :(</p>
          <div className="text-end">
            <button
              className="btn border border-1 border-secondary mx-1"
              onClick={toggleShowCart}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {!isEmpty && (
        <div>
          <ul>
            {cartState.map((item) => (
              <CartItem
                item={{
                  title: item.title,
                  quantity: item.quantity,
                  total: item.quantity * item.price,
                  price: item.price,
                  size: item.size,
                }}
              />
            ))}
          </ul>
          <div className="text-end pt-2 pb-5">
            <h5>Subtotal: ${subtotal.toFixed(2)}</h5>
          </div>
          <div className="text-end">
            <button
              className="btn border border-1 border-secondary mx-1"
              onClick={checkoutHandler}
            >
              Checkout
            </button>
            <button
              className="btn border border-1 border-secondary mx-1"
              onClick={toggleShowCart}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default Cart;
