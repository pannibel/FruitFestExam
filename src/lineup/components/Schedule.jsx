import React from "react";
import SingleBandSchedule from "./SingleBandSchedule";
import { useState, useEffect } from "react";

function Bandslist(props) {
  const [schedDay, setSchedDay] = useState("mon");
  console.log(schedDay);
  const testArr = [];
  let testArr2 = [];
  const testArr3 = [];
  let damnObject = {};

  function playingMidgard() {
    Object.entries(props.currentBand).map((item) => {
      Object.entries(item[1]).map((weekDays) => {
        // console.log(weekDays);
        if (weekDays[0] === schedDay) {
          weekDays[1].forEach((el) => {
            // el.stage = item[0];
            testArr.push(el);
          });
        }
      });
    });
    testArr2 = testArr.reduce((bandsSoFar, { start, act }) => {
      if (!bandsSoFar[start]) bandsSoFar[start] = [];
      bandsSoFar[start].push(act);
      return bandsSoFar;
    }, {});
    console.log(testArr2);
  }

  console.log(testArr2);
  // console.log(testArr2);
  // console.log(testArr3);
  playingMidgard();
  // console.log(testArr);
  // function Timeslot({time, acts}) {}
  return (
    <div>
      <button onClick={() => setSchedDay("mon")} className="">
        mon
      </button>
      <button onClick={() => setSchedDay("tus")} className="">
        tues
      </button>
      <button onClick={() => setSchedDay("wed")} className="">
        wed
      </button>
      <button onClick={() => setSchedDay("thu")} className="">
        thur
      </button>
      <button onClick={() => setSchedDay("all")} className="">
        all
      </button>
      <div>
        {Object.entries(testArr2).map((x) => {
          // return <p>{`${x}`}</p>;
          return (
            <li>
              <h3>{`${x[0]}`}</h3>
              <h5>{`${x[1][0]}`}</h5>
              <h5>{`${x[1][1]}`}</h5>
              <h5>{`${x[1][2]}`}</h5>
            </li>
          );
          // return <Timeslot time={x[0]} acts={x[1]} />;
        })}
      </div>
    </div>
  );
}

export default Bandslist;

// <div>{`${x}`}</div>
