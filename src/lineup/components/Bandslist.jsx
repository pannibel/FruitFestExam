import React from "react";
import SingleBand from "./SingleBandList";
import { useRef } from "react";

function Bandslist(props) {
  const theInput = useRef(null)
  // let sortedBands = props.bands.sort((a, b) => a.name - b.name);
  console.log(props.bands);
  let sortedBands = props.bands.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  console.log(sortedBands);


  function searchList() {
    let filteredBands = props.bands.filter((item) => {
      if (item === theInput.current.value) {
        return item
      }
    }
  )
    
    console.log(theInput.current.value)
    console.log(filteredBands)
  }

  // filteredList = filteredList.sort(function (a, b) {
  //   return a.props.band.localeCompare(b.firstName);
  // })
  return (
    <div className="bandsCont">
      <img
        className="logo_small"
        src="../src/assets/logo.svg"
        alt="big logo of the festival"></img>

      <div className="searchbarCont">
        <input ref={theInput} type="text" name="searchbar" placeholder="search..." />
        <button
          className="searchBtn"
          button-name="search"
          onClick={searchList}></button>
      </div>

      <div className="bandListBox">
        {sortedBands.map((band, i) => (
          <SingleBand data={band} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Bandslist;
