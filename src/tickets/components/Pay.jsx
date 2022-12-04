import React from "react";

function Pay(props) {
  return (
    <div>
      <h1>Pay</h1>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <p>Lorem Ipsum</p>
      <button onClick={props.changePage} name="back">Back</button>
      <button onClick={props.changePage} name="next">Next</button>
    </div>
  );
}

export default Pay;
