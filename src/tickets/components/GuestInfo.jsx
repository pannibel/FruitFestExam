import React from "react";
import { useRef, useState } from "react";

function GuestInfo(props) {
  const theForm = useRef(null);
  let i = 0;
  let singleGuest;

  function saveGuestInfo(e) {
    e.preventDefault();
    const nextData = [];

    /*     {
      [...Array(props.guestNumber)].map(() => {
        nextData.push({
          name: theForm.current.elements.fullname[0].value,
          email: theForm.current.elements.email[0].value,
        });
        props.setGuestInfo(nextData);
        console.log(props.guestInfo);
      });
    } */

    for (let i = 0; i < 100; i++) {
      nextData.push(
        (singleGuest = {
          name: theForm.current.elements.fullname[i].value,
          email: theForm.current.elements.email[i].value,
        })
      );
      props.setGuestInfo(nextData);
      console.log(props.guestInfo);
    }
  }

  function saveGuestInfo(e) {
    e.preventDefault();
    const nextData = [];
console.log(props.guestNumber)
    /*     {
      [...Array(props.guestNumber)].map(() => {
        nextData.push({
          name: theForm.current.elements.fullname[0].value,
          email: theForm.current.elements.email[0].value,
        });
        props.setGuestInfo(nextData);
        console.log(props.guestInfo);
      });
    } */

    for (let i = 0; i < props.guestNumber; i++) {
      nextData.push({
          name: theForm.current.elements.fullname[i].value,
          email: theForm.current.elements.email[i].value,
        }
      );
      props.setGuestInfo(nextData);
    }
    console.log(props.guestInfo);

  }

  return (
    <div>
      <h1>Guest Info</h1>
      <form ref={theForm} className="inputForm">
        {[...Array(props.guestNumber)].map((/* elementInArray, index */) => (
          <div key={i++}>
            <h3>Guest {i + 1}</h3>
            <input
              type="text"
              name="fullname"
              id={i}
              placeholder="Full name"
            />
            <input
              type="email"
              name="email"
              id={i}
              placeholder="Email address"
            />
          </div>
        ))}
      </form>

      <button
        onClick={(e) => {
          saveGuestInfo(e);
          props.changePage(e);
        }}
        name="next">
        Next
      </button>
    </div>
  );
}

export default GuestInfo;
