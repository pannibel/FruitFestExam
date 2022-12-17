import React from "react";

function Confirmation(props) {
  return (
    <div id="productList " className="confirmation box">
      <h2>Payment Succesfull</h2>
      <h1>Thank you for your purchase!</h1>
      <h2>Your tickets have been sent to your email address.</h2>
      <a className="linkMockup" href={`/`}>
        {" "}
        <button className="confirmation campIdle">
          Go back to the main page
        </button>
      </a>
    </div>
  );
}

export default Confirmation;
