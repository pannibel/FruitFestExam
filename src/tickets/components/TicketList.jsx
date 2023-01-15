import React from "react";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import Products from "./Products";
import { confirmReservation } from "../../database";

function TicketList(props) {
  const [spotAdded, setSpotAdded] = useState(false);
  const [campingSpots, setCampingSpots] = useState([]);
  const [curCampBtn, setCurCampBtn] = useState();

  let [count, setCount] = useState({ reg: 0, vip: 0, total: 0 });
  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://bitter-grass-7071.fly.dev/available-spots"
      );
      const data = await res.json();
      // console.log(data);
      setCampingSpots(data);
    }
    getData();
  }, []);

  function addToBasket(data) {
    if (props.basket.find((entry) => entry.name === data.name)) {
      props.setBasket((oldBasket) =>
        oldBasket.map((entry) => {
          if (entry.name !== data.name) {
            return entry;
          }
          const copy = { ...entry };

          if (entry.name === "Regular ticket") {
            copy.amount = count.reg;
          }
          if (entry.name === "VIP ticket") {
            copy.amount = count.vip;
          }
          /*           if (entry.name === "Medium size tent") {
            copy.amount++
          }
          if (entry.name === "Large size tent") {
            copy.amount++
          } */
          if (entry.name === "campingSpot") {
            copy.name = data.name;
            copy.type = data.type;
          }
          return copy;
        })
      );
    } else {
      props.setBasket((oldBasket) => oldBasket.concat({ ...data }));
    }
  }

  function removeFromBasket(name) {
    // find and modify a product
    props.setBasket((oldBasket) => {
      const subtracted = oldBasket.map((item) => {
        if (item.name === name) {
          return { ...item, amount: 0 };
        }
        return item;
      });

      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
  }

  return (
    <>
      {" "}
      <div className="ticketlist">
        <Products
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          count={count}
          setCount={setCount}
          setSpotAdded={setSpotAdded}
          spotAdded={spotAdded}
          guestNumber={props.guestNumber}
          setGuestNumber={props.setGuestNumber}
          campingSpots={campingSpots}
          basket={props.basket}
          curCampBtn={curCampBtn}
          setCurCampBtn={setCurCampBtn}
          setShowForm={props.setShowForm}
          handleStartTimer={props.handleStartTimer}
          isTimerRunning={props.isTimerRunning}
          windowSize={windowSize}
        />{" "}
        {/* <div className="fixedBasket"> */}
        <Basket
          setIdValue={props.setIdValue}
          idValue={props.idValue}
          campingSpots={campingSpots}
          count={count}
          setCount={setCount}
          setShowForm={props.setShowForm}
          basket={props.basket}
          removeFromBasket={removeFromBasket}
          setSpotAdded={setSpotAdded}
          spotAdded={spotAdded}
          setGuestNumber={props.setGuestNumber}
          guestNumber={props.guestNumber}
          curCampBtn={curCampBtn}
          setCurCampBtn={setCurCampBtn}
          handleStartTimer={props.handleStartTimer}
          isTimerRunning={props.isTimerRunning}
        />{" "}
        {/* </div> */}
      </div>
    </>
  );
}

export default TicketList;
