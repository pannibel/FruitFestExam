import React from "react";
import { useRef, useState } from "react";

function GuestInfo(props) {
  const theForm = useRef(null);
  let i = 0;

  function saveGuestInfo(e) {
    console.log(props.idValue);
    e.preventDefault();
    const nextData = [];

    let names = theForm.current.elements.fullname;
    let emails = theForm.current.elements.email;

    if (props.guestNumber < 2) {
      names = [theForm.current.elements.fullname];
      emails = [theForm.current.elements.email];
    }

    for (let l = 0; l < props.guestNumber; l++) {
      nextData.push({
        name: names[l].value,
        email: emails[l].value,
      });
      props.setGuestInfo(nextData);
    }
    console.log(props.guestInfo);
  }

  return (
    <div>
      <h1>Guest Info</h1>
      <form
        ref={theForm}
        className="inputForm"
        onSubmit={(e) => {
          saveGuestInfo(e);
          props.changePage({
            preventDefault: () => {},
            target: {
              name: "next",
            },
          });
        }}>
        {[...Array(props.guestNumber)].map(() => (
          <div key={i++}>
            <h3>Guest {i + 1}</h3>
            <input
              type="text"
              name="fullname"
              id={i}
              placeholder="Full name"
              defaultValue={
                !props.guestInfo.length ?
                "" : props.guestInfo[i].name
              }
            />
            <input
              type="email"
              name="email"
              id={i}
              placeholder="Email address"
              defaultValue={
                !props.guestInfo.length ?
                "" : props.guestInfo[i].email
              }
            />
          </div>
        ))}
        <button name="next">Next</button>
      </form>

      {/* BASKET */}
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
        <ul>
          <li>Booking fee: 99,-</li>
        </ul>
        <h3>Total: {props.totalPrice() + 99},-</h3>
      </div>
    </div>
  );
}

export default GuestInfo;
