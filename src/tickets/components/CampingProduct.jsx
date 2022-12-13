import React from "react";
// import { useRef } from "react";
import { useState, useEffect } from "react";

function CampingProduct(props) {
  const [curCampBtn, setCurCampBtn] = useState();

  const [spotsAvailable, setSpotsAvailable] = useState({
    Svartheim: "",
    Nilfheim: "",
    Helheim: "",
    Alfheim: "",
    Muspelheim: "",
  });

  useEffect(() => {
    props.campingSpots.forEach((el) => {
      setSpotsAvailable((old) => {
        const newObj = { ...old };
        newObj[el.area] = el.available;
        return newObj;
      });
    });

    // console.log(spotsAvailable);
  }, [props.campingSpots]);

  function checkAvailSpots(item) {
    // console.log("here", spotsAvailable[`${item}`]);
    if (spotsAvailable[`${item}`] == 2) {
      return "campGrey";
    } else if (
      spotsAvailable[`${item}`] < 10 &&
      spotsAvailable[`${item}`] > 0
    ) {
      return "campGrey";
    } else {
      return "campIdle";
    }
  }

  return (
    <div className="form-control">
      <h3>3. Choose your camping spot</h3>
      <h4>
        You are required to reserve camping spots in one of the areas, free of
        charge. The unavailable areas have fewer free spots than your number of
        tickets.
      </h4>
      <div onChange={props.onChangeValue} id="ticketCampSpots">
        <input id="Svartheim" type="radio" name="spot" value="Svartheim" />
        <label
          htmlFor="Svartheim"
          className={
            curCampBtn == "Svartheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Nilfheim")
              : null
          }
          onClick={() => setCurCampBtn("Svartheim")}
          disabled={props.spotAdded ? false : true}
        >
          <p>Svartheim</p>
        </label>

        <input id="Nilfheim" type="radio" name="spot" value="Nilfheim" />
        <label
          htmlFor="Nilfheim"
          className={
            curCampBtn == "Nilfheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Nilfheim")
              : null
          }
          onClick={() => setCurCampBtn("Nilfheim")}
          disabled={props.spotAdded ? false : true}
        >
          <p>Nilfheim</p>
        </label>

        <input id="Helheim" type="radio" name="spot" value="Helheim" />
        <label
          htmlFor="Helheim"
          className={
            curCampBtn == "Helheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Helheim")
              : null
          }
          onClick={() => setCurCampBtn("Helheim")}
          disabled={props.spotAdded ? false : true}
        >
          <p>Helheim</p>
        </label>

        <input id="Muspelheim" type="radio" name="spot" value="Muspelheim" />
        <label
          htmlFor="Muspelheim"
          className={
            curCampBtn == "Muspelheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Muspelheim")
              : null
          }
          onClick={() => setCurCampBtn("Muspelheim")}
          disabled={props.spotAdded ? false : true}
        >
          <p>Muspelheim</p>
        </label>

        <input id="Alfheim" type="radio" name="spot" value="Alfheim" />
        <label
          htmlFor="Alfheim"
          className={
            curCampBtn == "Alfheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Alfheim")
              : null
          }
          onClick={() => setCurCampBtn("Alfheim")}
          disabled={props.spotAdded ? false : true}
        >
          <p>Alfheim</p>
        </label>
      </div>

      <div>
        <button onClick={props.addSpot}>Add</button>
      </div>
    </div>
  );
}

export default CampingProduct;
