import React from "react";
import { useState, useEffect } from "react";

function CurrentBand(props) {
  const showTime = new Date().getHours();
  const hourBasedIndex = Math.floor(Math.floor(showTime) / 2) * 2;
  let showCurrentActTime =
    hourBasedIndex + ":00" + "-" + (hourBasedIndex + 2) + ":00";
  let currentHour;
  if (hourBasedIndex < 10) {
    currentHour = "0" + hourBasedIndex + ":00";
  } else {
    currentHour = hourBasedIndex + ":00";
  }

  // chekcing current day of the week
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "short",
  });

  function testForTuesday(test) {
    let returnValue = "";
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === test) {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] == dayOfWeekName.toLowerCase()) {
            console.log(currentHour);
            let result = weekDays[1].find((item) => item.start == currentHour);
            let currentAct = result.act;
            returnValue = currentAct;
          }
        });
      }
    });
    return returnValue;
  }
  // console.log(testForTuesday("Vanaheim"));

  function pickImage(x) {
    let imgObj;
    props.bands.map((el) => {
      if (el.name == x) {
        console.log(el.logo);
        if (el.logo.includes("https://")) {
          console.log(el.logo);
          imgObj = el.logo;
          // return <img src={el.logo} className="imgSingleBand" alt=""></img>;
        } else if (
          el.logo.includes("png") ||
          el.logo.includes("jpg") ||
          el.logo.includes("JPG") ||
          el.logo.includes("svg")
        ) {
          imgObj = `https://bitter-grass-7071.fly.dev/logos/ + ${el.logo}`;
        }
      }
    });
    console.log(imgObj);
    return imgObj;
  }
  return (
    <div className="anotherCont">
      <div className="homeCont">
        <img
          className="logo"
          src="./src/assets/logo2.svg"
          alt="big logo of the festival"
        ></img>
        <div className="currentlyCont">
          <h3>Now on stage</h3>

          <div>{showCurrentActTime}</div>

          <div className="currentBandBox">
            <div className="currentBandRow colorMidgard">
              <img
                src={pickImage(testForTuesday("Midgard"))}
                className="imgSingleBand"
                alt=""
              ></img>
              <div className="playerBand">{testForTuesday("Midgard")}</div>
              <div className="playerStage">Midgard</div>
            </div>

            <div className="currentBandRow  colorVanaheim">
              <img
                src={pickImage(testForTuesday("Vanaheim"))}
                className="imgSingleBand"
                alt=""
              ></img>
              <div className="playerBand">{testForTuesday("Vanaheim")}</div>
              <div className="playerStage">Vanaheim</div>
            </div>
            <div className="currentBandRow colorJotunheim">
              <img
                src={pickImage(testForTuesday("Jotunheim"))}
                className="imgSingleBand"
                alt=""
              ></img>
              <div className="playerBand">{testForTuesday("Jotunheim")}</div>
              <div className="playerStage">Jotunheim</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBand;
