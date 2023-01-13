import React from "react";
import { useState } from "react";
import "../Tickets.scss";
import "../ticketButtons.scss";
import CheckoutForm from "./components/CheckoutForm";
import TicketHeader from "./components/TicketHeader";
import TicketList from "./components/TicketList";
import ReactDOM from "react-dom";
// import MountainTest from "../assets/mountain_4.glb";
import ImageTest from "../assets/logo2.svg";

// import Mountain from "../src/assets/mountain_4";
// ? end of imported components
// npm install react-countdown --save
import Countdown from "react-countdown";
// ! =======================================================
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

// ? ========================================================

function Tickets() {
  
  // const { nodes } = useGLTF(modelSrc);
  const [idValue, setIdValue] = useState();
  const [showForm, setShowForm] = useState(false);
  const [basket, setBasket] = useState([]);
  const [guestNumber, setGuestNumber] = useState(0);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (!isTimerRunning) {
      return;
    }

    const timer = setTimeout(() => {
      setIsPopupOpen(true);
      setIsTimerRunning(false);
    }, 300000); // 5 minutes in milliseconds -- change to 10000 (10sec) to see

    return () => clearTimeout(timer);
  }, [isTimerRunning]);

  const handleStartTimer = () => {
    setIsTimerRunning(true);
    console.log("timer started");
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    console.log("popup closed");
  };

  // ! =======================================================
  // ! =======================================================
  useEffect(() => {
    // laoding the scene
    const scene = new THREE.Scene();

    // supposedly background img loader
    const loader = new THREE.TextureLoader();
    loader.setCrossOrigin("");
    const bgTexture = loader.load(function (texture) {
      var img = texture.image;
      bgWidth = img.width;
      bgHeight = img.height;
      resize();
    });
    scene.background = bgTexture;
    bgTexture.wrapS = THREE.MirroredRepeatWrapping;
    bgTexture.wrapT = THREE.MirroredRepeatWrapping;

    // my uplaoded 3d o

    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
    const glftLoader = new GLTFLoader();
    glftLoader.setDRACOLoader(dracoLoader);
    let loadedModel;
    // !this one works in dev mode ,as a path for the mountain
    // ! change it in LineupApp.jsx, App.jsx and Tickets.jsx
    //? "../src/assets/mountain_4.glb"
    // ! and this one should be used for the manual build
    //? "assets/mountainFin.glb"

    glftLoader.load("../src/assets/mountainFin.glb", (gltfScene) => {
      loadedModel = gltfScene;
      // console.log(loadedModel);
      gltfScene.scene.rotation.x = Math.PI / 8;
      gltfScene.scene.position.y = -10;
      gltfScene.scene.scale.set(5, 5, 5);
      scene.add(gltfScene.scene);
    });
    // camera
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 96;
    const canvas = document.getElementById("myThreeJsCanvas");

    // renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // added ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 2);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    // added spotlight
    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(10, 64, 32);
    scene.add(spotLight);

    // const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
    // const boxMaterial = new THREE.MeshNormalMaterial();
    // const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    // scene.add(boxMesh);

    const controls = new OrbitControls(camera, renderer.domElement);
    // const stats = Stats();
    // document.body.appendChild(stats.dom);

    const animate = () => {
      // setTimeout(function () {
      //   requestAnimationFrame(animate);
      // }, 1000 / 30);
      if (loadedModel) {
        loadedModel.scene.rotation.y += 0.01;
      }
      // boxMesh.rotation.y += 0.01;
      // stats.update();
      renderer.render(scene, camera);
      // renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    // scene.add(boxMesh);
  }, []);
  // ? ========================================================
  // ? ========================================================

  return (
    <div>
      {/* <div > */}
      <canvas id="myThreeJsCanvas" className="test3D" />
      {/* </div> */}
      {/* <canvas id="myThreeJsCanvas" /> */}
      <a className="logoCheckout" href={`/`}>
        {" "}
        <img
          className="logo"
          src={ImageTest}
          alt="big logo of the festival"
        ></img>
      </a>
      <main>
        {!showForm && (
          <TicketList
            setIdValue={setIdValue}
            idValue={idValue}
            setShowForm={setShowForm}
            className={TicketList}
            basket={basket}
            setBasket={setBasket}
            setGuestNumber={setGuestNumber}
            guestNumber={guestNumber}
            handleStartTimer={handleStartTimer}
            isTimerRunning={isTimerRunning}
          />
        )}
        {showForm && (
          <CheckoutForm
            setIdValue={setIdValue}
            idValue={idValue}
            showForm={showForm}
            setShowForm={setShowForm}
            basket={basket}
            guestNumber={guestNumber}
          />
        )}

        {isPopupOpen && (
          <div className="timeupMain">
            <div className="timeupCont">
              <div className="timeUp">
                <h3>Oh no! The session has timed out.</h3>
                <p>
                  You reached the limit of how long you can reserve tickets.
                </p>
                <a className="linkMockup" href={`/`} onClick={handleClosePopup}>
                  {" "}
                  <button className="confirmation">
                    Go back to the main page
                  </button>
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Tickets;
