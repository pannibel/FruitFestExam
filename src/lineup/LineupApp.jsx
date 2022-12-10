import React from "react";
import "../LineUpApp.scss";
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
      <div className="logoBig">
        <h1>Ranch Fest</h1>
      </div>
      {lineUpPage == 1 ? (
        <CurrentBand currentBand={currentBand} bands={bands} />
      ) : (
        ""
      )}
      {lineUpPage == 2 ? <Bandslist bands={bands} /> : ""}
      {lineUpPage == 3 ? (
        <Schedule currentBand={currentBand} bands={bands} />
      ) : (
        ""
      )}
      <div className="NavBarCont">
        <button onClick={() => changePageApp(2)} className="btn_side">
          B
        </button>
        <button onClick={() => changePageApp(1)} className="btn_side">
          H
        </button>
        <button onClick={() => changePageApp(3)} className="btn_side">
          SC
        </button>
      </div>
      {/* <Bandslist bands={bands} /> */}

      {!burgerState && (
        <button onClick={() => openBurger()} className="burgerIcon"></button>
      )}
      {burgerState && (
        <>
          <button onClick={() => openBurger()} className="burgerIcon"></button>
          <Burger />
        </>
      )}
    </div>
  );
}

export default Lineup;
