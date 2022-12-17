import React from "react";
import { useRef } from "react";
import { useState, useEffect } from "react";

function CampingProduct(props) {
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
    if (
      spotsAvailable[`${item}`] == 0 ||
      spotsAvailable[`${item}`] < props.count.total
    ) {
      return "campGrey";
    } else if (
      spotsAvailable[`${item}`] > 0 &&
      spotsAvailable[`${item}`] >= props.count.total
    ) {
      return "campIdle";
    }
  }

  function checkDisabled(item) {
    if (
      spotsAvailable[`${item}`] == 0 ||
      spotsAvailable[`${item}`] < props.count.total
    ) {
      return true;
    } else if (
      spotsAvailable[`${item}`] > 0 &&
      spotsAvailable[`${item}`] >= props.count.total
    ) {
      return false;
    }
  }

  return (
    <div className="form-control">
      <h3>3. Choose your camping spot</h3>
      <h4>
        You are required to reserve camping spots in one of the areas, free of
        charge. If any area is unavailable, it means it has fewer amount of free
        spots at the moment than the tickets in your basket.
      </h4>
      <div>
        <div onChange={props.onChangeValue} id="ticketCampSpots">
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
              props.curCampBtn == "Svartheim"
                ? "campPicked"
                : spotsAvailable
                ? checkAvailSpots("Svartheim")
                : null
            }
            onClick={() => {
              checkDisabled("Svartheim") === false
                ? props.setCurCampBtn("Svartheim")
                : null;
            }}
          >
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
              props.curCampBtn == "Nilfheim"
                ? "campPicked"
                : spotsAvailable
                ? checkAvailSpots("Nilfheim")
                : null
            }
            onClick={() => {
              checkDisabled("Nilfheim") === false
                ? props.setCurCampBtn("Nilfheim")
                : null;
            }}
          >
            <p>Nilfheim</p>
          </label>

          <input
            id="Helheim"
            type="radio"
            name="spot"
            value="Helheim"
            disabled={spotsAvailable ? checkDisabled("Helheim") : false}
          />
          <label
            htmlFor="Helheim"
            className={
              props.curCampBtn == "Helheim"
                ? "campPicked"
                : spotsAvailable
                ? checkAvailSpots("Helheim")
                : null
            }
            onClick={() => {
              checkDisabled("Helheim") === false
                ? props.setCurCampBtn("Helheim")
                : null;
            }}
          >
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
              props.curCampBtn == "Muspelheim"
                ? "campPicked"
                : spotsAvailable
                ? checkAvailSpots("Muspelheim")
                : null
            }
            onClick={() => {
              checkDisabled("Muspelheim") === false
                ? props.setCurCampBtn("Muspelheim")
                : null;
            }}
          >
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
              props.curCampBtn == "Alfheim"
                ? "campPicked"
                : spotsAvailable
                ? checkAvailSpots("Alfheim")
                : null
            }
            onClick={() => {
              checkDisabled("Alfheim") === false
                ? props.setCurCampBtn("Alfheim")
                : null;
            }}
          >
            <p>Alfheim</p>
          </label>
        </div>
      </div>
    </div>
  );
}

export default CampingProduct;
