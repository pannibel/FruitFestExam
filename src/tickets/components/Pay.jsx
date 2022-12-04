import React from "react";

function Pay(props) {
  return (
    <div>
      <h1>Pay</h1>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <button onClick={props.setPreviousPage}>Back</button>
      <button onClick={props.setNextPage}>Next</button>
    </div>
  );
}

export default Pay;
