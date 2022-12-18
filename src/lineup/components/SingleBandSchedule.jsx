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
  function handleClick(e, name) {
    e.target.classList.toggle("buttRed");

    props.bands.map((item) => {
      if (item.name === name) 
      item.liked = !item.liked
    })
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
          className="imgSingleBand"></img>
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
            if (!el.cancelled) {
            return (
              <div className="contCont">
                <li
                  className="singleBand"
                  onClick={() => props.openOneBand(el.act)}>
                  {pickImage(`${el.logo}`)}

                  <h4 className="act">{el.act}</h4>
                  <h3
                    className={
                      el.stage == "Midgard"
                        ? "stage colorMidgard"
                        : el.stage == "Vanaheim"
                        ? "stage colorVanaheim"
                        : "stage colorJotunheim"
                    }>
                    {el.stage}
                  </h3>
                </li>
                <div className="likeBtn">
                  <button
                    className={el.liked ? "buttRed" : "buttBlue"}
                    onClick={(e) => {
                      handleClick(e, el.act);
                      el.liked = !el.liked;
                    }}
                    value="like"></button>
                </div>{" "}
              </div>
            )} 
            
            
            else {
              return (
                <div className="cancelled_contCont" disabled={true}>
                  <li
                    className="singleBand"
                    onClick={() => props.openOneBand(el.act)}>
                    {pickImage(`${el.logo}`)}  
                    <h4 className="act">{el.act}</h4>
                    <h3
                      className={
                        el.stage == "Midgard"
                          ? "stage colorMidgard"
                          : el.stage == "Vanaheim"
                          ? "stage colorVanaheim"
                          : "stage colorJotunheim"
                      }>
                      {el.cancelled ? `${el.stage} - cancelled` : el.stage}
                    </h3>
                  </li>
                  <div className="likeBtn">
                    <button
                      className={el.liked ? "buttRed" : "buttBlue"}
                      onClick={(e) => {
                        handleClick(e, el.act);
                        el.liked = !el.liked;
                      }}
                      value="like"></button>
                  </div>{" "}
                </div>
              )
            }
          }
        })}
      </div>
    </div>
  );
}

export default SingleBandSchedule;
