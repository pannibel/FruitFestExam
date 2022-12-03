import React from "react";
import { useState, useEffect } from "react";
function SingleBand(props) {
  const [likedBand, setLikedBand] = useState(true);
  function likeBand() {
    setLikedBand(!likedBand);
    // props.data.liked = JSON.stringify(likedBand);
    // console.log(likedBand);
  }

  return (
    <>
      <h2>{props.data.name}</h2>
      <h3>{props.data.genre}</h3>
      <h6>{JSON.stringify(likedBand)}</h6>
      <button onClick={likeBand}>like it</button>
      <h5>{props.data.name}</h5>
      <img src={props.data.logo} alt={props.data.logoCredits}></img>
    </>
  );
}

export default SingleBand;
