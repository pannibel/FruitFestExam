import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CampingProduct from "./CampingProduct";
import ExtraProduct from "./ExtraProduct";
import TicketProduct from "./TicketProduct";

function Products(props) {
  const theForm = useRef(null);

  const cheapprice = 799;
  const expprice = 1299;
  const extra1price = 100;
  const extra2price = 200;
  const extra3price = 300;
  let chosenSpot;
  let productData = {
    name: "",
    type: "",
    amount: "",
    price: "",
  };

  function addTicket(e) {
    e.preventDefault();

    if (e.target.name === "Regular ticket") {
      productData = {
        name: e.target.name,
        type: "ticket",
        amount: parseInt(props.currentAmount1),
        price: cheapprice * props.currentAmount1,
      };
    }

    if (e.target.name === "VIP ticket") {
      productData = {
        name: e.target.name,
        type: "ticket",
        amount: parseInt(props.currentAmount2),
        price: expprice * props.currentAmount2,
      };
    }

    console.log(productData);

    props.addToBasket(productData);
  }

  function addExtras(e) {
    e.preventDefault();
    console.log(e.target.name, "extra added");

    let extraprice;

    if (e.target.name === "extra1") {
      extraprice = extra1price;
    } else if (e.target.name === "extra2") {
      extraprice = extra2price;
    }
    if (e.target.name === "extra3") {
      extraprice = extra3price;
    }

    productData = {
      name: e.target.name,
      type: "extra",
      amount: 1,
      price: extraprice,
    };
    console.log(productData);

    props.addToBasket(productData);
  }

  function onChangeValue(e) {

    chosenSpot = e.target.value;
    console.log(chosenSpot)
  }

  function addSpot(e) {
    e.preventDefault();

    productData = {
      name: chosenSpot,
      type: "camping spot",
      amount: 1,
      price: "",
    };

    console.log(productData);
    props.addToBasket(productData);
  }

  return (
    <div>
      <h2>Products</h2>

      <div>
        <form ref={theForm} className="products">
            <TicketProduct
              currentAmount1={props.currentAmount1}
              currentAmount2={props.currentAmount2}
              addTicket={addTicket}
              changeAmount1={props.changeAmount1}
              changeAmount2={props.changeAmount2}
              cheapprice={cheapprice}
              expprice={expprice}
            />
            <ExtraProduct
              addExtras={addExtras}
              extra1price={extra1price}
              extra2price={extra2price}
              extra3price={extra3price}
            />
            <CampingProduct addSpot={addSpot} onChangeValue={onChangeValue}/>
        </form>
    </div>
    </div>
  );
}

export default Products;
