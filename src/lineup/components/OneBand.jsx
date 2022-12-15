import React from 'react'

function OneBand(props) {
let imageDir = props.openedBand.logo;
  function pickImage() {
    if (!imageDir.includes("https://")) {
      imageDir = "http://localhost:8080/logos/" + props.openedBand.logo;
    }
  }
  pickImage();

  return (
      <div className={props.singleBandState ? "oneBand" : "hidden"}>
          {" "}
          <img
            src={imageDir}
            alt={props.data.logoCredits}
            className="imgOneBand"
          ></img>
          <h3>{props.openedBand.name}</h3>

          <div className='genreCont'>
          <p>{props.openedBand.genre}</p>
          </div>

          <div className='bandBioCont'>
          <p className='bandBio'>{props.openedBand.bio}</p>
          </div>
      <button className="closeBtn" onClick={props.openOneBand}> </button>
    </div>
  )
}

export default OneBand