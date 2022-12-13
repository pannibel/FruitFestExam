import React from "react";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import Products from "./Products";
import { confirmReservation } from "../../database";
function TicketList(props) {
  const [spotAdded, setSpotAdded] = useState(false);
  const [idValue, setidValue] = useState();
  const [campingSpots, setCampingSpots] = useState([]);
  let [count, setCount] = useState({ reg: 0, vip: 0 });
  let testValue;
  useEffect(() => {
    async function getData() {
      const res = await fetch("http://localhost:8080/available-spots");
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
          if (entry.name == "campingSpot") {
            console.log("it's been there");

            props.setBasket((oldBasket) => {
              const subtracted = oldBasket.map((item) => {
                if (entry.name === item.name) {
                  return { ...item, amount: 0 };
                }
                return item;
              });
              const filtered = subtracted.filter((item) => item.amount > 0);
              return filtered;
            });
            props.setBasket((oldBasket) => oldBasket.concat({ ...data }));
          }

          if (entry.name !== data.name) {
            return entry;
          }
          const copy = { ...entry };

          if (entry.name === "Regular ticket") {
            copy.amount = count.reg;
          } else if (entry.name === "VIP ticket") {
            copy.amount = count.vip;
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

  // useEffect(() => {

  //   3}, [])
  function reserveSpot() {
    const url = "http://localhost:8080/";
    fetch(url + "reserve-spot", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: "Alfheim",
        amount: 2,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response.id))
      .catch((err) => console.error(err));
  }

  return (
    <>
      <div className="ticketlist">
        <Products
          addToBasket={addToBasket}
          removeFromBasket={removeFromBasket}
          count={count}
          setCount={setCount}
          setSpotAdded={setSpotAdded}
          spotAdded={spotAdded}
          guestNumber={props.guestNumber}
          campingSpots={campingSpots}
        />
        <Basket
          campingSpots={campingSpots}
          count={count}
          setCount={setCount}
          setShowForm={props.setShowForm}
          basket={props.basket}
          removeFromBasket={removeFromBasket}
          setSpotAdded={setSpotAdded}
          setGuestNumber={props.setGuestNumber}
          guestNumber={props.guestNumber}
        />
        {/* <button onClick={confirmReservation}>yellow</button> */}
      </div>
      <button onClick={reserveSpot}>yellow</button>
    </>
  );
}

export default TicketList;
