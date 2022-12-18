import React from "react";
import "../LineUpApp.scss";
import "../dayButtons.scss";
import { useState, useEffect } from "react";
import Bandslist from "./components/Bandslist";
import Schedule from "./components/Schedule";
import CurrentBand from "./components/CurrentBand";
import Burger from "./components/Burger";
//npm i react-creditcard-validator
//npm i react-burger-menu

function Lineup() {
  const [lineUpPage, setLineUpPage] = useState(1);
  const [burgerState, setBurgerState] = useState(false);
  const [currentBand, setCurrentBand] = useState([]);
  const [singleBandState, setSingleBandState] = useState(false);
  const [openedBand, setOpenedband] = useState();

  if (lineUpPage == 1) {
    document.querySelector("body").classList = "";
    document.querySelector("body").classList.add("backClass_1");
  } else if (lineUpPage == 2) {
    document.querySelector("body").classList = "";
    document.querySelector("body").classList.add("backClass_2");
  }
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/schedule");
      const data = await res.json();
      // console.log(data);
      setCurrentBand(data);
    }
    getData();
  }, []);

  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/bands");
      const data = await res.json();
      setBands(data);

      data.forEach(function (element, i) {
        element.liked = false;
        element.key = i;
      });
      console.log(data);
    }
    getData();
  }, []);

  function changePageApp(value) {
    setLineUpPage(value);
    // console.log("change the state to " + lineUpPage);
  }

  function checkPageApp(value) {
    if (lineUpPage == 1) {
      if (value === "home") return "homeOn";
    } else if (lineUpPage == 2) {
      if (value === "bands") return "bandsOn";
    } else if (lineUpPage == 3) {
      if (value === "schedule") return "scheduleOn";
    }
  }

  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
  }

  function openOneBand(band) {
    setSingleBandState(!singleBandState);
    console.log(band);

    //get the band name and find the same thing in the original array and get the data from that object
    // band name is under different keys:
    // in SingleBandList it's name
    // in SingleBandSchedule it's act

    bands.map((item) => {
      if (item.name === band) 
      setOpenedband(item);
    });

    console.log("single band is open " + singleBandState);
  }

  return (
    <div className="appCont">
      {lineUpPage == 1 ? (
        <CurrentBand currentBand={currentBand} bands={bands} />
      ) : (
        ""
      )}
      {lineUpPage == 2 ? (
        <Bandslist
          bands={bands}
          openOneBand={openOneBand}
          openedBand={openedBand}
          singleBandState={singleBandState}
          setSingleBandState={setSingleBandState}
        />
      ) : (
        ""
      )}
      {lineUpPage == 3 ? (
        <Schedule
          currentBand={currentBand}
          bands={bands}
          openOneBand={openOneBand}
          openedBand={openedBand}
          singleBandState={singleBandState}
          setSingleBandState={setSingleBandState}
        />
      ) : (
        ""
      )}

      <div className="NavBarCont">
        <button
          onClick={() => changePageApp(1)}
          className={lineUpPage === 1 ? checkPageApp("home") : "homeOff"}
          value="home"
        ></button>
        <button
          onClick={() => changePageApp(2)}
          className={lineUpPage === 2 ? checkPageApp("bands") : "bandsOff"}
          value="bands"
        ></button>
        <button
          onClick={() => changePageApp(3)}
          className={
            lineUpPage === 3 ? checkPageApp("schedule") : "scheduleOff"
          }
          value="schedule"
        ></button>
      </div>
      {/* <Bandslist bands={bands} /> */}

      {!burgerState && (
        <button
          onClick={() => openBurger()}
          className="burger_off"
          button-name="openburg"
        >
          {" "}
        </button>
      )}
      {burgerState && (
        <>
          <button
            onClick={() => openBurger()}
            className="burger_on"
            button-name="klosburg"
          >
            {" "}
          </button>
          <Burger />
        </>
      )}
    </div>
  );
}

export default Lineup;
