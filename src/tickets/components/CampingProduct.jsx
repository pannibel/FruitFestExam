import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

function CampingProduct(props) {
  const [curCampBtn, setCurCampBtn] = useState();
  const theSpots = useRef(null);

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
    if (spotsAvailable[`${item}`] === 0 || spotsAvailable[`${item}`] < props.guestNumber) {
      return "campGrey";
    } else {
      return "campIdle";
    }
  }

  function checkDisabled(item) {
    if (
      spotsAvailable[`${item}`] === 0 ||
      spotsAvailable[`${item}`] < props.guestNumber
    ) {
      return true;
    } else {
      return false;
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
      <div onChange={props.onChangeValue} id="ticketCampSpots" ref={theSpots}>
        <input
          id="Svartheim"
          type="radio"
          name="spot"
          value="Svartheim"
          disabled={spotsAvailable ? checkDisabled("Svartheim") : false}
        />
        <label
          htmlFor="Svartheim"
          className={
            curCampBtn == "Svartheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Svartheim")
              : null
          }
          onClick={
            spotsAvailable["Svartheim"] === 0 ||
            spotsAvailable["Svartheim"] < props.guestNumber
              ? () => checkAvailSpots("Svartheim")
              : () => setCurCampBtn("Svartheim")
          }>
          <p>Svartheim</p>
        </label>

        <input
          id="Nilfheim"
          type="radio"
          name="spot"
          value="Nilfheim"
          disabled={spotsAvailable ? checkDisabled("Nilfheim") : false}
        />
        <label
          htmlFor="Nilfheim"
          className={
            curCampBtn == "Nilfheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Nilfheim")
              : null
          }
          onClick={
            spotsAvailable["Nilfheim"] === 0 ||
            spotsAvailable["Nilfheim"] < props.guestNumber
              ? () => checkAvailSpots("Nilfheim")
              : () => setCurCampBtn("Nilfheim")
          }>
          <p>Nilfheim</p>
        </label>

        <input
          id="Helheim"
          type="radio"
          name="spot"
          value="Helheim"
          disabled={spotsAvailable ? checkAvailSpots("Helheim") : false}
        />
        <label
          htmlFor="Helheim"
          className={
            curCampBtn == "Helheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Helheim")
              : null
          }
          onClick={
            spotsAvailable["Helheim"] === 0 ||
            spotsAvailable["Helheim"] < props.guestNumber
              ? () => checkAvailSpots("Helheim")
              : () => setCurCampBtn("Helheim")
          }>
          <p>Helheim</p>
        </label>

        <input
          id="Muspelheim"
          type="radio"
          name="spot"
          value="Muspelheim"
          disabled={spotsAvailable ? checkDisabled("Muspelheim") : false}
        />
        <label
          htmlFor="Muspelheim"
          className={
            curCampBtn == "Muspelheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Muspelheim")
              : null
          }
          onClick={
            spotsAvailable["Muspelheim"] === 0 ||
            spotsAvailable["Muspelheim"] < props.guestNumber
              ? () => checkAvailSpots("Muspelheim")
              : () => setCurCampBtn("Muspelheim")
          }>
          <p>Muspelheim</p>
        </label>

        <input
          id="Alfheim"
          type="radio"
          name="spot"
          value="Alfheim"
          disabled={spotsAvailable ? checkDisabled("Alfheim") : false}
        />
        <label
          htmlFor="Alfheim"
          className={
            curCampBtn == "Alfheim"
              ? "campPicked"
              : spotsAvailable
              ? checkAvailSpots("Alfheim")
              : null
          }
          onClick={
            spotsAvailable["Alfheim"] === 0 ||
            spotsAvailable["Alfheim"] < props.guestNumber
              ? () => checkAvailSpots("Alfheim")
              : () => setCurCampBtn("Alfheim")
          }>
          <p>Alfheim</p>
        </label>
      </div>
    </div>
  );
}

export default CampingProduct;
