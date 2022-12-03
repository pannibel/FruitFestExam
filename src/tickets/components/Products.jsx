import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Products(props) {
  const theForm = useRef(null);
  const [currentAmount1, setCurrentAmount1] = useState(1);
  const [currentAmount2, setCurrentAmount2] = useState(1); 

  const changeAmount1 = (newAmount) => {setCurrentAmount1(newAmount)}
  const changeAmount2 = (newAmount) => {setCurrentAmount2(newAmount)}


  // const [amount, setAmount] = useState("");
  const cheapprice = 1111;
  const expprice = 1112;
  const extra1price = 100;
  const extra2price = 200;
  const extra3price = 300;
  let productData = {
    name: "",
    type: "",
    amount: "",
    price: "",
  };

  function addTicket(e) {
    e.preventDefault();

    if (e.target.name === "cheapticket") {
      productData = {
        name: e.target.name,
        type: "ticket",
        amount: parseInt(currentAmount1),
        price:
          cheapprice * currentAmount1,
      };
    }

    if (e.target.name === "expensiveticket") {
      productData = {
        name: e.target.name,
        type: "ticket",
        amount: parseInt(currentAmount2),
        price: expprice * currentAmount2,
      };
    }

    console.log(productData);

    props.addToBasket(productData);
  }

  function addExtras(e) {
    e.preventDefault();
    console.log(e.target.name, "extra added");

    let extraprice;

    if (e.target.name === "extra1") {
      extraprice = extra1price;
    } else if (e.target.name === "extra2") {
      extraprice = extra2price;
    }
    if (e.target.name === "extra3") {
      extraprice = extra3price;
    }

    productData = {
      name: e.target.name,
      type: "extra",
      amount: 1,
      price: extraprice,
    };
    console.log(productData);

    props.addToBasket(productData);
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
              <label htmlFor="ticketamount">Amount: </label>
              <select
                onChange={(event) => changeAmount1(event.target.value)}
                value={currentAmount1}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <p>
                Price: <span>{cheapprice}</span>,-
              </p>
              <button onClick={addTicket} name="cheapticket">
                Add
              </button>
            </div>

            <div>
              <h4>Expensive ticket</h4>
              <label htmlFor="ticketamount">Amount: </label>
              <select
                onChange={(event) => changeAmount2(event.target.value)}
                value={currentAmount2}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <p>
                Price: <span>{expprice}</span>,-
              </p>
              <button onClick={addTicket} name="expensiveticket">
                Add
              </button>
            </div>
          </div>

          <div className="form-control">
            <h3>2. Add extras</h3>

            <label htmlFor="form-extras">VIP treatment</label>
            <p>
              Price: <span>{extra1price}</span>,-
            </p>
            <button onClick={addExtras} name="extra1">
              Add
            </button>

            <label htmlFor="form-extras">Better food</label>
            <p>
              Price: <span>{extra2price}</span>,-
            </p>
            <button onClick={addExtras} name="extra2">
              Add
            </button>

            <label htmlFor="form-extras">No racist comments</label>
            <p>
              Price: <span>{extra3price}</span>,-
            </p>
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
