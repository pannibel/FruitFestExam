import React from "react";
import { useRef, useState } from "react";

function GuestInfo(props) {
  console.log(props.guestInfo);
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
    <div id="productList" className="box">
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
        }}
      >
        {[...Array(props.guestNumber)].map(() => (
          <div key={i++}>
            <h3>Guest {i + 1}</h3>
            <input
              type="text"
              name="fullname"
              id={i}
              placeholder="Full name"
              defaultValue={
                !props.guestInfo.length ? "" : props.guestInfo[i].name
              }
            />
            <input
              type="email"
              name="email"
              id={i}
              placeholder="Email address"
              defaultValue={
                !props.guestInfo.length ? "" : props.guestInfo[i].email
              }
            />
          </div>
        ))}
        <button
          onClick={() => {
            {
              props.setShowForm(false);
            }
          }}
        >
          Go back
        </button>
        <button name="next">Next</button>
      </form>
    </div>
  );
}

export default GuestInfo;
