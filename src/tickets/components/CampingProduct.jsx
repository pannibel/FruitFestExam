import React from 'react'
import { useRef } from "react";
import { useState } from "react";

function CampingProduct(props) {
  return (
    <div className="form-control">
    <h3>3. Choose your camping spot</h3>

    <label htmlFor="form-spot">Svartheim</label>
    <input type="radio" name="spot" />

    <label htmlFor="form-spot">Nilfheim</label>
    <input type="radio" name="spot" />

    <label htmlFor="form-spot">Helheim</label>
    <input type="radio" name="spot" />

    <label htmlFor="form-spot">Muspelheim</label>
    <input type="radio" name="spot" />

    <label htmlFor="form-spot">Alfheim</label>
    <input type="radio" name="spot" />

    <button onClick={props.addSpot}>Add</button>
    </div>
  )
}

export default CampingProduct