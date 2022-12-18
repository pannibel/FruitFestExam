import React from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
function Box() {
  return (
    <mesh>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}
// ? threeJS

// loader.load("./test_mountain_1.glb", function (gltf) {});

function Confirmation(props) {
  return (
    <div>
      {" "}
      <div id="productList " className="confirmation box">
        <h2>Payment Succesfull</h2>
        <h1>Thank you for your purchase!</h1>
        <h2>Your tickets have been sent to your email address.</h2>
        <a className="linkMockup" href={`/`}>
          {" "}
          <button className="confirmation campIdle">
            Go back to the main page
          </button>
        </a>
      </div>{" "}
      <Canvas>
        <Box />
      </Canvas>
    </div>
  );
}

export default Confirmation;
