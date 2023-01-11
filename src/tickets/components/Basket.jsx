import React from "react";
import { useState } from "react";
import { reserveSpot } from "../../database";
import { useEffect } from "react";

function Basket(props) {
  const [spotsAvailable, setSpotsAvailable] = useState({
    Svartheim: "",
    Nilfheim: "",
    Helheim: "",
    Alfheim: "",
    Muspelheim: "",
  });

  useEffect(() => {
    props.campingSpots.forEach((el) => {
      setSpotsAvailable((old) => {
        const newObj = { ...old };
        newObj[el.area] = el.available;
        return newObj;
      });
    });
  }, [props.campingSpots]);

  function totalPrice() {
    let total = 0;
    props.basket.forEach((item) => {
      total += item.amount * item.price;
    });
    return total;
  }

  function totalGuests() {
    let i = 0;
    let area;
    props.basket.forEach((item) => {
      if (item.type === "ticket") {
        i = i + item.amount;
      }
      props.setGuestNumber(i);
    });

    props.basket.map((item) => {
      if (item.name === "campingSpot") {
        area = item.type;
      }
    });

    reserveSpot({
      area: area,
      amount: i,
    });
    console.log(area);
    console.log(i);
  }

  function controlCamping(item) {
    if (spotsAvailable[`${item}`] < props.count.total) {
      props.setSpotAdded(false);
      return "disabledTicket ticketItem";
    } else {
      props.setSpotAdded(true);
      return "ticketBasket ticketItem";
    }
  }

  function removeSetCurBtn(item) {
    console.log(props.curCampBtn);

    if (spotsAvailable[`${item}`] < props.count.total) {
      props.setSpotAdded(false);
      props.setCurCampBtn("");
    } else {
      props.setSpotAdded(true);
      props.setCurCampBtn(item);
    }
  }

  function resetAmount(item) {
    if (item === "Regular ticket") {
      props.count.reg = 0;
    } else if (item === "VIP ticket") {
      props.count.vip = 0;
    }

    props.count.total = props.count.reg + props.count.vip;

    console.log(props.count);
  }

  function removeExtras() {
    if (props.count.total === 0) {
      props.basket.map((product) => {
        if (product.type === "extra") {
          props.removeFromBasket(product.name);
          console.log("removed extra");
        }
      });
    }
  }

  return (
    <div id="basketCont">
      <div id="basket">
        <h3>Basket</h3>

        <div className="separateTickets">
          {props.basket.map((item) => {
            if (item.type == "ticket") {
              return (
                <div>
                <h4>Tickets:</h4>
                <div
                  key={item.name}
                  className={
                    item.name == "VIP ticket"
                      ? "ticketItem basketGold"
                      : "ticketItem"
                  }
                >
                  <p>
                    {item.name} x {item.amount}
                  </p>
                  <div className="ticketBasket">
                    <p>{item.amount * item.price},-</p>
                    <button
                      onClick={() => {
                        props.removeFromBasket(item.name);
                        resetAmount(item.name);
                        removeExtras();
                      }}
                      className="basketBtnRmv"
                    >
                      {" "}
                    </button>
                  </div>{" "}
                </div>
                </div>
              );
            }
          })}
        </div>

        <div>
          {props.basket.map((item) => {
            if (item.type == "extra") {
              return (
                <div>
                  <h4>Extras:</h4>
                  <div key={item.name} className="separateTickets ticketItem ">
                    <p>
                      {item.name} x {item.amount}
                    </p>
                    <div className="ticketBasket">
                      <p>{item.price * item.amount},-</p>
                      <button
                        onClick={() => props.removeFromBasket(item.name)}
                        className="basketBtnRmv"
                      >
                        {" "}
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div>
          {props.basket.map((item) => {
            if (item.name == "campingSpot") {
              return (
                <div>
                  <h4>Camping spot:</h4>
                  <div
                    key={item.type}
                    className={controlCamping(item.type)}
                    onChange={removeSetCurBtn(item.type)}
                  >
                    <p>{item.type}</p>
                    {/*  <button
                    onClick={() => {
                      props.removeFromBasket(item.type);
                      props.setSpotAdded(false);
                    }}
                    className="basketBtnRmv"
                  >
                    {" "}
                  </button> */}
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/*       <h3>Subtotal: {totalPrice()},-</h3>
      <h3>Booking fee: 99,-</h3> */}
        <h3 className="total_price">Total: {totalPrice()},-</h3>

        <button
          onClick={() => {
            {
              props.setShowForm(true);
              totalGuests();
              props.handleStartTimer();
            }
          }}
          className={
            props.basket.find((items) => items.type === "ticket") &&
            props.spotAdded
              ? "basketCheckout"
              : "disabledCheckout"
          }
          disabled={
            props.basket.find((items) => items.type === "ticket") &&
            props.spotAdded && !props.isTimerRunning
              ? false
              : true
          }
        >
          {" "}
        </button>

      </div>
      
    </div>
  );
}

export default Basket;
