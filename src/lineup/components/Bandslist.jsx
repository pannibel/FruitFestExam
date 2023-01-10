import React from "react";
import SingleBand from "./SingleBandList";
import { useRef, useState } from "react";
import OneBand from "./OneBand";
import ImageTest from "../../assets/logo2.svg";
import { motion, AnimatePresence } from "framer-motion";

function Bandslist(props) {
  const [searchedBands, setSearchedBands] = useState([]);
  const [searchFull, setSearchFull] = useState(false);
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
  // console.log(bettered);

  function searchList() {
    let test6 = theInput.current.value;
    if (theInput.current.value != "") {
      setSearchFull(true);
      setSearchedBands(
        sortedBands.filter(
          (band) =>
            band.name.includes(test6) || band.name.includes(test6.toUpperCase())
        )
      );

      console.log(searchedBands);
      // console.log(test6);
    } else {
      setSearchFull(false);
      setSearchedBands([]);
    }
    console.log(searchedBands);
  }
  console.log(searchFull);

  function changePageApp(value) {
    props.setLineUpPage(value);
  }
  return (
    <div className="bandsCont">
      <img
        onClick={() => changePageApp(1)}
        className="logo_small"
        src={ImageTest}
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
        {searchFull == false ? (
          bettered.map((band, i) => (
            <SingleBand
              data={band}
              key={i}
              singleBandState={props.singleBandState}
              setSingleBandState={props.setSingleBandState}
              openOneBand={props.openOneBand}
            />
          ))
        ) : searchFull == true && searchedBands.length ? (
          searchedBands.map((band, i) => (
            <SingleBand
              data={band}
              key={i}
              singleBandState={props.singleBandState}
              setSingleBandState={props.setSingleBandState}
              openOneBand={props.openOneBand}
            />
          ))
        ) : (
          <div id="noBands">no bitches</div>
        )}
      </div>

      <div
        className={props.singleBandState ? "oneBandCont" : "hidden"}
        onClick={props.openOneBand}
      >
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
