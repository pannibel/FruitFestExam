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
    // <div>
    <div id="productList" className="box">
      <h3>Ticket Owners:</h3>
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
            <h3 className="GuestGuest">Guest {i + 1}</h3>
            <label htmlFor="fullname" className="labelGuestList">
              Full Name:
            </label>
            <div className="formInputCont ">
              <div>
                <input
                  type="text"
                  name="fullname"
                  id={i}
                  placeholder="full name"
                />
              </div>
            </div>

            <label htmlFor="fullname" className="labelGuestList">
              E-mail:
            </label>
            <div className="formInputCont ">
              <div>
                <input type="email" name="email" id={i} placeholder="e-mail" />
              </div>
            </div>
          </div>
        ))}
        <button
          className="campIdle"
          onClick={() => {
            {
              props.setShowForm(false);
            }
          }}
        >
          Go back
        </button>
        <button className="campIdle" name="next">
          Next
        </button>
      </form>
    </div>
    // </div>
  );
}

export default GuestInfo;
