import React from "react";
import SingleBand from "./SingleBandList";

function Bandslist(props) {
  // let sortedBands = props.bands.sort((a, b) => a.name - b.name);
  console.log(props.bands);
  let sortedBands = props.bands.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  console.log(sortedBands);

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
        <input type="text" name="searchbar" placeholder="search..." />
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
