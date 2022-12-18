import React from "react";
import { useState } from "react";
import "../Tickets.scss";
import "../ticketButtons.scss";
import CheckoutForm from "./components/CheckoutForm";
import TicketHeader from "./components/TicketHeader";
import TicketList from "./components/TicketList";
import ReactDOM from "react-dom";
// npm install react-countdown --save
import Countdown from "react-countdown";

function Tickets() {
  const [idValue, setIdValue] = useState();
  const [showForm, setShowForm] = useState(false);
  const [basket, setBasket] = useState([]);
  const [guestNumber, setGuestNumber] = useState(0);

  return (
    <div>
      <img
        className="logo"
        src="../src/assets/logo.svg"
        alt="big logo of the festival"
      ></img>
      <main>
        {!showForm && (
          <TicketList
            setIdValue={setIdValue}
            idValue={idValue}
            setShowForm={setShowForm}
            className={TicketList}
            basket={basket}
            setBasket={setBasket}
            setGuestNumber={setGuestNumber}
            guestNumber={guestNumber}
          />
        )}
        {showForm && (
          <CheckoutForm
            setIdValue={setIdValue}
            idValue={idValue}
            showForm={showForm}
            setShowForm={setShowForm}
            basket={basket}
            guestNumber={guestNumber}
          />
        )}
      </main>
    </div>
  );
}

export default Tickets;
