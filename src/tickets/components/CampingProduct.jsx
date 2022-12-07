import React from "react";
// import { useRef } from "react";
import { useState, useEffect } from "react";

function CampingProduct(props) {
  const [spotsAvailable, setSpotsAvailable] = useState({
    Svartheim: 300,
    Nilfheim: 400,
    Helheim: 400,
    Alfheim: 400,
    Muspelheim: 400,
  });

  useEffect(() => {
    props.campingSpots.forEach((el) => {
      setSpotsAvailable((old) => {
        const newObj = { ...old };
        newObj[el.area] = el.available;
        return newObj;
      });
    });

    console.log(spotsAvailable);
  }, [props.campingSpots]);

  function checkAvailSpots(item) {
    console.log("here", spotsAvailable[`${item}`]);
    if (spotsAvailable[`${item}`] == 2) {
      return "classGrey";
    } else if (
      spotsAvailable[`${item}`] < 10 &&
      spotsAvailable[`${item}`] > 0
    ) {
      return "classRed";
    } else {
      return "classBlack";
    }
  }
  // console.log(props.campingSpots);
  // console.log(checkAvailSpots("Svartheim"));

  return (
    <div className="form-control">
      <h3>3. Choose your camping spot</h3>

      <div onChange={props.onChangeValue}>
        <div>
          <label htmlFor="form-spot">
            <div
              className={spotsAvailable ? checkAvailSpots("Svartheim") : null}
            >
              Svartheim
            </div>
          </label>
          <input type="radio" name="spot" value="Svartheim" />
        </div>

        <div>
          <label htmlFor="form-spot">
            {" "}
            <div
              className={spotsAvailable ? checkAvailSpots("Nilfheim") : null}
            >
              Nilfheim
            </div>
          </label>
          <input type="radio" name="spot" value="Nilfheim" />
        </div>

        <div>
          <label htmlFor="form-spot">
            <div className={spotsAvailable ? checkAvailSpots("Helheim") : null}>
              Helheim
            </div>
          </label>
          <input type="radio" name="spot" value="Helheim" />
        </div>

        <div>
          <label htmlFor="form-spot">
            <div
              className={spotsAvailable ? checkAvailSpots("Muspelheim") : null}
            >
              Muspelheim
            </div>
          </label>
          <input type="radio" name="spot" value="Muspelheim" />
        </div>

        <div>
          <label htmlFor="form-spot">
            <div className={spotsAvailable ? checkAvailSpots("Alfheim") : null}>
              Alfheim
            </div>
          </label>
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
