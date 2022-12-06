import React from "react";
import SingleBand from "./SingleBand";

function Bandslist(props) {
  return (
    <>
      <div>
        {props.bands.map((band) => (
          <SingleBand data={band} />
        ))}
      </div>
    </>
  );
}

export default Bandslist;
