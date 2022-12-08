import React from 'react'
import { useRef } from "react";
import { useState } from "react";

function TicketProduct(props) {
  let [count, setCount] = useState({reg:0, vip:0});

  function incrementCount(e) {
    e.preventDefault();

    if (e.target.name === "regInc") {
      if (count.reg <= 3) {
        count.reg++;
        count.vip = count.vip;
        console.log(count.reg)
      } else {
        console.log("you maxed the tickets out")
        console.log(count)
      };
    }

    if (e.target.name === "vipInc") {
      if (count.vip <= 3) {
        count.vip++;
        count.reg = count.reg;
        console.log(count.vip)
      } else {
        console.log("you maxed the tickets out")
        console.log(count)
      }
    }

    setCount({reg: count.reg, vip: count.vip});

  }

  function decrementCount(e) {
    e.preventDefault();

    if (e.target.name === "regDec") {
      if (count.reg > 0) {
        count.reg--;
        count.vip = count.vip;
        console.log(count.reg)
      } else {
        console.log("you can't buy minus amount dumby")
        console.log(count)
      };
    }

    if (e.target.name === "vipDec") {
      if (count.vip > 0) {
        count.vip--;
        count.reg = count.reg;
        console.log(count.vip)
      } else {
        console.log("you can't buy minus amount dumby")
        console.log(count)
      }
    }

    setCount({reg: count.reg, vip: count.vip});
  }

  return (
      <div className="form-control">
        <h3>1. Choose ticket type</h3>

    <div>
      <h4>Regular ticket</h4>
      <p>
        Price: <span>{props.cheapprice}</span>,-
      </p>
      <label htmlFor="ticketamount">Amount: </label>

      <div>
      <button name="regDec" onClick={decrementCount}>-</button>
      <div>{count.reg}</div>
      <button name="regInc" onClick={incrementCount}>+</button>
      </div>

      <button onClick={props.addTicket} name="Regular ticket">
        Add
      </button>
    </div>

    <div>
      <h4>VIP ticket</h4>
      <p>
        Price: <span>{props.expprice}</span>,-
      </p>
      <label htmlFor="ticketamount">Amount: </label>
 
      <div>
      <button name="vipDec" onClick={decrementCount}>-</button>
      <div>{count.vip}</div>
      <button name="vipInc" onClick={incrementCount}>+</button>
      </div>
      
      <button onClick={props.addTicket} name="VIP ticket">
        Add
      </button>
    </div>
    </div>
  )
}

export default TicketProduct