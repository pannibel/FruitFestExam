import React from "react";

function Burger() {
  return (
    <div className="burgerMenu">
      <a href={`tickets`}>
        <button className="tickets"></button>
      </a>
      <a href={`/`}>
        <button className="homepage"> </button>
      </a>
    </div>
  );
}

export default Burger;
