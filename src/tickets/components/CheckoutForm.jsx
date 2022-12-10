import React from "react";
import { useState } from "react";
import GuestInfo from "./GuestInfo";
import PaymentDetails from "./PaymentDetails";
import Pay from "./Pay";
import Confirmation from "./Confirmation";
import App from "../../App";
import Basket from "./Basket";

function CheckoutForm(props) {
  const [state, setState] = useState(1);

  console.log(props.guestNumber);

  function changePage(e) {
    e.preventDefault();

    if (e.target.name === "next") {
      setState(state + 1);
    }
    if (e.target.name === "back") {
      setState(state - 1);
    }
    if (e.target.name === "homepage") {
      setState(0);
    }
  }

  function totalPrice() {
    let total = 0;
    props.basket.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <div className="checkoutform">
      <div>
        <h3>Items</h3>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "ticket") {
              return (
                <li key={item.name}>
                  {item.name} x {item.amount} | {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "extra") {
              return (
                <li key={item.name}>
                  {item.name} | {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "camping spot") {
              return (
                <li key={item.name}>
                  {item.name} x {item.amount} | {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <ul><li>Booking fee: 99,-</li></ul>
        <h3>Total: {totalPrice() + 99},-</h3>
      </div>
      {state == 1 ? (
        <GuestInfo
          changePage={changePage}
          guestNumber={props.guestNumber}
        />
      ) : (
        ""
      )}
      {state == 2 ? (
        <PaymentDetails
          changePage={changePage}
        />
      ) : (
        ""
      )}
      {/* {state == 3 ? <Pay changePage={changePage} /> : ""} */}
      {state == 3 ? (
        <Confirmation
          changePage={changePage}
          basket={props.basket}
          totalPrice={totalPrice}
        />
      ) : (
        ""
      )}
      <button
        onClick={() => {
          {
            props.setShowForm(false);
          }
        }}>
        Go back
      </button>
    </div>
  );
}

export default CheckoutForm;
