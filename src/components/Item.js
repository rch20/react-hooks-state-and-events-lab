import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState([]);
  const [inCart, setInCart] = useState(false);
  const addToCart = () => {
    setCart(name);

    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "remove " : "add"} onClick={addToCart}>
        {!inCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
