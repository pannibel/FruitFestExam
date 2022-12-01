import React from 'react'

function Basket(props) {
  return (
    <div>
        <h2>Basket</h2>
        <button onClick={() => props.setShowForm(true)}>Checkout</button>
    </div>
  )
}

export default Basket