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

  return (
    <div>
      <button onClick={() => setSchedDay("mon")} className="">
        mon
      </button>
      <button onClick={() => setSchedDay("tue")} className="">
        tues
      </button>
      <button onClick={() => setSchedDay("wed")} className="">
        wed
      </button>
      <button onClick={() => setSchedDay("thu")} className="">
        thur
      </button>
      <button onClick={() => setSchedDay("fri")} className="">
        fri
      </button>
      <button onClick={() => setSchedDay("sat")} className="">
        sat
      </button>
      <button onClick={() => setSchedDay("sun")} className="">
        sun
      </button>

      <div>
        {Object.entries(testArr2).map((x, index) => {
          return <SingleBandSchedule data={x} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Bandslist;

// <div>{`${x}`}</div>
