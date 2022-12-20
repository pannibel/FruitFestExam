import React from "react";
import SingleBand from "./SingleBandList";
import { useRef, useState } from "react";
import OneBand from "./OneBand";

function Bandslist(props) {
  const [searchedBands, setSearchedBands] = useState([]);
  const theInput = useRef(null);

  let sortedBands = props.bands.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  let bettered = [];

  for (let i = 0; i < 126; i++) {
    if (sortedBands[i].name == "A Perfect Circle") {
      bettered.push({ letter: sortedBands[i + 1].name[0], logo: "noLogo" });
      bettered.push(sortedBands[i]);
    } else if (sortedBands[i].name == "Zboncak - Haag") {
      bettered.push(sortedBands[i]);
    } else if (sortedBands[i].name[0] != sortedBands[i + 1].name[0]) {
      bettered.push(sortedBands[i]);
      bettered.push({ letter: sortedBands[i + 1].name[0], logo: "noLogo" });
    } else {
      bettered.push(sortedBands[i]);
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
        src="src/assets/logo2.svg"
        alt="big logo of the festival"
      ></img>
      <div className="searchContCont">
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
      </div>

      <div className="bandListBox">
        {!searchedBands.length
          ? bettered.map((band, i) => (
              <SingleBand
                data={band}
                key={i}
                singleBandState={props.singleBandState}
                setSingleBandState={props.setSingleBandState}
                openOneBand={props.openOneBand}
              />
            ))
          : searchedBands.map((band, i) => (
              <SingleBand
                data={band}
                key={i}
                singleBandState={props.singleBandState}
                setSingleBandState={props.setSingleBandState}
                openOneBand={props.openOneBand}
              />
            ))}
      </div>

      <div className={props.singleBandState ? "oneBandCont" : "hidden"} onClick={props.openOneBand}>
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
  );
}

export default Bandslist;
