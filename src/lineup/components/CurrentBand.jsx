import React from "react";
import { useState, useEffect } from "react";

function CurrentBand(props) {
  const [currentMidgard, setCurrentMidgard] = useState();
  const [currentVanaheim, setCurrentVanaheim] = useState();
  const [currentJotunheim, setCurrentJotunheim] = useState();
  // chekcing current time

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
  // console.log(currentHour);

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
  console.log(testForTuesday("Vanaheim"));
  // console.log(currentMidgard);
  // useEffect(() => {
  //   playingMidgard();
  //   playingVanaheim();
  //   playingJotunheim();
  // }, [props.currentBand]);

  // function pickImage(x) {
  //   props.bands.map((el) => {
  //     if (el.name == x) {
  //       console.log(el.logo);
  //       if (el.logo.includes("https://")) {
  //         return <img src={el.logo} className="imgSingleBand" alt=""></img>;
  //       } else if (
  //         el.logo.includes("png") ||
  //         el.logo.includes("jpg") ||
  //         el.logo.includes("JPG") ||
  //         el.logo.includes("svg")
  //       ) {
  //         return (
  //           console.log(el.logo),
  //           (
  //             <img
  //               src={"http://localhost:8080/logos/" + el.logo}
  //               className="imgSingleBand"
  //               alt=""
  //             ></img>
  //           )
  //         );
  //       }
  //     }
  //   });
  // }
  return (
    <div className="anotherCont">
      <div className="homeCont">
        <img
          className="logo"
          src="../src/assets/logo.svg"
          alt="big logo of the festival"
        ></img>
        <div className="currentlyCont">
          <h3>Now on stage</h3>

          <div>{showCurrentActTime}</div>

          <div className="currentBandBox">
            <div className="currentBandRow colorMidgard">
              {/* {pickImage(currentMidgard)} */}

              <div className="playerBand">{testForTuesday("Midgard")}</div>
              <div className="playerStage">MIDGARD</div>
            </div>
            <div className="currentBandRow  colorVanaheim">
              {/* {pickImage(currentVanaheim)} */}

              <div className="playerBand">{testForTuesday("Vanaheim")}</div>
              <div className="playerStage">VANAHEIM</div>
            </div>
            <div className="currentBandRow colorJotunheim">
              {/* {pickImage(currentJotunheim)} */}

              <div className="playerBand">{testForTuesday("Jotunheim")}</div>
              <div className="playerStage">JOTUNHEIM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentBand;
