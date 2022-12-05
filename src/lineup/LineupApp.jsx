import React from "react";
import "../LineUpApp.scss";
import { useState, useEffect } from "react";
import Bandslist from "./components/Bandslist";
import CurrentBand from "./components/CurrentBand";

function Lineup() {
  const [lineUpPage, setLineUpPage] = useState(1);
  const [burgerState, setBurgerState] = useState(true);

  const [currentBand, setCurrentBand] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/schedule");
      const data = await res.json();
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
      let i = 1;
      data.forEach(function (element) {
        element.liked = "true";
        element.key = ++i;
      });
      console.log(data);
    }
    getData();
  }, []);

  function changePageApp(value) {
    setLineUpPage(value);
    // console.log("change the state to " + lineUpPage);
  }
  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
  }
  return (
    <>
      <button onClick={() => openBurger()} className="burgerIcon">
        borger
      </button>
      <div className="Logo">Ranch Fest</div>
      {lineUpPage == 1 ? <CurrentBand currentBand={currentBand} /> : ""}
      {lineUpPage == 2 ? <Bandslist bands={bands} /> : ""}
      <div className="NavBarCont">
        <button onClick={() => changePageApp(1)} className="">
          HOME
        </button>
        <button onClick={() => changePageApp(2)} className="">
          BANDS
        </button>
        <button onClick={() => changePageApp(3)} className="">
          SCHEDULE
        </button>
      </div>
      {/* <Bandslist bands={bands} /> */}
    </>
  );
}

export default Lineup;
