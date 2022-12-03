import React from "react";
import SingleBand from "./SingleBand";

function Bandslist(props) {
  return (
    <>
      <div>
        {props.bands.map((band) => (
          <SingleBand
            key={props.bands.index}
            data={band}
            // addToCart={props.addToCart}
          />
        ))}
      </div>
      <ul>
        <li>Band one</li>
        <li>Band two</li>
        <li>Band three</li>
        <li>Band four</li>
        <li>Band five</li>
        <li>Band six</li>
      </ul>
    </>
  );
}

export default Bandslist;
