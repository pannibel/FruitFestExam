import React from 'react'

function Basket(props) {

// console.log(props.basket)
// console.log(props.basket.map(obj => obj.type));

/* const ticketInfo = props.basket.map((obj) => {
  if (obj.type === "ticket") {
    return obj.name
  }
}) */

  return (
    <div>
        <h2>Basket</h2>
        <h3>Tickets:</h3>
        <ul>
          {props.basket.map((item) => (
            <li key={item.name}>{item.name} x {item.amount}, {item.price}</li>
          ))}
        </ul>
        <button onClick={() => props.setShowForm(true)}>Checkout</button>
    </div>
  )
}

export default Basket