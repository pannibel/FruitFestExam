import React from 'react'

function GuestInfo(props) {
  return (
    <div>
        <h1>Guest Info</h1>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>
        <p>Lorem Ipsum</p>

        <button onClick={props.setNextPage}>Next</button>
    </div>
  )
}

export default GuestInfo