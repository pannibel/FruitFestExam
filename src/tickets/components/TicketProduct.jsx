import React from 'react'
import { useRef } from "react";
import { useState } from "react";

function TicketProduct(props) {
  return (
    <div>
        <h3>1. Choose ticket type</h3>

    <div>
      <h4>Regular ticket</h4>
      <label htmlFor="ticketamount">Amount: </label>
      <select
        onChange={(event) => props.changeAmount1(event.target.value)}
        value={props.currentAmount1}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>
        Price: <span>{props.cheapprice}</span>,-
      </p>
      <button onClick={props.addTicket} name="Regular ticket">
        Add
      </button>
    </div>

    <div>
      <h4>VIP ticket</h4>
      <label htmlFor="ticketamount">Amount: </label>
      <select
        onChange={(event) => props.changeAmount2(event.target.value)}
        value={props.currentAmount2}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <p>
        Price: <span>{props.expprice}</span>,-
      </p>
      <button onClick={props.addTicket} name="VIP ticket">
        Add
      </button>
    </div>
  </div>
  )
}

export default TicketProduct