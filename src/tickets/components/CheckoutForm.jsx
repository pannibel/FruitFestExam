import React from "react";
import { useState } from "react";
import GuestInfo from "./GuestInfo";
import BasketCheckout from "./BasketCheckout";
import PaymentDetails from "./PaymentDetails";
import Confirmation from "./Confirmation";

function CheckoutForm(props) {
  const [state, setState] = useState(1);
  const [guestInfo, setGuestInfo] = useState([]);
  const [billing, setBilling] = useState({});

  function changePage(e) {
    e.preventDefault();

    if (e.target.name === "next") {
      setState(state + 1);
    }
    if (e.target.name === "back") {
      setState(state - 1);
    }
    if (e.target.name === "homepage") {
      setState(0);
    }
  }

  function totalPrice() {
    let total = 0;
    props.basket.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  return (
    <div className={state == 3 ? "checkoutform2" : "checkoutform"}>
      {state == 1 ? (
        <GuestInfo
          changePage={changePage}
          guestNumber={props.guestNumber}
          guestInfo={guestInfo}
          setGuestInfo={setGuestInfo}
          basket={props.basket}
          totalPrice={totalPrice}
          setShowForm={props.setShowForm}
        />
      ) : (
        ""
      )}
      {state == 2 ? (
        <PaymentDetails
          changePage={changePage}
          billing={billing}
          setBilling={setBilling}
          basket={props.basket}
          totalPrice={totalPrice}
          idValue={props.idValue}
          setShowForm={props.setShowForm}
        />
      ) : (
        ""
      )}
      {state == 3 ? (
        <Confirmation
          changePage={changePage}
          basket={props.basket}
          totalPrice={totalPrice}
        />
      ) : (
        ""
      )}
      {state != 3 ? (
        <BasketCheckout
          changePage={changePage}
          guestNumber={props.guestNumber}
          guestInfo={guestInfo}
          setGuestInfo={setGuestInfo}
          basket={props.basket}
          totalPrice={totalPrice}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default CheckoutForm;
