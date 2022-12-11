import React from "react";
import { useRef } from "react";

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
      } else {
        console.log("you maxed the tickets out");
      }
      props.addTicket("regular");
    }

    if (e.target.name === "vipInc") {
      if (props.count.vip <= 3 && props.count.reg + props.count.vip < 4) {
        props.count.vip++;
      } else {
        console.log("you maxed the tickets out");
      }
      props.addTicket("vip");
    }

    //* DECREASING TICKET AMOUNT

    if (e.target.name === "regDec") {
      if (props.count.reg > 1) {
        props.count.reg--;
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
        props.addTicket("vip");
      } else {
        props.count.vip--;
        console.log("you can't buy minus amount dumby");
        props.removeFromBasket("VIP ticket");
      }
    }

    props.setCount({ reg: props.count.reg, vip: props.count.vip });

    //* DISABLING BUTTONS IF WE REACH 4 TICKETS OR MINUS TICKETS

    if (props.count.reg > 3 || props.count.reg + props.count.vip === 4) {
      regInc.current.disabled = true;
    } else if (props.count.reg < 4 || props.count.reg + props.count.vip !== 4) {
      regInc.current.disabled = false;
    }

    if (props.count.vip > 3 || props.count.reg + props.count.vip === 4) {
      vipInc.current.disabled = true;
    } else if (props.count.vip < 4 || props.count.reg + props.count.vip !== 4) {
      vipInc.current.disabled = false;
    }

    if (props.count.reg > 0) {
      regDec.current.disabled = false;
    } else if (props.count.reg === 0) {
      regDec.current.disabled = true;
    }

    if (props.count.vip > 0) {
      vipDec.current.disabled = false;
    } else if (props.count.vip === 0) {
      vipDec.current.disabled = true;
    }
  }

  return (
    <div className="form-control">
      <h3>1. Choose ticket type</h3>
      <h4>You can choose up to 4 tickets in total at a time.</h4>
      <div id="ticketOptions">
        <div id="chooseTicket">
          <h4>Regular ticket</h4>
          <p>
            <span>{props.cheapprice}</span>,-
          </p>
          <label htmlFor="ticketamount">Amount: </label>

          <div className="ticketOptionBtn">
            <button
              ref={regDec}
              name="regDec"
              onClick={changeCount}
              disabled={false}
            >
              -
            </button>
            <div>{props.count.reg}</div>
            <button
              ref={regInc}
              name="regInc"
              onClick={changeCount}
              disabled={false}
            >
              +
            </button>
          </div>
        </div>

        <div id="chooseTicket">
          <h4>VIP ticket</h4>
          <p>
            <span>{props.expprice}</span>,-
          </p>
          <label htmlFor="ticketamount">Amount: </label>

          <div className="ticketOptionBtn">
            <button
              ref={vipDec}
              name="vipDec"
              onClick={changeCount}
              disabled={false}
            >
              -
            </button>
            <div>{props.count.vip}</div>
            <button
              ref={vipInc}
              name="vipInc"
              onClick={changeCount}
              disabled={false}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicketProduct;
