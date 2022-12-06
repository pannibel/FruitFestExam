import React from "react";
import { useState } from "react";
import Basket from "./Basket";
import Products from "./Products";

function TicketList(props) {
  const [currentAmount1, setCurrentAmount1] = useState(1);
  const [currentAmount2, setCurrentAmount2] = useState(1);
  const [spotAdded, setSpotAdded] = useState(false);

  const changeAmount1 = (newAmount) => {
    setCurrentAmount1(newAmount);
  };
  const changeAmount2 = (newAmount) => {
    setCurrentAmount2(newAmount);
  };

  function addToBasket(data) {
    if (props.basket.find((entry) => entry.name === data.name)) {
      props.setBasket((oldBasket) =>
        oldBasket.map((entry) => {
          if (entry.name !== data.name) {
            return entry;
          }

          const copy = { ...entry };
          if (entry.name === "Regular ticket") {
            copy.amount = currentAmount1;
          } else if (entry.name === "VIP ticket") {
            copy.amount = currentAmount2;
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
          return { ...item, amount: item.amount - 1 };
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
        currentAmount1={currentAmount1}
        currentAmount2={currentAmount2}
        changeAmount1={changeAmount1}
        changeAmount2={changeAmount2}
        setSpotAdded={setSpotAdded}
        spotAdded={spotAdded}
      />
      <Basket
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
