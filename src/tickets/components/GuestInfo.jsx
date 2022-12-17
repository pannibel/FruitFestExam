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
            <h3>Guest {i + 1}</h3>

            <div className="formInputCont ">
              <div>
                <input
                  type="text"
                  name="fullname"
                  id={i}
                  placeholder="Full name"
                />
              </div>
            </div>
            <div className="formInputCont ">
              <div></div>
              <input
                type="email"
                name="email"
                id={i}
                placeholder="Email address"
              />
            </div>
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
    // </div>
  );
}

export default GuestInfo;
