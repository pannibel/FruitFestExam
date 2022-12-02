import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Products(props) {
  const theForm = useRef(null);
  // const [amount, setAmount] = useState("");
  let ticketProcuct = {
    tickettype: "",
    amount: "",
    price: "",
  }

  function addTicket(e) {
    e.preventDefault();

    if (e.target.name === "cheap") {
      ticketProcuct = {
        tickettype: e.target.name,
        amount: parseInt(theForm.current.elements.cheapamount.value),
        price: 1111 * parseInt(theForm.current.elements.cheapamount.value)
      }
    }

    if (e.target.name === "expensive") {
      ticketProcuct = {
        tickettype: e.target.name,
        amount: parseInt(theForm.current.elements.expamount.value),
        price: 1112 * parseInt(theForm.current.elements.expamount.value)
      }
    }

    console.log(ticketProcuct);

    props.addToBasket(ticketProcuct);
  }

  function addExtras(e) {
    e.preventDefault();
    console.log(e.target.name, "extra added");
  }

  function addSpot(e) {
    e.preventDefault();
    console.log(e.target.name, "spot picked");
  }

  return (
    <div>
      <h2>Products</h2>

      <div>
        <form ref={theForm}>
          <div className="form-control">
            <h3>1. Choose ticket type</h3>

            <div>
              <h4>Cheap ticket</h4>
              <label htmlFor="ticketamount">Amount</label>
              <input type="number" name="cheapamount"/>
              <span name="cheapprice">Price: 1111,-</span>
              <button onClick={addTicket} name="cheap">
                Add
              </button>
            </div>

            <div>
              <h4>Expensive ticket</h4>
              <label htmlFor="ticketamount">Amount</label>
              <input type="number" name="expamount"/>
              <span name="expprice">Price: 1112,-</span>
              <button onClick={addTicket} name="expensive">
                Add
              </button>
            </div>
          </div>

          <div className="form-control">
            <h3>2. Add extras</h3>

            <label htmlFor="form-extras">VIP treatment</label>
            <button onClick={addExtras} name="etrxa1">
              Add
            </button>

            <label htmlFor="form-extras">Better food</label>
            <button onClick={addExtras} name="extra2">
              Add
            </button>

            <label htmlFor="form-extras">No racist comments</label>
            <button onClick={addExtras} name="extra3">
              Add
            </button>
          </div>

          <div className="form-control">
            <h3>3. Choose your camping spot</h3>

            <label htmlFor="form-spot">This spot</label>
            <input type="checkbox" name="spot" />

            <button onClick={addSpot}>Add</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Products;
