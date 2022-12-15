import React from "react";
import SingleBand from "./SingleBandList";
import { useRef, useState } from "react";
import OneBand from "./OneBand";

function Bandslist(props) {
  const [searchedBands, setSearchedBands] = useState([]);
  const [singleBandState, setSingleBandState] = useState(false);
  const [openedBand, setOpenedband] = useState();

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

  function openOneBand(band) {
    setSingleBandState(!singleBandState);
    setOpenedband(band)
    console.log("single band is open " + singleBandState);
    console.log(band)
  }

  return (
    <div className="bandsCont">

      <img
        className="logo_small"
        src="../src/assets/logo.svg"
        alt="big logo of the festival"></img>

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
          ? bettered.map((band, i) => (
              <SingleBand
                data={band}
                key={i}
                singleBandState={singleBandState}
                setSingleBandState={setSingleBandState}
                openOneBand={openOneBand}
              />
            ))
          : searchedBands.map((band, i) => (
              <SingleBand
                data={band}
                key={i}
                singleBandState={singleBandState}
                setSingleBandState={setSingleBandState}
                openOneBand={openOneBand}
              />
            ))}
      </div>

<div className={singleBandState ? "oneBandCont" : "hidden"}>
      {!singleBandState}
      {singleBandState && (
          <OneBand
            openOneBand={openOneBand}
            openedBand={openedBand}
            data={props.bands}
            singleBandState={singleBandState}
            setSingleBandState={setSingleBandState}
          />
      )}
      </div>
    </div>
  );
}

export default Bandslist;
