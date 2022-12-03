import React from "react";

function CurrentBand(props) {
  // chekcing current time
  const date = new Date();
  console.log(date);
  const showTime = date.getHours();
  const hourBasedIndex = Math.floor(Math.floor(showTime) / 2);
  console.log(hourBasedIndex);
  let currentArray = Object.entries(props.currentBand);
  console.log(currentArray);

  // console.log(props.currentBand.Midgard);
  return (
    <>
      <div>Stage Midgard Band nr {hourBasedIndex}</div>
      <div>Stage Vanaheim Band nr {hourBasedIndex}</div>
      <div>Stage Jotunheim Band nr {hourBasedIndex}</div>
    </>
  );
}

export default CurrentBand;
