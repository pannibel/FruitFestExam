import React from 'react'

function GuestInfo(props) {
  let i = 0;

  return (
    <div>
        <h1>Guest Info</h1>
        <p>Guest number: {props.guestNumber}</p>
        {[...Array(props.guestNumber)].map((elementInArray, index) => ( 
    <div className="" key={i++}>
      <h3>Guest info {i+1}</h3>
      <p>First name</p>
      <p>Last name</p>
    </div> 
    ))}

        <button onClick={props.changePage} name="next">Next</button>
    </div>
  )
}

export default GuestInfo