import React from "react";
import SingleBand from "./SingleBandList";
import { useRef, useState } from "react";

function Bandslist(props) {
  const [searching, setSearching] = useState(false);
  let searchedBands = [];
  const theInput = useRef(null);

  // let initArray = props.bands.map((band) => band);

  let sortedBands = props.bands.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });

  function searchList() {
    if (theInput.current.value != "") {
      setSearching(true);
      searchedBands = sortedBands.filter((band) =>
        band.name.includes(theInput.current.value)
      );

      console.log(searchedBands);
    } else {
      setSearching(false);
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
          // onInput={searchList}
        />
        <button
          className="searchBtn"
          button-name="search"
          onClick={searchList}
        ></button>
      </div>

      <div className="bandListBox">
        {!searching
          ? sortedBands.map((band, i) => <SingleBand data={band} key={i} />)
          : searchedBands.map((band, i) => <SingleBand data={band} key={i} />)}
      </div>
    </div>
  );
}

export default Bandslist;
