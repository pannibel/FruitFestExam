import React from "react";
import { useState } from "react";
import CheckoutForm from "./components/CheckoutForm";
import TicketHeader from "./components/TicketHeader";
import TicketList from "./components/TicketList";

function Tickets() {
  const [showForm, setShowForm] = useState(false);
  const [basket, setBasket] = useState([]);
  const [guestNumber, setGuestNumber] = useState(0);

  return (
    <div>
      {/* <TicketHeader /> */}
      <main>
        {!showForm && (
          <TicketList
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
            showForm={showForm}
            basket={basket}
            setGuestNumber={setGuestNumber}
            guestNumber={guestNumber}
          />
        )}
      </main>
    </div>
  );
}

export default Tickets;
