import React from "react";
import { useState, useEffect } from "react";
import OneBand from "./OneBand";

function SingleBand(props) {
  // console.log(props.data.name[0]);
  // props.data[1].map((el) => {
  //   if (el.act !== "break") {
  //     setBreak(!isBreak);
  //   }
  // });

  const handleClick = (e) => {
    e.currentTarget.classList.toggle("buttRed");
  };

  let imageDir = props.data.logo;
  function pickImage() {
    if (!imageDir.includes("https://")) {
      imageDir = "http://localhost:8080/logos/" + props.data.logo;
    }
  }
  pickImage();


  return (
    <div>

      {props.data.hasOwnProperty("letter") ? (
        <div className="bandslistLetter">
          <p>{props.data.letter}</p>
        </div>
      ) : (
        <div className="singleBandCont" onClick={() => props.openOneBand(props.data)}>
          {" "}
          <img
            src={imageDir}
            // alt={props.data.logoCredits}
            className="imgSingleBand"
            alt="img_singleband"
          ></img>
          <h4>{props.data.name}</h4>
          <div className="likeBtn">
            <button
              className="buttBlue"
              onClick={(e) => {
                handleClick(e);
              }}
              value="like"
            >{/* {likedBand ? "like it" : "liked"} */}
            </button>
            {/*         <div className={likedBand ? "buttBlue" : "buttRed"}>
        {/* {JSON.stringify(likedBand)} }
      </div> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBand;
