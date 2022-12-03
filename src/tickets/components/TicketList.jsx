import React from "react";
import { useState } from "react";
import Basket from "./Basket";
import Products from "./Products";

function TicketList(props) {
    const [basket, setBasket] = useState([]);

    function addToBasket(data) {
      if (basket.find((entry) => entry.name === data.name)) {
        setBasket((oldBasket) =>
          oldBasket.map((entry) => {
            if (entry.name !== data.name) {
              return entry;
            }
            const copy = { ...entry };
            copy.amount = copy.amount + 1;
            return copy;
          })
        );
      } else {
          setBasket((oldBasket) => oldBasket.concat({ ...data}));
      }}
    
      function removeFromBasket(id) {
        // find and modify a product
        setBasket(oldBasket => {
          const subtracted = oldBasket.map(item => {
            if (item.name === name) {
              return {...item, amount: item.amount-1}
            }
            return item
          });
          const filtered = subtracted.filter(item => item.amount>0);
          return filtered;
        })
        //filter
      }

  return (
    <div>
      <Products addToBasket={addToBasket}/>
      <Basket setShowForm={props.setShowForm} basket={basket} removeFromBasket={removeFromBasket}/>
    </div>
  );
}

export default TicketList;
