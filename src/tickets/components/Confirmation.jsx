import React from "react";

function Confirmation(props) {
  return (
    <div>
      <h1>Thank you for your purchase!</h1>
      <h2>Your tickets have been sent to your email address.</h2>
      <div>
        <h3>Your items:</h3>
        <ul>
          {props.basket.map((item) => {
            if (item.type === "ticket") {
              return (
                <li key={item.name}>
                  {item.name} {item.amount}, {item.amount * item.price},-
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
                  {item.name} {item.amount}, {item.amount * item.price},-
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
                  {item.name} {item.amount}, {item.amount * item.price},-
                </li>
              );
            }
          })}
        </ul>
        <h3>Total: {props.totalPrice()},-</h3>

      <button onClick={props.changePage} name="homepage">Back to homepage</button>
    </div>
    </div>
  );
}

export default Confirmation;
