import React from "react";
import { useState } from "react";
import Basket from "./Basket";
import GuestInfo from "./GuestInfo";
import PaymentDetails from "./PaymentDetails";
import Pay from "./Pay";
import Confirmation from "./Confirmation";

function CheckoutForm(props) {
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  return (
    <div>
      <h2>Checkoutform</h2>

      <GuestInfo setNextPage={setNextPage}/>
      <PaymentDetails setNextPage={setNextPage} setPreviousPage={setPreviousPage}/>
      <Pay setNextPage={setNextPage} setPreviousPage={setPreviousPage}/>
      <Confirmation setPreviousPage={setPreviousPage}/>
    </div>
  );
}

export default CheckoutForm;
