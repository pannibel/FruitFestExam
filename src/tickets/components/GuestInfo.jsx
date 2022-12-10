import React from "react";
import { useRef, useState } from "react";

function GuestInfo(props) {
  const theForm = useRef(null);
  let i = 0;

  function saveGuestInfo(e) {
    e.preventDefault();
    const nextData = [];

    for (let i = 0; i < props.guestNumber; i++) {
      nextData.push({
        name: theForm.current.elements.fullname[i].value,
        email: theForm.current.elements.email[i].value,
      });
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
