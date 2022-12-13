import React from "react";
import { useRef } from "react";
import { useState } from "react";

function TicketProduct(props) {
  const regInc = useRef(null);
  const regDec = useRef(null);
  const vipInc = useRef(null);
  const vipDec = useRef(null);

  function changeCount(e) {
    e.preventDefault();

    //* INCREASING TICKET AMOUNT

    if (e.target.name === "regInc") {
      if (props.count.reg <= 3 && props.count.reg + props.count.vip < 4) {
        props.count.reg++;
        props.count.total++;
      } else {
        console.log("you maxed the tickets out");
      }
      props.addTicket("regular");
    }

    if (e.target.name === "vipInc") {
      if (props.count.vip <= 3 && props.count.reg + props.count.vip < 4) {
        props.count.vip++;
        props.count.total++;
      } else {
        console.log("you maxed the tickets out");
      }
      props.addTicket("vip");
    }

    //* DECREASING TICKET AMOUNT

    if (e.target.name === "regDec") {
      if (props.count.reg > 1) {
        props.count.reg--;
        props.count.total--;
        props.addTicket("regular");
      } else {
        props.count.reg--;
        console.log("you can't buy minus amount dumby");
        props.removeFromBasket("Regular ticket");
      }
    }

    if (e.target.name === "vipDec") {
      if (props.count.vip > 1) {
        props.count.vip--;
        props.count.total--;
        props.addTicket("vip");
      } else {
        props.count.vip--;
        console.log("you can't buy minus amount dumby");
        props.removeFromBasket("VIP ticket");
      }
    }

    //* DISABLING BUTTONS IF WE REACH 4 TICKETS OR MINUS TICKETS
  }

/*   function checkDisabled(button) {
    if (props.count.reg > 3 || props.count.reg + props.count.vip === 4) {
      setDisabled(regInc);
    }
    if (props.count.vip > 3 || props.count.reg + props.count.vip === 4) {
      setDisabled(vipInc);
    }
    if (props.count.reg > 0) {
      setDisabled(regDec);
    }
    if (props.count.vip > 0) {
      setDisabled(vipDec);
    }
  }
 */
  return (
    <div className="form-control">
      <h3>1. Choose ticket type</h3>
      <h4>You can choose up to 4 tickets at a time.</h4>
      <div id="ticketOptions">
        <div className="chooseTicket">
          <h5>Regular ticket</h5>
          <p>
            <span>{props.cheapprice}</span>,-
          </p>
          {/* <label htmlFor="ticketamount">Amount: </label> */}

          <div className="ticketOptionBtn">
            <button
              ref={regDec}
              name="regDec"
              onClick={changeCount}
              disabled={props.count.reg == 0 ? true : false}
              className="regDec">
              {" "}
            </button>
            <div>{props.count.reg}</div>
            <button
              ref={regInc}
              name="regInc"
              onClick={changeCount}
              disabled={props.count.reg > 3 || props.count.reg + props.count.vip === 4 ? true : false}
              className="regInc">
              {" "}
            </button>
          </div>
        </div>

        <div className="chooseTicket tickGold">
          <h5>VIP ticket</h5>
          <p>
            <span>{props.expprice}</span>,-
          </p>
          {/* <label htmlFor="ticketamount">Amount: </label> */}

          <div className="ticketOptionBtn">
            <button
              ref={vipDec}
              name="vipDec"
              onClick={changeCount}
              disabled={props.count.vip == 0 ? true : false}
              className="vipDec">
              {" "}
            </button>
            <div>{props.count.vip}</div>
            <button
              ref={vipInc}
              name="vipInc"
              onClick={changeCount}
              disabled={props.count.vip > 3 || props.count.reg + props.count.vip === 4 ? true : false}
              className="vipInc">
              {" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketProduct;
