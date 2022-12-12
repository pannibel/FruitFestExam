import React from "react";
import SingleBandSchedule from "./SingleBandSchedule";
import { useState, useEffect } from "react";

function Bandslist(props) {
  const [schedDay, setSchedDay] = useState("mon");

  const testArr = [];
  let testArr2 = [];

  function playingMidgard() {
    Object.entries(props.currentBand).map((item) => {
      Object.entries(item[1]).map((weekDays) => {
        // console.log(weekDays);
        if (weekDays[0] === schedDay) {
          weekDays[1].forEach((el) => {
            // console.log(props.bands);
            props.bands.forEach((y) => {
              if (y.name === el.act) {
                el.logo = y.logo;
                el.logoCredits = y.logoCredits;
              }
            });
            el.stage = item[0];
            testArr.push(el);
          });
        }
      });
    });
    // !VERSION THAT WORKS
    // testArr2 = testArr.reduce((bandsSoFar, { start, act, stage }) => {
    //   if (!bandsSoFar[start]) bandsSoFar[start] = [];
    //   bandsSoFar[start].push(act, stage);
    //   return bandsSoFar;
    // }, {});
    // !VERSION THAT WORKS
    // ? VERSION THAT IS MUCH BETTER
    testArr2 = testArr.reduce(function (r, a) {
      r[a.start] = r[a.start] || [];
      r[a.start].push(a);
      return r;
    }, {});

    // ? END
    console.log(testArr2);
  }

  console.log(testArr);

  playingMidgard();

  function checkDay(value) {
    if (schedDay === "mon") {
      if (value === "mon")
        return "mon_on"
    } else
    if (schedDay === "tue") {
      if (value === "tue")
      return "tue_on"
    } else
    if (schedDay === "wed") {
      if (value === "wed")
      return "wed_on"
    } else
    if (schedDay === "thu") {
      if (value === "thu")
      return "thu_on"
    } else
    if (schedDay === "fri") {
      if (value === "fri")
      return "fri_on"
    } else
    if (schedDay === "sat") {
      if (value === "sat")
      return "sat_on"
    } else
    if (schedDay === "sun") {
      if (value === "sun")
      return "sun_on"
    }
  }

  return (
    <div className="skedgeCont">
      <img
        className="logo_small"
        src="../src/assets/logo.svg"
        alt="big logo of the festival"></img>

      <div className="searchbarCont">
        <input
          // ref={theInput}
          type="text"
          name="searchbar"
          placeholder="search..."
        />
        <button
          className="searchBtn"
          button-name="search"
          /* onClick={searchList} */
        >
          {" "}
        </button>
      </div>

      <div className="weekDays">
        <button
          onClick={() => setSchedDay("mon")}
          className={schedDay === "mon" ? checkDay("mon") : "mon_off"}>
          
        </button>
        <button
          onClick={() => setSchedDay("tue")}
          className={schedDay === "tue" ? checkDay("tue") : "tue_off"}>
          
        </button>
        <button
          onClick={() => setSchedDay("wed")}
          className={schedDay === "wed" ? checkDay("wed") : "wed_off"}>
          
        </button>
        <button
          onClick={() => setSchedDay("thu")}
          className={schedDay === "thu" ? checkDay("thu") : "thu_off"}>
          
        </button>
        <button
          onClick={() => setSchedDay("fri")}
          className={schedDay === "fri" ? checkDay("fri") : "fri_off"}>
          
        </button>
        <button
          onClick={() => setSchedDay("sat")}
          className={schedDay === "sat" ? checkDay("sat") : "sat_off"}>
          
        </button>
        <button
          onClick={() => setSchedDay("sun")}
          className={schedDay === "sun" ? checkDay("sun") : "sun_off"}>
          
        </button>
      </div>

      <div className="skedgeList">
        {Object.entries(testArr2).map((x, index) => {
          return <SingleBandSchedule data={x} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Bandslist;

// <div>{`${x}`}</div>
