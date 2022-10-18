import classes from "./CartItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const { title, price, size, quantity, id } = props.item;
  const cartTotalQuantity = useSelector(
    (state) => state.cart.cartTotalQuantity
  );
  const total = quantity * price;
  const dispatch = useDispatch();

  const incrementHandler = () => {
    if (quantity < 10) {
      dispatch(cartActions.incrementItem(id));
    } else {
      alert("Max Item Quantity!");
    }
  };

  const decrementHandler = () => {
    if (cartTotalQuantity > 1) {
      dispatch(cartActions.decrementItem(id));
    } else {
      dispatch(cartActions.isEmpty(true));
    }
  };

  return (
    <li className={`${classes.item} border-bottom border-2 border-dark`}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className="text-start pb-2">
        <h5>
          Size: <span className="fw-light">{size}</span>
        </h5>
      </div>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button
            className="border border-1 border-dark text-dark"
            onClick={decrementHandler}
          >
            -
          </button>
          <button
            className="border border-1 border-dark text-dark"
            onClick={incrementHandler}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
