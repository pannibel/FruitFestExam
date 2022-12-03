import React from 'react'
import { useRef } from "react";
import { useState } from "react";

function ExtraProduct(props) {
  return (
    <div className="form-control">
    <h3>2. Add extras</h3>

  <div className="extra">
    <label htmlFor="form-extras">VIP treatment</label>
    <p>
      Price: <span>{props.extra1price}</span>,-
    </p>
    <button onClick={props.addExtras} name="extra1">
      Add
    </button>
  </div>

  <div className="extra">
    <label htmlFor="form-extras">Better food</label>
    <p>
      Price: <span>{props.extra2price}</span>,-
    </p>
    <button onClick={props.addExtras} name="extra2">
      Add
    </button>
  </div>

  <div className="extra">
    <label htmlFor="form-extras">No racist comments</label>
    <p>
      Price: <span>{props.extra3price}</span>,-
    </p>
    <button onClick={props.addExtras} name="extra3">
      Add
    </button>
  </div>
</div>
  )
}

export default ExtraProduct