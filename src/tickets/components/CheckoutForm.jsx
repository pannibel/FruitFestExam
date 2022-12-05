import React from "react";
import { useState } from "react";
import Basket from "./Basket";
import GuestInfo from "./GuestInfo";
import PaymentDetails from "./PaymentDetails";
import Pay from "./Pay";
import Confirmation from "./Confirmation";

function CheckoutForm(props) {
  const [state, setState] = useState(1);

  function changePage(e) {
    e.preventDefault();

    if (e.target.name === "next") {
      setState(state+1)
    };
    if (e.target.name === "back") {
      setState(state-1)
    };
  }

  return (
    <div>
      <h2>Checkoutform</h2>
      {state == 1 ? <GuestInfo changePage={changePage}/> : ""}
      {state == 2 ? <PaymentDetails changePage={changePage}/> : ""}
      {state == 3 ? <Pay changePage={changePage} /> : ""}
      {state == 4 ? <Confirmation changePage={changePage}/> : ""}
    </div>
  );
}

export default CheckoutForm;
