import React from "react";
import SingleBand from "./SingleBandList";
import { useRef, useState } from "react";

function Bandslist(props) {
  const [searchedBands, setSearchedBands] = useState([]);
  // let searchedBands = [];
  const theInput = useRef(null);

  let sortedBands = props.bands.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  let bettered = [];

  for (let i = 0; i < 125; i++) {
    if (sortedBands[i].name[0] != sortedBands[i + 1].name[0]) {
      bettered.push({ letter: sortedBands[i + 1].name[0], logo: "noLogo" });
      // console.log("the letter would be", sortedBands[i + 1].name[0]);
    } else {
      bettered.push(sortedBands[i]);
      // console.log(sortedBands[i]);
    }
  }
  console.log(bettered);

  function searchList() {
    if (theInput.current.value != "") {
      setSearchedBands(
        sortedBands.filter((band) => band.name.includes(theInput.current.value))
      );

      console.log(searchedBands);
    } else {
      setSearchedBands([]);
    }
  }

  return (
    <div className="bandsCont">
      <img
        className="logo_small"
        src="../src/assets/logo.svg"
        alt="big logo of the festival"
      ></img>

      <div className="searchbarCont">
        <input
          ref={theInput}
          type="text"
          name="searchbar"
          placeholder="search..."
          onInput={searchList}
        />
        <button
          className="searchBtn"
          button-name="search"
          // onClick={searchList}
        ></button>
      </div>

      <div className="bandListBox">
        {!searchedBands.length
          ? bettered.map((band, i) => <SingleBand data={band} key={i} />)
          : searchedBands.map((band, i) => <SingleBand data={band} key={i} />)}
      </div>
    </div>
  );
}

export default Bandslist;
