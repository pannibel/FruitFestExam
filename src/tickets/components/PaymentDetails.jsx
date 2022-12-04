import React from 'react'

function PaymentDetails(props) {
  return (
    <div>
    <h1>Payment Details</h1>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>
    <p>Lorem Ipsum</p>

    <button onClick={props.setPreviousPage}>Back</button>
    <button onClick={props.setNextPage}>Next</button>
</div>
  )
}

export default PaymentDetails