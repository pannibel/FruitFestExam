import React from "react";

function Confirmation(props) {
  return (
    <div>
      <h1>Confirmation of purchase</h1>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>

      <button onClick={props.setPreviousPage}>Back</button>
      <button onClick={props.setNextPage}>Next</button>
    </div>
  );
}

export default Confirmation;
