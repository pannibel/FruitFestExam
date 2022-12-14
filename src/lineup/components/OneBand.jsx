import React from 'react'

function OneBand(props) {
/*   let imageDir = props.data.logo;
  function pickImage() {
    if (!imageDir.includes("https://")) {
      imageDir = "http://localhost:8080/logos/" + props.data.logo;
    }
  }
  pickImage(); */

  return (
    <div>
      <div className="singleBandCont" onClick={props.openOneBand}>
          {" "}
          <img
            // src={imageDir}
            // alt={props.data.logoCredits}
            className="imgSingleBand"
            alt="img_singleband"
          ></img>
          <h4>{props.data.name}</h4>
          <div className="likeBtn">
            <button
              className="buttBlue"
              onClick={(e) => {
                handleClick(e);
              }}
              value="like"
            >
            </button>
          </div>
        </div>
      <button onClick={props.closeOneBand}>X</button>
    </div>
  )
}

export default OneBand