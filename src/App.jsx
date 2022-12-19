import { useState } from "react";
import "./App.scss";
import Countdown from "react-countdown";
import imageSrc from "./assets/logo2.svg";

// import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="appHeader">
        <a className="ticketsBtn" href={`tickets`}>
          Get tickets
        </a>
      </header>

      <div className="main">
        <div className="timerCont">
          <Countdown date={Date.now() + 1000000000} />
        </div>
        <img
          className="logo"
          src={imageSrc}
          alt="big logo of the festival"
        ></img>

        <img
          className="date"
          src="../src/assets/date.svg"
          alt="big logo of the festival"
        ></img>

        <div className="btnCont">
          <a className="appBtn" href={`lineup`}>
            Go to app
          </a>
        </div>

        <div className="headlinersCont">
          <div className="headliner">ACDC</div>
          <div className="headliner">Perfect circle</div>
          <div className="headliner">Tool</div>
          <div className="headliner">Pink Floyd</div>
          <div className="headliner">Doja Cat</div>
          <div className="headliner">Elvis</div>
        </div>

        <div className="mainNamesCont"></div>
      </div>
    </>
  );
}

export default App;
