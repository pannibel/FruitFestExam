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

    if (tickettype === "regular" && props.count.reg + props.count.vip <= 4 && props.count.reg > 0) {
        productData = {
          name: "regular",
          type: "ticket",
          amount: parseInt(props.count.reg),
          price: cheapprice * props.count.reg,
        };
      }
    

    if (tickettype === "vip" && props.count.reg + props.count.vip <= 4 && props.count.vip > 0) {
        productData = {
          name: "vip",
          type: "ticket",
          amount: parseInt(props.count.vip),
          price: expprice * props.count.vip,
        }
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
  // function checkAvailSpots() {

  // }

  function addSpot(e) {
    e.preventDefault();
    if (props.spotAdded === false) {
      props.setSpotAdded(true);

      productData = {
        name: chosenSpot,
        type: "camping spot",
        amount: 1,
        price: "",
      };

      props.addToBasket(productData);
    }
    if (props.spotAdded === true) {
      console.log("action not possible");
    }
  }

  return (
    <div>
      <h2>Products</h2>

      <div>
        <form ref={theForm} className="products">
          <TicketProduct
            count={props.count}
            setCount={props.setCount}
            addTicket={addTicket}
            cheapprice={cheapprice}
            expprice={expprice}
          />
          <ExtraProduct
            addExtras={addExtras}
            extra1price={extra1price}
            extra2price={extra2price}
            extra3price={extra3price}
          />
          <CampingProduct
            addSpot={addSpot}
            onChangeValue={onChangeValue}
            campingSpots={props.campingSpots}
          />
        </form>
      </div>
    </div>
  );
}

export default Products;
