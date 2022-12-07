import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

function CampingProduct(props) {
  console.log(props.campingSpots);


  return (
    <div className="form-control">
      <h3>3. Choose your camping spot</h3>

      <div onChange={props.onChangeValue}>
        <div>
          <label htmlFor="form-spot">Svartheim</label>
          <input type="radio" name="spot" value="Svartheim" />
        </div>

        <div>
          <label htmlFor="form-spot">Nilfheim</label>
          <input type="radio" name="spot" value="Nilfheim" />
        </div>

        <div>
          <label htmlFor="form-spot">Helheim</label>
          <input type="radio" name="spot" value="Helheim" />
        </div>

        <div>
          <label htmlFor="form-spot">Muspelheim</label>
          <input type="radio" name="spot" value="Muspelheim" />
        </div>

        <div>
          <label htmlFor="form-spot">Alfheim</label>
          <input type="radio" name="spot" value="Alfheim" />
        </div>
      </div>

      <div>
        <button onClick={props.addSpot}>Add</button>
      </div>
    </div>
  );
}

export default CampingProduct;
