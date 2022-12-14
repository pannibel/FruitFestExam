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

  function addTicket(tickettype) {
    console.log(props.count);

    if (
      tickettype === "regular" &&
      props.count.reg + props.count.vip <= 4 &&
      props.count.reg > 0
    ) {
      productData = {
        name: "Regular ticket",
        type: "ticket",
        amount: parseInt(props.count.reg),
        price: cheapprice * props.count.reg,
      };
    }

    if (
      tickettype === "vip" &&
      props.count.reg + props.count.vip <= 4 &&
      props.count.vip > 0
    ) {
      productData = {
        name: "VIP ticket",
        type: "ticket",
        amount: parseInt(props.count.vip),
        price: expprice * props.count.vip,
      };
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
    addSpot(e.target.value);  
  }

  function addSpot(value) {
      productData = {
        name: "campingSpot",
        type: value,
        amount: 1,
        price: "",
      };
      props.addToBasket(productData);
      props.setSpotAdded(true);
  }

  return (
    <div id="productList" className="box">
      <form ref={theForm} className="products">
        <TicketProduct
          count={props.count}
          setCount={props.setCount}
          addTicket={addTicket}
          cheapprice={cheapprice}
          expprice={expprice}
          removeFromBasket={props.removeFromBasket}
        />
        <ExtraProduct
          addExtras={addExtras}
          extra1price={extra1price}
          extra2price={extra2price}
          extra3price={extra3price}
        />
        <CampingProduct
          addSpot={addSpot}
          count={props.count}
          onChangeValue={onChangeValue}
          campingSpots={props.campingSpots}
          spotAdded={props.spotAdded}
          guestNumber={props.guestNumber}
          basket={props.basket}
          curCampBtn={props.curCampBtn}
          setCurCampBtn={props.setCurCampBtn}
        />
      </form>
    </div>
  );
}

export default Products;
