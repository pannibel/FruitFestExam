import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function ExtraProduct(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="form-control">
      <h3>2. Add extras</h3>
      <h4>These are optional, to elevate your festival experience.</h4>
      <div id="ticketExtras">
        <div className="extra">
          <label htmlFor="form-extras">Green camping option</label>
          <p>
            <span>{props.extra1price}</span>,-
          </p>
          <button onClick={props.addExtras} name="Green camping">
            Add
          </button>
        </div>

        <div className={isMobile ? "extra extraMobile" : "extra"}>
          <label htmlFor="form-extras" className="gradient-text">
            2-person tent set up (tent included)
          </label>
          <p>
            <span>{props.extra2price}</span>,-
          </p>
          <button onClick={props.addExtras} name="2-person tent set up">
            Add
          </button>
        </div>

        <div className="extra">
          <label htmlFor="form-extras">
            3-person tent set up (tent included)
          </label>
          <p>
            <span>{props.extra3price}</span>,-
          </p>
          <button onClick={props.addExtras} name="3-person tent set up">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExtraProduct;
