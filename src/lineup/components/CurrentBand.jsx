import React from "react";
import { useState, useEffect } from "react";

function CurrentBand(props) {
  const [currentMidgard, setCurrentMidgard] = useState();
  const [currentVanaheim, setCurrentVanaheim] = useState();
  const [currentJotunheim, setCurrentJotunheim] = useState();
  // chekcing current time

  const showTime = new Date().getHours();
  const hourBasedIndex = Math.floor(Math.floor(showTime) / 2) * 2;
  let showCurrentActTime = hourBasedIndex + "-" + (hourBasedIndex + 2);
  let currentHour = hourBasedIndex + ":00";
  console.log(currentHour);

  // chekcing current day of the week
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "short",
  });
  console.log(dayOfWeekName.toLowerCase());

  function playingMidgard() {
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === "Midgard") {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] === dayOfWeekName.toLowerCase()) {
            let result = weekDays[1].find((item) => item.start === currentHour);
            let currentAct = result.act;
            setCurrentMidgard(currentAct);
          }
        });
      }
    });
  }
  function playingVanaheim() {
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === "Vanaheim") {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] == dayOfWeekName.toLowerCase()) {
            let result = weekDays[1].find((item) => item.start === currentHour);
            let currentAct = result.act;
            setCurrentVanaheim(currentAct);
          }
        });
      }
    });
  }
  function playingJotunheim() {
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === "Jotunheim") {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] === dayOfWeekName.toLowerCase()) {
            let result = weekDays[1].find((item) => item.start === currentHour);
            let currentAct = result.act;
            setCurrentJotunheim(currentAct);
          }
        });
      }
    });
  }

  // console.log(currentMidgard);
  useEffect(() => {
    playingMidgard();
    playingVanaheim();
    playingJotunheim();
  }, [props.currentBand]);

  return (
    <>
      <div className="currentlyCont">
        <h3>Currently Playing:</h3>
        <div>| {showCurrentActTime}</div>
        <div className="currentBandRow" id="stageGreen">
          <div className="playerStage">MIDGARD</div>
          <div className="playerBand">| {currentMidgard}</div>
        </div>
        <div className="currentBandRow" id="stageRed">
          <div className="playerStage">VANAHEIM</div>
          <div className="playerBand">| {currentVanaheim}</div>
        </div>
        <div className="currentBandRow" id="stageBlue">
          <div className="playerStage">JOTUNHEIM</div>
          <div className="playerBand">| {currentJotunheim}</div>
        </div>
      </div>
    </>
  );
}

export default CurrentBand;
