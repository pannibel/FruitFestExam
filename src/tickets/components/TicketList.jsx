import React from "react";
import { useState } from "react";
import Basket from "./Basket";
import Products from "./Products";

function TicketList(props) {
    const [basket, setBasket] = useState([]);

    function addToBasket(data) {
        // do we have the product?
        if (cart.find((entry) => entry.id === data.id)) {
          setCart((oldCart) =>
            oldCart.map((entry) => {
              if (entry.id !== data.id) {
                return entry;
              }
              const copy = { ...entry };
              copy.amount = copy.amount + 1;
              return copy;
            })
          );
        } else {
          setBasket((oldCart) => oldCart.concat({ ...data, amount: 1 }));
        }
      }
    
      function removeFromBasket(id) {
        // find and modify a product
        setBasket(oldCart => {
          const subtracted = oldCart.map(item => {
            if (item.id === id) {
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
