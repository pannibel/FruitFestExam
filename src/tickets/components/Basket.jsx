import React from "react";
import { useState } from "react";

function Basket(props) {
  function totalPrice() {
    let total = 0;
    props.basket.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <div>
      <h2>Basket</h2>
      <h3>Tickets:</h3>
      <ul>
        {props.basket.map((item) => (
          <li key={item.name}>
            {item.name} {item.amount}, {item.amount * item.price},-
            <button onClick={() => props.removeFromBasket(item.name)}>X</button>
          </li>
        ))}
      </ul>
      <h3>Total: {totalPrice()},-</h3>
      <button onClick={() => props.setShowForm(true)}>Checkout</button>
    </div>
  );
}

export default Basket;
