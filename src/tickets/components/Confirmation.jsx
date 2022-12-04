import React from "react";

function Confirmation(props) {
  return (
    <div>
      <h1>Confirmation of purchase</h1>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>

      <button onClick={props.changePage} name="back">Back</button>
    </div>
  );
}

export default Confirmation;
