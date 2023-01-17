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
       <button
            className="gobackBtn"
            onClick={() => {
              {
                props.setShowForm(false);
              }
            }}>{""}</button>
      <h2>Ticket owners</h2>
      <p>Please, provide us with the name <br />and email address for the owner <br />of each ticket.</p>
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
            <h3 className="GuestGuest">Ticket owner {i + 1}</h3>
            <label htmlFor="fullname" className="labelGuestList">
              Full Name:
            </label>
            <div className="formInputCont ">
              <div>
                <input
                  type="text"
                  name="fullname"
                  id={i}
                  placeholder="e.g. Harry Truman"
                  required
                />
              </div>
            </div>

            <label htmlFor="fullname" className="labelGuestList">
              E-mail:
            </label>
            <div className="formInputCont ">
              <div>
                <input
                  type="email"
                  name="email"
                  id={i}
                  placeholder="example@example.com"
                  required
                />
              </div>
            </div>
          </div>
        ))}
        <div className="checkoutBtns">
          <button className="nextBtn" name="next">{""}</button>
        </div>
      </form>
    </div>
  );
}

export default GuestInfo;
