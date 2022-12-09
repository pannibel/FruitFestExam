import React from "react";
import { useState, useEffect } from "react";

function SingleBandSchedule(props) {
  const [likedBand, setLikedBand] = useState(true);
  // function likeBand() {
  //   setLikedBand(!likedBand);
  //   // props.data.liked = JSON.stringify(likedBand);
  //   // console.log(likedBand);
  // }
  // let imageDir = props.data.logo;
  // function pickImage() {
  //   if (!imageDir.includes("https://")) {
  //     imageDir = "http://localhost:8080/logos/" + props.data.logo;
  //   }
  // }
  // pickImage();
  console.log("hello");
  console.log(props.data);

  return <div className="singleBandCont">hello</div>;
}

export default SingleBandSchedule;
