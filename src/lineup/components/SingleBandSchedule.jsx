import React from "react";
import { useState, useEffect } from "react";

function SingleBandSchedule(props) {
  const [likedBand, setLikedBand] = useState(true);
  function likeBand() {
    setLikedBand(!likedBand);
  }

  function pickImage(x) {
    if (x.includes("https://")) {
      return <img src={x} className="imgSingleBand"></img>;
    } else if (
      x.includes("png") ||
      x.includes("jpg") ||
      x.includes("JPG") ||
      x.includes("svg")
    ) {
      return (
        <img
          src={"http://localhost:8080/logos/" + x}
          className="imgSingleBand"
        ></img>
      );
    }
  }

  console.log(props.data[1]);
  return (
    <div>
      <h3>{props.data[0]}</h3>
      {props.data[1].map((el) => {
        return (
          <li>
            <h3>{el.act}</h3>
            <h3>{el.stage}</h3>
            {pickImage(`${el.logo}`)}
          </li>
        );
      })}
    </div>
  );
}

export default SingleBandSchedule;
