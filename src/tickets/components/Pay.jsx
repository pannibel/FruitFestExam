import React from "react";

function Pay(props) {
  return (
    <div>
      <h1>Pay</h1>
      <p>(loading screen for payment processing)</p>

      <button onClick={props.changePage} name="back">Back</button>
      <button onClick={props.changePage} name="next">Next</button>
    </div>
  );
}

export default Pay;
