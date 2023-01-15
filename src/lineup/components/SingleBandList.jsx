import React from "react";

function SingleBand(props) {

  function handleClick(e) {
    e.target.classList.toggle("buttRed");
    props.data.liked = !props.data.liked;
  }

  let imageDir = props.data.logo;
  function pickImage() {
    if (!imageDir.includes("https://")) {
      imageDir = "https://bitter-grass-7071.fly.dev/logos/" + props.data.logo;
    }
  }
  pickImage();

  return (
    <div className="singleBandContCont">
      {props.data.hasOwnProperty("letter") ? (
        <div className="bandslistLetter">
          <p>{props.data.letter}</p>
        </div>
      ) : (
        <div className="contCont">
          <div
            className="singleBandCont"
            onClick={() => props.openOneBand(props.data.name)}
          >
            {" "}
            <img
              src={imageDir}
              className="imgSingleBand"
              alt="img_singleband"
            ></img>
            <h4>{props.data.name}</h4>
          </div>
          <div className="likeBtn">
            <button
              className={props.data.liked ? "buttRed" : "buttBlue"}
              onClick={(e) => handleClick(e)}
              value="like"
            >{""}</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SingleBand;
