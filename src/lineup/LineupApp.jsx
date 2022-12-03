import React from "react";
import { useState, useEffect } from "react";
import Bandslist from "./components/Bandslist";
import CurrentBand from "./components/CurrentBand";

function Lineup() {
  const [lineUpPage, setLineUpPage] = useState(2);
  const [currentBand, setCurrentBand] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/schedule");
      const data = await res.json();
      setCurrentBand(data);
      // console.log(data);
    }
    getData();
  }, []);

  const [bands, setBands] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/bands");
      const data = await res.json();
      setBands(data);
    }
    getData();
  }, []);

  function changePageApp(value) {
    setLineUpPage(value);
    console.log("change the state to " + lineUpPage);
  }

  return (
    <>
      <button onClick={() => changePageApp(2)} className="">
        Show the main screen
      </button>
      <button onClick={() => changePageApp(3)} className="">
        Show all bands
      </button>
      <button onClick={() => changePageApp(4)} className="">
        Show the schedule
      </button>
      {lineUpPage == 2 ? <CurrentBand currentBand={currentBand} /> : ""}
      {lineUpPage == 3 ? <Bandslist bands={bands} /> : ""}
      {/* <Bandslist bands={bands} /> */}
    </>
  );
}

export default Lineup;
