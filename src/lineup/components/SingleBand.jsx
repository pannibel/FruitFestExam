import React from "react";

function SingleBand(props) {
  function likeBand() {
    props.likeBand(props.like);
  }
  return (
    <>
      {/* <div>SingleBand</div> */}
      <h2>{props.data.name}</h2>
      <h3>{props.data.genre}</h3>
      <h4>{props.data.genre}</h4>
      <button onClick={likeBand}>like it</button>
      <h5>{props.data.name}</h5>
      <img src={props.data.logo} alt={props.data.logoCredits}></img>
    </>
  );
}

export default SingleBand;
