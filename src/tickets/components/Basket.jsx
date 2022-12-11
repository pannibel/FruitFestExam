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

  function totalGuests() {
    let i = 0;
    props.basket.forEach((item) => {
      if (item.type === "ticket") {
        i = i + item.amount;
      }
      props.setGuestNumber(i);
    });
  }

  return (
    <div>
      <h2>Basket</h2>
      <h3>Tickets:</h3>
      <ul>
        {props.basket.map((item) => {
          if (item.type === "ticket") {
            return (
              <li key={item.name}>
                {item.name} x {item.amount} | {item.amount * item.price},-
                <button onClick={() => props.removeFromBasket(item.name)}>
                  X
                </button>
              </li>
            );
          }
        })}
      </ul>

      <h3>Extras:</h3>
      <ul>
        {props.basket.map((item) => {
          if (item.type === "extra") {
            return (
              <li key={item.name}>
                {item.name} | {item.amount * item.price},-
                <button onClick={() => props.removeFromBasket(item.name)}>
                  X
                </button>
              </li>
            );
          }
        })}
      </ul>

      <h3>Camping spot:</h3>
      <ul>
        {props.basket.map((item) => {
          if (item.type === "camping spot") {
            return (
              <li key={item.name}>
                {item.name}, {item.amount * item.price},-
                <button
                  onClick={() => {
                    props.removeFromBasket(item.name);
                    props.setSpotAdded(false);
                  }}
                >
                  X
                </button>
              </li>
            );
          }
        })}
      </ul>

{/*       <h3>Subtotal: {totalPrice()},-</h3>
      <h3>Booking fee: 99,-</h3> */}
      <h3>Total: {totalPrice()},-</h3>

      <button
        onClick={() => {
          {
            props.setShowForm(true);
            totalGuests();
          }
        }}
      >
        Checkout
      </button>
    </div>
  );
}

export default Basket;
