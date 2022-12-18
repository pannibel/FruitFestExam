import { useState } from "react";
import "./App.scss";
import Countdown from "react-countdown";

// import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header className="appHeader">
        <a className="ticketsBtn" href={`tickets`}>Get tickets
        </a>
      </header>

      <div className="main">
        <div className="timerCont">
          <Countdown date={Date.now() + 1000000000} />
        </div>
        <img
          className="logo"
          src="../src/assets/logo2.svg"
          alt="big logo of the festival"></img>

<img
          className="date"
          src="../src/assets/date.svg"
          alt="big logo of the festival"></img>
        
        <div className="btnCont">
            <a className="appBtn" href={`lineup`}>Go to app
            </a>
            </div>


        <div className="mainNamesCont"></div>
      </div>
    </>
  );
}

export default App;
