import React from "react";

function CurrentBand(props) {
  // chekcing current time
  const date = new Date();
  console.log(date);
  const showTime = date.getHours();
  const hourBasedIndex = Math.floor(Math.floor(showTime) / 2);
  // console.log(hourBasedIndex);
  let currentArray = Object.entries(props.currentBand);
  let currentHour = hourBasedIndex + ":00";
  console.log(currentHour);
  // function getOnlyDay() {
  //   let dayName = JSON.stringify(date);
  //   console.log(dayName);
  // }
  // getOnlyDay();
  const dayOfWeekDigit = new Date().getDay();
  console.log(dayOfWeekDigit);
  const dayOfWeekName = new Date().toLocaleString("default", {
    weekday: "short",
  });
  console.log(dayOfWeekName.toLowerCase()); // 👉️ Sunday
  // Sat Dec 03 2022 17:39:22 GMT+0100 (Central European Standard Time)

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
