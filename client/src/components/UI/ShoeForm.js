import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ShoeForm = (props) => {
  const quantityRef = useRef();
  const sizeRef = useRef();
  const dispatch = useDispatch();

  const addToCartHandler = (event) => {
    event.preventDefault();

    if (
      quantityRef.current.value === "Qty" ||
      sizeRef.current.value === "size"
    ) {
      alert("Please Enter Valid Size && Quantity :)");
      return;
    }

    dispatch(
      cartActions.addToCart({
        title: props.product.name,
        price: props.product.price,
        quantity: parseInt(quantityRef.current.value),
        size: sizeRef.current.value,
        id: props.product._id,
      })
    );

    dispatch(cartActions.isEmpty(false));
    document.getElementById("shoe-form").reset();
  };

  return (
    <form onSubmit={addToCartHandler} id="shoe-form">
      <div>
        <h5 className="fw-light py-4 d-inline-block ">size: </h5>

        <select
          className="form-select d-inline-block w-25 ms-3"
          aria-label="select"
          ref={sizeRef}
        >
          <option defaultValue>size</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>

      <div className="form d-flex flex-row">
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
  );
};

export default ShoeForm;
