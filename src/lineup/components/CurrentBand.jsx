import React from "react";
import ImageTest from "../../assets/logo2.svg";
import OneBand from "./OneBand";

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

  // checking current day of the week
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "short",
  });

  function testForTuesday(test) {
    let returnValue = "";
    Object.entries(props.currentBand).map((item) => {
      if (item[0] === test) {
        Object.entries(item[1]).map((weekDays) => {
          if (weekDays[0] == dayOfWeekName.toLowerCase()) {
            // console.log(currentHour);
            let result = weekDays[1].find((item) => item.start == currentHour);
            let currentAct = result.act;
            returnValue = currentAct;
          }
        });
      }
    });

    return returnValue;
  }

  function pickImage(x) {
    let imgObj;
    props.bands.map((el) => {
      if (el.name == x) {
        if (el.logo.includes("https://")) {
          imgObj = el.logo;
        } else if (
          el.logo.includes("png") ||
          el.logo.includes("jpg") ||
          el.logo.includes("JPG") ||
          el.logo.includes("svg")
        ) {
          imgObj = `https://bitter-grass-7071.fly.dev/logos/${el.logo}`;
        }
      }
    });
    return imgObj;
  }
  return (
    <div className="anotherCont">
      <div className="homeCont">
        <img
          className="logo"
          src={ImageTest}
          alt="big logo of the festival"
        ></img>
        <div className="currentlyCont">
          <h3>Now on stage</h3>

          <div
            className={
              testForTuesday("Midgard") == "break" ? "hidden" : "currentAct"
            }
          >
            {showCurrentActTime}
          </div>
          <div
            className={
              testForTuesday("Midgard") == "break"
                ? "colorVanaheim currentWidgBreak"
                : "hidden"
            }
          >
            break until {hourBasedIndex + 2 + ":00"}
          </div>
          <div
            className={
              testForTuesday("Midgard") == "break" ? "hidden" : "currentBandBox"
            }
          >
            <div
              className="currentBandRow colorMidgard"
              onClick={() => props.openOneBand(`${testForTuesday("Midgard")}`)}
            >
              <img
                src={pickImage(testForTuesday("Midgard"))}
                className="imgSingleBand"
                alt=""
              ></img>
              <div className="playerBand">{testForTuesday("Midgard")}</div>
              <div className="playerStage">Midgard</div>
            </div>

            <div
              className="currentBandRow  colorVanaheim"
              onClick={() => props.openOneBand(`${testForTuesday("Vanaheim")}`)}
            >
              <img
                src={pickImage(testForTuesday("Vanaheim"))}
                className="imgSingleBand"
                alt=""
              ></img>
              <div className="playerBand">{testForTuesday("Vanaheim")}</div>
              <div className="playerStage">Vanaheim</div>
            </div>
            <div
              className="currentBandRow colorJotunheim"
              onClick={() =>
                props.openOneBand(`${testForTuesday("Jotunheim")}`)
              }
            >
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
    </div>
  );
}

export default CurrentBand;
