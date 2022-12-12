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
    <div id="basketCont">
      <div id="basket">
        <h3>Basket</h3>
        <h4>Tickets:</h4>
        <div>
          {props.basket.map((item) => {
            if (item.type === "ticket") {
              return (
                <div key={item.name}>
                  {item.name} x {item.amount}
                  <div className="ticketBasket">
                    <div>{item.amount * item.price},-</div>
                    <button
                      onClick={() => props.removeFromBasket(item.name)}
                      className="basketBtnRmv"
                    ></button>
                  </div>{" "}
                </div>
              );
            }
          })}
        </div>

        <h4>Extras:</h4>
        <div>
          {props.basket.map((item) => {
            if (item.type === "extra") {
              return (
                <div key={item.name}>
                  {item.name}
                  <div className="ticketBasket">
                    {item.amount * item.price},-
                    <button
                      onClick={() => props.removeFromBasket(item.name)}
                      className="basketBtnRmv"
                    ></button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <h4>Camping spot:</h4>
        <div>
          {props.basket.map((item) => {
            if (item.name === "campingSpot") {
              return (
                <div key={item.type} className="ticketBasket">
                  {item.type}
                  <button
                    onClick={() => {
                      props.removeFromBasket(item.name);
                      props.setSpotAdded(false);
                    }}
                    className="basketBtnRmv"
                  ></button>
                </div>
              );
            }
          })}
        </div>

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
    </div>
  );
}

export default Basket;
