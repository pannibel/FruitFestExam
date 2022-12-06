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

  // let Midgard = "Midgard";
  // let Vanaheim = "Vanaheim";
  // console.log(props.currentBand.Midgard);
  // let currentArray = Object.entries(props.currentBand);

  function playingMidgard() {
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === "Midgard") {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] === dayOfWeekName.toLowerCase()) {
            // console.log(weekDays[1]);
            let currentDay = weekDays[1].find(
              (day) => day.start === currentHour
            );
            // console.log(currentDay.act);
            let currentAct = currentDay.act;

            // stage.preventDefault();
            setCurrentMidgard(currentAct);
            // console.log(currentAct);
            // return currentAct;
            // console.log(currentMidgard);
            // let currentAct = currentDay.act;
          }
          // console.log(" these are midgard days", weekDays);
        });
      }
      // console.log(item);
    });
  }
  function playingVanaheim() {
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === "Vanaheim") {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] === dayOfWeekName.toLowerCase()) {
            // console.log(weekDays[1]);
            let currentDay = weekDays[1].find(
              (day) => day.start === currentHour
            );
            // console.log(currentDay.act);
            let currentAct = currentDay.act;

            // stage.preventDefault();
            setCurrentVanaheim(currentAct);
            // console.log(currentAct);
            // return currentAct;
            // console.log(currentMidgard);
            // let currentAct = currentDay.act;
          }
          // console.log(" these are midgard days", weekDays);
        });
      }
      // console.log(item);
    });
  }
  function playingJotunheim() {
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === "Jotunheim") {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] === dayOfWeekName.toLowerCase()) {
            // console.log(weekDays[1]);
            let currentDay = weekDays[1].find(
              (day) => day.start === currentHour
            );
            // console.log(currentDay.act);
            let currentAct = currentDay.act;

            // stage.preventDefault();
            setCurrentJotunheim(currentAct);
            // console.log(currentAct);
            // return currentAct;
            // console.log(currentMidgard);
            // let currentAct = currentDay.act;
          }
          // console.log(" these are midgard days", weekDays);
        });
      }
      // console.log(item);
    });
  }

  // console.log(currentMidgard);
  useEffect(() => {
    playingMidgard();
    playingVanaheim();
    playingJotunheim();
  }, [props.currentBand]);
  // playingBand(Vanaheim);

  // Object.entries(props.currentBand.Midgard).forEach((item) => {
  //   console.log(item);
  // });
  return (
    <>
      <div className="currentlyCont">
        <h3>Currently Playing:</h3>
        <div className="currentBandRow" id="stageGreen">
          <div className="playerStage">MIDGARD</div>
          <div className="playerBand">| {currentMidgard}</div>
          <div>| {currentHour}</div>
        </div>
        <div className="currentBandRow" id="stageRed">
          <div className="playerStage">VANAHEIM</div>
          <div className="playerBand">| {currentVanaheim}</div>
          <div>| {showCurrentActTime}</div>{" "}
        </div>
        <div className="currentBandRow" id="stageBlue">
          <div className="playerStage">JOTUNHEIM</div>
          <div className="playerBand">| {currentJotunheim}</div>
          <div>| {showCurrentActTime}</div>{" "}
        </div>
      </div>
    </>
  );
}

export default CurrentBand;
