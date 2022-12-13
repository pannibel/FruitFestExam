import React from "react";
import { useState } from "react";
import { reserveSpot } from "../../database";

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
    let area;
    props.basket.forEach((item) => {
      if (item.type === "ticket") {
        i = i + item.amount;
      }
      props.setGuestNumber(i);
    });

    props.basket.map((item) => {
      if (item.name === "campingSpot") {
        area = item.type;
      }
    });

    reserveSpot({
      area: area,
      amount: i,
    });
    console.log(area);
    console.log(i);
  }

  return (
    <div id="basketCont">
      <div id="basket">
        <h3>Basket</h3>
        <h4>Tickets:</h4>
        <div className="separateTickets">
          {props.basket.map((item) => {
            if (item.type === "ticket") {
              return (
                <div key={item.name} className="ticketItem">
                  <p>
                    {item.name} x {item.amount}
                  </p>
                  <div className="ticketBasket">
                    <p>{item.amount * item.price},-</p>
                    <button
                      onClick={() => props.removeFromBasket(item.name)}
                      className="basketBtnRmv"
                    >
                      {" "}
                    </button>
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
                <div key={item.name} className="separateTickets ticketItem ">
                  <p>{item.name}</p>
                  <div className="ticketBasket">
                    <p>{item.amount * item.price},-</p>
                    <button
                      onClick={() => props.removeFromBasket(item.name)}
                      className="basketBtnRmv"
                    >
                      {" "}
                    </button>
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
                <div key={item.type} className="ticketBasket ticketItem">
                  <p>{item.type}</p>
                  <button
                    onClick={() => {
                      props.removeFromBasket(item.type);
                      props.setSpotAdded(false);
                    }}
                    className="basketBtnRmv"
                  >
                    {" "}
                  </button>
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
              totalGuests()
            }
          }}
          className="basketCheckout"
        >
          {" "}
        </button>
      </div>
    </div>
  );
}

export default Basket;
