import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";

function ExtraProduct(props) {
  // const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  return (
    <div className="form-control">
      <h3>2. Add extras</h3>
      <h4>The tent(s) you choose will also be set up before your arrival.</h4>

      <div id="ticketExtras">

        <div className="extra">
          <label htmlFor="form-extras" className="gradient-text">
            {props.count.total === 0 ? "" : props.count.total} Medium size tent
            {props.count.total < 2 ? "" : "s"}
          </label>
          <p>
            <span>{props.extra2price}</span>,-  (each)
          </p>
          <button
            onClick={props.addExtras}
            name="Medium size tent"
            className={
              props.warning.extras ? "disabledExtraBtn" : "extraBtnADD"
            }
            disabled={props.warning.extras ? true : false}
          >
            {" "}
          </button>
        </div>

        <div className="extra">
          <label htmlFor="form-extras">
            {props.count.total === 0 ? "" : props.count.total} Large size tent
            {props.count.total < 2 ? "" : "s"}
          </label>
          <p>
            <span>{props.extra3price}</span>,-  (each)
          </p>
          <button
            onClick={props.addExtras}
            name="Large size tent"
            className={
              props.warning.extras ? "disabledExtraBtn" : "extraBtnADD"
            }
            disabled={props.warning.extras ? true : false}
          >
            {" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ExtraProduct;
