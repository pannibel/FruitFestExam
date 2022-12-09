import React from "react";
import SingleBand from "./SingleBandList";

function Bandslist(props) {
  // let sortedBands = props.bands.sort((a, b) => a.name - b.name);
  // console.log(props.bands);
  let sortedBands = props.bands.sort((a, b) => {
    return a.name > b.name ? 1 : -1;
  });
  console.log(sortedBands);

  // filteredList = filteredList.sort(function (a, b) {
  //   return a.props.band.localeCompare(b.firstName);
  // })
  return (
    <>
      <div>
        {sortedBands.map((band, i) => (
          <SingleBand data={band} key={i} />
        ))}
      </div>
    </>
  );
}

export default Bandslist;
