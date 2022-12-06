import React from "react";
import { useRef, useState } from "react";

function GuestInfo(props) {
  const theForm = useRef(null);
  let i = 0;

  return (
    
    <div>
      <div>
        <h3>Items</h3>
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
      </div>

      <h1>Guest Info</h1>
      <form ref={theForm} className="inputForm">
        {[...Array(props.guestNumber)].map((elementInArray, index) => (
          <div className="" key={i++}>
            <h3>Guest info {i + 1}</h3>
            <input
              defaultValue={""}
              type="text"
              name="fullname"
              id="form-fullname"
              placeholder="Full name"
            />
            <input
              defaultValue={""}
              type="email"
              name="email"
              id="form-email"
              placeholder="Email address"
            />
          </div>
        ))}
      </form>

      <button onClick={props.changePage} name="next">
        Next
      </button>
    </div>
  );
}

export default GuestInfo;
