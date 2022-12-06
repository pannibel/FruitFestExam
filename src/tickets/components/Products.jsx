import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CampingProduct from "./CampingProduct";
import ExtraProduct from "./ExtraProduct";
import TicketProduct from "./TicketProduct";

function Products(props) {
  const theForm = useRef(null);
  const [chosenSpot, setChosenSpot] = useState();

  const cheapprice = 799;
  const expprice = 1299;
  const extra1price = 249;
  const extra2price = 299;
  const extra3price = 399;
  let productData = {
    name: "",
    type: "",
    amount: "",
    price: "",
  };

  function addTicket(e) {
    e.preventDefault();

    if (e.target.name === "Regular ticket") {
      if (props.currentAmount1 > 0) {
        productData = {
          name: e.target.name,
          type: "ticket",
          amount: parseInt(props.currentAmount1),
          price: cheapprice * props.currentAmount1,
        };
      } else if (props.currentAmount1 === 0) {
        console.log("select amount first pls")
      }
    }

    if (e.target.name === "VIP ticket") {
      if (props.currentAmount2 > 0) {
      productData = {
        name: e.target.name,
        type: "ticket",
        amount: parseInt(props.currentAmount2),
        price: expprice * props.currentAmount2,
      };
    }} else if (props.currentAmount2 === 0) {
      console.log("select amount first pls")
    }

    props.addToBasket(productData);
  }

  function addExtras(e) {
    e.preventDefault();
    let extraprice;

    if (e.target.name === "Green camping") {
      extraprice = extra1price;
    } else if (e.target.name === "2-person tent set up") {
      extraprice = extra2price;
    }
    if (e.target.name === "3-person tent set up") {
      extraprice = extra3price;
    }

    productData = {
      name: e.target.name,
      type: "extra",
      amount: 1,
      price: extraprice,
    };

    props.addToBasket(productData);
  }

  function onChangeValue(e) {
    setChosenSpot(e.target.value);
  }

  function addSpot(e) {
    e.preventDefault();
    if (props.spotAdded === false) {
      props.setSpotAdded(true)
  
      productData = {
        name: chosenSpot,
        type: "camping spot",
        amount: 1,
        price: "",
      };
  
      props.addToBasket(productData);
    };
    if (props.spotAdded === true) {
      console.log("action not possible")
    }
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
          <CampingProduct addSpot={addSpot} onChangeValue={onChangeValue} />
        </form>
      </div>
    </div>
  );
}

export default Products;
