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
          props.setSpotAdded(false)
          return "disabledTicket ticketItem"}   
          else {
            props.setSpotAdded(true)
            return "ticketBasket ticketItem"
          }
      }



    function removeSetCurBtn(item) {
      console.log(props.curCampBtn);

      if (spotsAvailable[`${item}`] < props.count.total) {
        props.setSpotAdded(false)
        props.setCurCampBtn("")}   
        else {
          props.setSpotAdded(true)
          props.setCurCampBtn(item)
        }
  }


  return (
    <div id="basketCont">
      <div id="basket">
        <h3>Basket</h3>
        <h4>Tickets:</h4>
        <div className="separateTickets">
          {props.basket.map((item) => {
            if (item.type === "ticket") {
              return (
                <div key={item.name} className="ticketItem">
                  <p>
                    {item.name} x {item.amount}
                  </p>
                  <div className="ticketBasket">
                    <p>{item.amount * item.price},-</p>
                    <button
                      onClick={() => props.removeFromBasket(item.name)}
                      className="basketBtnRmv"
                    >
                      {" "}
                    </button>
                  </div>{" "}
                </div>
              );
            }
          })}
        </div>

        <h4>Extras:</h4>
        <div>
          {props.basket.map((item) => {
            if (item.type === "extra") {
              return (
                <div key={item.name} className="separateTickets ticketItem ">
                  <p>{item.name}</p>
                  <div className="ticketBasket">
                    <p>{item.amount * item.price},-</p>
                    <button
                      onClick={() => props.removeFromBasket(item.name)}
                      className="basketBtnRmv"
                    >
                      {" "}
                    </button>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <h4>Camping spot:</h4>
        <div>
          {props.basket.map((item) => {
            if (item.name === "campingSpot") {
              return (
                <div key={item.type} className={controlCamping(item.type)} onChange={removeSetCurBtn(item.type)}>
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
              );
            }
          })}
        </div>

        {/*       <h3>Subtotal: {totalPrice()},-</h3>
      <h3>Booking fee: 99,-</h3> */}
        <h3>Total: {totalPrice()},-</h3>

        <button
          onClick={() => {
            {
              props.setShowForm(true);
              totalGuests()
            }
          }}
          className={props.basket.find((items) => items.type === "ticket") 
          && props.spotAdded 
          ? "basketCheckout" : "disabledCheckout"}
          disabled={props.basket.find((items) => items.type === "ticket")
           && props.spotAdded 
           ? false : true}
        >
          {" "}
        </button>
      </div>
    </div>
  );
}

export default Basket;
