import { useState } from "react";
import "./App.scss";
import Countdown from "react-countdown";
// import imageSrc from "./assets/logo2.svg";
// import imageSrc2 from "../src/assets/date.svg";
import { useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// import { Outlet } from "react-router-dom";
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
    glftLoader.load("./../src/mountain_4.glb", (gltfScene) => {
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 6);
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
    const stats = Stats();
    document.body.appendChild(stats.dom);

    const animate = () => {
      // setTimeout(function () {
      //   requestAnimationFrame(animate);
      // }, 1000 / 30);
      if (loadedModel) {
        loadedModel.scene.rotation.y += 0.01;
      }
      // boxMesh.rotation.y += 0.01;
      stats.update();
      renderer.render(scene, camera);
      // renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };
    animate();

    // scene.add(boxMesh);
  }, []);

  return (
    <div>
      <canvas id="myThreeJsCanvas" className="test3D" />
      <div className="landingCont">
        <header className="appHeader">
          <a className="ticketsBtn" href={`tickets`}>
            Get tickets
          </a>
        </header>

        <div className="main">
          <div className="timerCont">
            <Countdown date={Date.now() + 1000000000} />
          </div>
          <img
            className="logo"
            src="src/assets/logo2.svg"
            alt="big logo of the festival"
          ></img>

          <img
            className="date"
            src="src/assets/date.svg"
            alt="big logo of the festival"
          ></img>

          <div className="btnCont">
            <a className="appBtn" href={`lineup`}>
              Go to app
            </a>
          </div>

          <div className="mainNamesCont"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
