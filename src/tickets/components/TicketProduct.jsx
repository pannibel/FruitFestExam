import React from 'react'
import { useRef } from "react";
import { useState } from "react";

function TicketProduct(props) {

  function incrementCount(e) {
    e.preventDefault();

    if (e.target.name === "regInc") {
      if (props.count.reg <= 3 && props.count.reg + props.count.vip < 4) {
        props.count.reg++;
        console.log(props.count.reg)
      } else {
        console.log("you maxed the tickets out")
        console.log(props.count)
      };
      props.addTicket("regular")
    }

    if (e.target.name === "vipInc") {
      if (props.count.vip <= 3 && props.count.reg + props.count.vip < 4) {
        props.count.vip++;
        console.log(props.count.vip)
      } else {
        console.log("you maxed the tickets out")
        console.log(props.count)
      };
      props.addTicket("vip")
    }

    props.setCount({reg: props.count.reg, vip: props.count.vip});
    }


  function decrementCount(e) {
    e.preventDefault();

    if (e.target.name === "regDec") {
      if (props.count.reg > 1) {
        props.count.reg--;
        console.log(props.count.reg)
      } else {
        console.log("you can't buy minus amount dumby")
        console.log(props.count)
      };
      props.addTicket("regular")
    }

    if (e.target.name === "vipDec") {
      if (props.count.vip > 1) {
        props.count.vip--;
        console.log(props.count.vip)
      } else {
        console.log("you can't buy minus amount dumby")
        console.log(props.count)
      };
      props.addTicket("vip")
    }

    props.setCount({reg: props.count.reg, vip: props.count.vip})

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
      <button name="regDec" onClick={decrementCount} disabled={false}>-</button>
      <div>{props.count.reg}</div>
      <button name="regInc" onClick={incrementCount} disabled={false}>+</button>
      </div>
    </div>

    <div>
      <h4>VIP ticket</h4>
      <p>
        Price: <span>{props.expprice}</span>,-
      </p>
      <label htmlFor="ticketamount">Amount: </label>
 
      <div>
      <button name="vipDec" onClick={decrementCount} disabled={false}>-</button>
      <div>{props.count.vip}</div>
      <button name="vipInc" onClick={incrementCount} disabled={false}>+</button>
      </div>
    </div>
    </div>
  )
}

export default TicketProduct