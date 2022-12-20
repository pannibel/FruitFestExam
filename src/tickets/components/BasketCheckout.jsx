import React from "react";
import { useRef } from "react";
function basketCheckout(props) {
  const theForm = useRef(null);
  return (
    <div id="basketCont">
      <div id="basket">
      <h3 className="total_price">Total: {props.totalPrice() + 99},-</h3>
        <div className="separateTickets">
          {props.basket.map((item) => {
            if (item.type == "ticket") {
              return (
                <>
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
                  </div>
                </div>
                </>
              );
            }
          })}
        </div>
        <div>
          {props.basket.map((item) => {
            if (item.type == "extra") {
              return (
                <>
                <h4>Extras:</h4>
                <div key={item.name} className="separateTickets ticketItem ">
                  <p>
                    {item.name} x {item.amount}
                  </p>
                  <div className="ticketBasket">
                    <p>{item.amount * item.price},-</p>
                  </div>
                </div>
                </>
              );
            }
          })}
        </div>
        <h4>Camping spot:</h4>
        <div className="separateTickets ticketItem ">
          {props.basket.map((item) => {
            if (item.name == "campingSpot") {
              return <p>{item.type}</p>;
            }
          })}
        </div>
        <ul>
          <li>Booking fee: 99,-</li>
        </ul>
      </div>
    </div>
  );
}

export default basketCheckout;
