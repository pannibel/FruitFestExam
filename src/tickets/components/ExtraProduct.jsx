import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function ExtraProduct(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="form-control">
      <h3>2. Add extras</h3>
      <h4>The tent(s) you choose will also be set up before your arrival.</h4>
      <div id="ticketExtras">
{/*         <div className="extra">
          <label htmlFor="form-extras">Green camping option</label>
          <p>
            <span>{props.extra1price}</span>,-
          </p>
          <button
            onClick={props.addExtras}
            name="Green camping"
            className="extraBtnADD"
          > </button>
        </div> */}

        <div className={isMobile ? "extra extraMobile" : "extra"}>
          <label htmlFor="form-extras" className="gradient-text">
            Medium size tent
          </label>
          <p>
            <span>{props.extra2price}</span>,-
          </p>
          <button
            onClick={props.addExtras}
            name="Medium size tent"
            className="extraBtnADD"
          > </button>
        </div>

        <div className="extra">
          <label htmlFor="form-extras">
            Large size tent
          </label>
          <p>
            <span>{props.extra3price}</span>,-
          </p>
          <button
            onClick={props.addExtras}
            name="Large size tent"
            className="extraBtnADD"
          > </button>
        </div>
      </div>
    </div>
  );
}

export default ExtraProduct;
