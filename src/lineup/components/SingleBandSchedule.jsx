import React from "react";
import { useState, useEffect } from "react";
// import "../LineUpApp.scss";

function SingleBandSchedule(props) {
  // const [likedBand, setLikedBand] = useState(true);
  const [isBreak, setBreak] = useState(true);
  const [end, setEnd] = useState();
  // console.log(props.data);
  useEffect(() => {
    props.data[1].map((el) => {
      if (el.act !== "break") {
        setBreak(!isBreak);
      }
    });
  }, []);
  function handleClick(e) {
    e.target.classList.toggle("buttRed");
    props.data.liked = !props.data.liked;
  }
  useEffect(() => {
    props.data[1].map((el) => setEnd(el.end));
  }, []);


  // function likeBand() {
  //   setLikedBand(!likedBand);
  // }

  function pickImage(x) {
    if (x.includes("https://")) {
      return <img src={x} className="imgSingleBand" alt=""></img>;
    } else if (
      x.includes("png") ||
      x.includes("jpg") ||
      x.includes("JPG") ||
      x.includes("svg")
    ) {
      return (
        <img
          alt=""
          src={"http://localhost:8080/logos/" + x}
          className="imgSingleBand"
        ></img>
      );
    }
  }
  // console.log(props.data[1]);

  return (
    <div className="timeSlot">
      <h3 className="time">
        {props.data[0]} - {end}
      </h3>

      <div className="currentBandBox">
        {isBreak ? "break" : ""}
        {props.data[1].map((el) => {
          if (el.act !== "break") {
            return (
              <div className="contCont">
                <li className="singleBand" onClick={() => props.openOneBand(el.act)}>
                  {pickImage(`${el.logo}`)}
                  <h4 className="act">{el.act}</h4>
                  <h3
                    className={
                      el.stage == "Midgard"
                        ? "stage colorMidgard"
                        : el.stage == "Vanaheim"
                        ? "stage colorVanaheim"
                        : "stage colorJotunheim"
                    }
                  >
                    {el.stage}
                  </h3>
                </li>
                <div className="likeBtn">
                  <button
                    className={props.data.liked ? "buttRed" : "buttBlue"}
                    onClick={(e) => handleClick(e)}
                    value="like"
                  ></button>
                </div>{" "}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}

export default SingleBandSchedule;
