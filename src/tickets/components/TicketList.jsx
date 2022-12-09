import React from "react";
import { useState, useEffect } from "react";
import Basket from "./Basket";
import Products from "./Products";

function TicketList(props) {
  const [spotAdded, setSpotAdded] = useState(false);
  const [campingSpots, setCampingSpots] = useState([]);
  let [count, setCount] = useState({reg:0, vip:0});

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
          if (entry.name !== data.name) {
            return entry;
          }
          const copy = { ...entry };

          if (entry.name === "regular") {
            copy.amount = count.reg;
          } else if (entry.name === "vip") {
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
          return { ...item, amount: 0};
        }
        return item;
      });
      const filtered = subtracted.filter((item) => item.amount > 0);
      return filtered;
    });
    //filter
  }

  console.log(props.basket);

  return (
    <div className="ticketlist">
      <Products
        addToBasket={addToBasket}
        count={count}
        setCount={setCount}
        setSpotAdded={setSpotAdded}
        spotAdded={spotAdded}
        guestNumber={props.guestNumber}
        campingSpots={campingSpots}
      />
      <Basket
        count={count}
        setCount={setCount}
        setShowForm={props.setShowForm}
        basket={props.basket}
        removeFromBasket={removeFromBasket}
        setSpotAdded={setSpotAdded}
        setGuestNumber={props.setGuestNumber}
        guestNumber={props.guestNumber}
      />
    </div>
  );
}

export default TicketList;
