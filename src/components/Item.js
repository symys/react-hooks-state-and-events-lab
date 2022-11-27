import React, { useState } from "react";

function Item({ name, category }) {
  const [cartState, setCart] = useState(true)
  const currentState = cartState ? "" : "in-cart"
  const cartBtnState = cartState ? "Add to Cart" :"Remove From Cart"

  function addToCart() {
    setCart(!cartState)
  }

  return (
    <li className={currentState}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={() => addToCart()}>{cartBtnState}</button>
    </li>
  );
}

export default Item;
