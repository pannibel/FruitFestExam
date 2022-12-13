import React from "react";
import { useState } from "react";
import GuestInfo from "./GuestInfo";
import PaymentDetails from "./PaymentDetails";
import Pay from "./Pay";
import Confirmation from "./Confirmation";

function CheckoutForm(props) {
  const [state, setState] = useState(1);
  const [guestInfo, setGuestInfo] = useState([]);
  const [billing, setBilling] = useState({});
  let [formValues, setFormValues] = useState({
    fullname: "",
    email: "",
  });

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
    <div className="checkoutform">
      {state == 1 ? (
        <GuestInfo
          changePage={changePage}
          guestNumber={props.guestNumber}
          guestInfo={guestInfo}
          setGuestInfo={setGuestInfo}
          formValues={formValues}
          setFormValues={setFormValues}
          basket={props.basket}
          totalPrice={totalPrice}
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
        />
      ) : (
        ""
      )}
      {/* {state == 3 ? <Pay changePage={changePage} /> : ""} */}
      {state == 3 ? (
        <Confirmation
          changePage={changePage}
          basket={props.basket}
          totalPrice={totalPrice}
        />
      ) : (
        ""
      )}
      <button
        onClick={() => {
          {
            props.setShowForm(false);
          }
        }}
      >
        Go back
      </button>
    </div>
  );
}

export default CheckoutForm;
