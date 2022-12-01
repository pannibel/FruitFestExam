import React from "react";
import { useState } from "react";
import Basket from "./Basket";
import Products from "./Products";

function TicketList(props) {
    const [basket, setBasket] = useState([]);
    const [products, setProducts] = useState([]);

  return (
    <div>
      <Products products={products} addToBasket={addToBasket}/>
      <Basket setShowForm={props.setShowForm} products={products} basket={basket} removeFromBasket={removeFromBasket}/>
    </div>
  );
}

export default TicketList;
