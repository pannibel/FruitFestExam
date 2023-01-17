import { useState } from "react";
import "./App.scss";
import Countdown from "react-countdown";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import ImageTest from "./assets/logo2.png";
import ImageTest2 from "./assets/date.svg";
// import { BrowserRouter } from "react-router-dom";

function App() {
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

    const controls = new OrbitControls(camera, renderer.domElement);

    const animate = () => {
      if (loadedModel) {
        loadedModel.scene.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" className="test3D" />
      <div className="landingCont">
        <header className="appHeader">
          <a className="ticketsBtn" href={`tickets`}></a>
        </header>

        <div className="main">
          <div className="timerCont">
            <Countdown date={Date.now() + 1000000000} />
          </div>
          <img
            className="logo"
            src={ImageTest}
            alt="big logo of the festival"
          ></img>

          <img className="date" src={ImageTest2} alt="date logo"></img>

          <div className="btnCont">
            <a className="appBtn" href={`lineup`}></a>
          </div>

          <div className="mainNamesCont"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
