import React from "react";
import "../LineUpApp.scss";
import { useState, useEffect } from "react";
import Bandslist from "./components/Bandslist";
import Schedule from "./components/Schedule";
import CurrentBand from "./components/CurrentBand";
//npm i react-creditcard-validator

function Lineup() {
  const [lineUpPage, setLineUpPage] = useState(1);
  const [burgerState, setBurgerState] = useState(true);

  const [currentBand, setCurrentBand] = useState([]);
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
        element.liked = "true";
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
  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
  }
  return (
    <div className="appCont">
      <button onClick={() => openBurger()} className="burgerIcon">
        brurgor
      </button>
      <div className="logoBig">
        <h1>Ranch Fest</h1>
      </div>
      {lineUpPage == 1 ? <CurrentBand currentBand={currentBand} /> : ""}
      {lineUpPage == 2 ? <Bandslist bands={bands} /> : ""}
      {lineUpPage == 3 ? (
        <Schedule bands={bands} currentBand={currentBand} />
      ) : (
        ""
      )}
      <div className="NavBarCont">
        <button onClick={() => changePageApp(1)} className="">
          H
        </button>
        <button onClick={() => changePageApp(2)} className="">
          B
        </button>
        <button onClick={() => changePageApp(3)} className="">
          SC
        </button>
      </div>
      {/* <Bandslist bands={bands} /> */}
    </div>
  );
}

export default Lineup;
