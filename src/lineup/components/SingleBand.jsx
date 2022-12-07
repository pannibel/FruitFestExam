import React from "react";
import { useState, useEffect } from "react";

function SingleBand(props) {
  const [likedBand, setLikedBand] = useState(true);
  function likeBand() {
    setLikedBand(!likedBand);
    // props.data.liked = JSON.stringify(likedBand);
    // console.log(likedBand);
  }
  let imageDir = props.data.logo;
  function pickImage() {
    if (!imageDir.includes("https://")) {
      imageDir = "http://localhost:8080/logos/" + props.data.logo;
    }
  }
  pickImage();

  return (
    <div className="singleBandCont">
      <img
        src={imageDir}
        // alt={props.data.logoCredits}
        className="imgSingleBand"
      ></img>
      <h4>{props.data.name}</h4>

      <div className="likeBtn">
        <button onClick={likeBand}>like it</button>
        <div>{JSON.stringify(likedBand)}</div>
      </div>
    </div>
  );
}

export default SingleBand;
