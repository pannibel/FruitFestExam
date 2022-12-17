import { useState } from "react";
import "./App.scss";
import Countdown from "react-countdown";

// import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div className="timerCont">
        <Countdown date={Date.now() + 1000000000} />
      </div>
      <img
        className="logo"
        src="../src/assets/logo.svg"
        alt="big logo of the festival"
      ></img>

      <img
        className="date"
        src="../src/assets/date.svg"
        alt="big date of the festival"
      ></img>

      <ul>
        <li>
          <a className="linkMockup" href={`tickets`}>
            Buy the tickets
          </a>
        </li>
        <li>
          <a className="linkMockup" href={`lineup`}>
            Check out the app
          </a>
        </li>
      </ul>

      <div className="mainNamesCont"></div>
    </div>
  );
}

export default App;
