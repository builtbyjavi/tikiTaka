import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const Form = (props) => {
  const quantityRef = useRef();
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    event.preventDefault();

    if (
      quantityRef.current.value === "Qty" ||
      !document.querySelector("input[name=size]:checked")
    ) {
      alert("Please Enter Valid Size && Quantity :)");
      return;
    }

    const size = document.querySelector("input[name=size]:checked").value;
    const quantity = quantityRef.current.value;

    dispatch(
      cartActions.addToCart({
        title: props.product.name,
        price: props.product.price,
        quantity: parseInt(quantity),
        size,
        id: props.product._id,
      })
    );
    dispatch(cartActions.isEmpty(false));
    document.getElementById("reg-form").reset();
  };
  return (
    <React.Fragment>
      <form onSubmit={addToCartHandler} id="reg-form">
        <div className="py-4">
          <h4>Size</h4>
          <div className="input-group">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="small"
                name="size"
                value="S"
              />
              <label className="form-check-label" htmlFor="small">
                S
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="medium"
                name="size"
                value="M"
              />
              <label className="form-check-label" htmlFor="medium">
                M
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="large"
                name="size"
                value="L"
              />
              <label className="form-check-label" htmlFor="large">
                L
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-4">
            <select className="form-select" aria-label="Qty" ref={quantityRef}>
              <option defaultValue>Qty</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="col-8 px-2">
            <button type="submit" className="btn btn-outline-dark w-100">
              {" "}
              Add To Cart
            </button>
          </div>
        </div>
        <div className="pt-5">
          <p className="mb-1 fw-bold">Description</p>
          <p className="fw-light">{props.product.description}</p>
        </div>
      </form>
    </React.Fragment>
  );
};

export default Form;
