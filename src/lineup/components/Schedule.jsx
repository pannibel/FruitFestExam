import React from "react";
import SingleBandSchedule from "./SingleBandSchedule";
import OneBand from "./OneBand";
import { useState, useEffect } from "react";
import ImageTest from "../../assets/logo2.svg";
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
                el.liked = y.liked;
              }
            });
            el.stage = item[0];
            testArr.push(el);
          });
        }
      });
    });

    testArr2 = testArr.reduce(function (r, a) {
      r[a.start] = r[a.start] || [];
      r[a.start].push(a);
      return r;
    }, {});

    console.log(testArr2);
  }

  console.log(testArr);

  playingMidgard();

  function checkDay(value) {
    if (schedDay === "mon") {
      if (value === "mon") return "mon_on";
    } else if (schedDay === "tue") {
      if (value === "tue") return "tue_on";
    } else if (schedDay === "wed") {
      if (value === "wed") return "wed_on";
    } else if (schedDay === "thu") {
      if (value === "thu") return "thu_on";
    } else if (schedDay === "fri") {
      if (value === "fri") return "fri_on";
    } else if (schedDay === "sat") {
      if (value === "sat") return "sat_on";
    } else if (schedDay === "sun") {
      if (value === "sun") return "sun_on";
    }
  }

  return (
    <div className="skedgeCont">
      <img
        className="logo_small"
        src={ImageTest}
        alt="big logo of the festival"
      ></img>

      {/* <div className="searchbarCont">
        <input
          type="text"
          name="searchbar"
          placeholder="search..."/>
        <button
          className="searchBtn"
          button-name="search"
        ></button>
      </div> */}

      <div id="weekDaysCont">
        <div className="weekDays">
          <button
            onClick={() => setSchedDay("mon")}
            className={schedDay === "mon" ? checkDay("mon") : "mon_off"}
          ></button>
          <button
            onClick={() => setSchedDay("tue")}
            className={schedDay === "tue" ? checkDay("tue") : "tue_off"}
          ></button>
          <button
            onClick={() => setSchedDay("wed")}
            className={schedDay === "wed" ? checkDay("wed") : "wed_off"}
          ></button>
          <button
            onClick={() => setSchedDay("thu")}
            className={schedDay === "thu" ? checkDay("thu") : "thu_off"}
          ></button>
          <button
            onClick={() => setSchedDay("fri")}
            className={schedDay === "fri" ? checkDay("fri") : "fri_off"}
          ></button>
          <button
            onClick={() => setSchedDay("sat")}
            className={schedDay === "sat" ? checkDay("sat") : "sat_off"}
          ></button>
          <button
            onClick={() => setSchedDay("sun")}
            className={schedDay === "sun" ? checkDay("sun") : "sun_off"}
          ></button>
        </div>
      </div>

      <div className="skedgeList">
        {Object.entries(testArr2).map((x, i) => {
          return (
            <SingleBandSchedule
              data={x}
              key={i}
              singleBandState={props.singleBandState}
              setSingleBandState={props.setSingleBandState}
              openOneBand={props.openOneBand}
              bands={props.bands}
            />
          );
        })}
      </div>

      <div
        className={props.singleBandState ? "oneBandCont" : "hidden"}
        onClick={props.openOneBand}
      >
        {!props.singleBandState}
        {props.singleBandState && (
          <OneBand
            openOneBand={props.openOneBand}
            openedBand={props.openedBand}
            data={props.bands}
            singleBandState={props.singleBandState}
            setSingleBandState={props.setSingleBandState}
          />
        )}
      </div>
    </div>
  );
}

export default Bandslist;
