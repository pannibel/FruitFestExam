import React from "react";
import { useRef } from "react";
import { useState } from "react";
import CampingProduct from "./CampingProduct";
import ExtraProduct from "./ExtraProduct";
import TicketProduct from "./TicketProduct";
import { motion, AnimatePresence } from "framer-motion";

function Products(props) {
  const theForm = useRef(null);
  const [chosenSpot, setChosenSpot] = useState();
  let [warning, setWarning] = useState({ extras: true, camping: false });

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
    warning.extras = false;
  }

  function addExtras(e) {
    e.preventDefault();
    let extraprice;

    if (e.target.name === "Green camping") {
      extraprice = extra1price;
    } else if (e.target.name === "Medium size tent") {
      extraprice = extra2price;
    }
    if (e.target.name === "Large size tent") {
      extraprice = extra3price;
    }

    if (props.basket.find((item) => item.type === "ticket")) {
      productData = {
        name: e.target.name,
        type: "extra",
        amount: props.count.total,
        price: extraprice,
      };
      props.addToBasket(productData);
    } else {
      setWarning({ extras: true });
    }
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
    <div id="ticketlist" className="box2">
      <div className="box">
        <form ref={theForm} className="products">
          <motion.div
            key="bkr"
            initial={{ x: "100vw", zIndex: 10 }}
            animate={{ x: 0, zIndex: 10 }}
            exit={{ x: "-100vw", zIndex: 10 }}
            transition={{ duration: 1 }}
          >
            <TicketProduct
              count={props.count}
              setCount={props.setCount}
              addTicket={addTicket}
              cheapprice={cheapprice}
              expprice={expprice}
              removeFromBasket={props.removeFromBasket}
              basket={props.basket}
            />
          </motion.div>
          {props.count.reg > 0 || props.count.vip > 0 ? (
            <motion.div
              key="bkr"
              initial={{ x: "100vw", zIndex: 10 }}
              animate={{ x: 0, zIndex: 10 }}
              exit={{ x: "-100vw", zIndex: 10 }}
              transition={{ duration: 1 }}
            >
              <ExtraProduct
                addExtras={addExtras}
                warning={warning}
                extra1price={extra1price}
                extra2price={extra2price}
                extra3price={extra3price}
                count={props.count}
                setCount={props.setCount}
              />
            </motion.div>
          ) : (
            ""
          )}

          <CampingProduct
            addSpot={addSpot}
            warning={warning}
            setWarning={setWarning}
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
      <a className="linkMockup" href={`/`}>
        {" "}
        <button className="confirmation campIdle">
          Go back to <br></br>the main page
        </button>
      </a>
    </div>
  );
}

export default Products;
