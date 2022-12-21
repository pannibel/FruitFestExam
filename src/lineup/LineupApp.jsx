import React from "react";
import "../LineUpApp.scss";
import "../dayButtons.scss";
import { useState, useEffect } from "react";
import Bandslist from "./components/Bandslist";
import Schedule from "./components/Schedule";
import CurrentBand from "./components/CurrentBand";
import Burger from "./components/Burger";
//npm i react-creditcard-validator
//npm i react-burger-menu
// !===============================================
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import Stats from "three/examples/jsm/libs/stats.module";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
// !===============================================

function Lineup() {
  const [lineUpPage, setLineUpPage] = useState(1);
  const [burgerState, setBurgerState] = useState(false);
  const [currentBand, setCurrentBand] = useState([]);
  const [singleBandState, setSingleBandState] = useState(false);
  const [openedBand, setOpenedband] = useState();
  const [bands, setBands] = useState([]);

  // !==================================
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

    // !this one works in dev mode ,as a path for the mountain.
    // ! change it in LineupApp.jsx, App.jsx and Tickets.jsx
    //? "../src/assets/mountainFin.glb"
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
  // !==================================

  // ? function to change the background
  // if (lineUpPage == 1) {
  //   document.querySelector("body").classList = "";
  //   document.querySelector("body").classList.add("backClass_1");
  // } else if (lineUpPage == 2) {
  //   document.querySelector("body").classList = "";
  //   document.querySelector("body").classList.add("backClass_2");
  // }

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://bitter-grass-7071.fly.dev/schedule");
      const data = await res.json();
      // console.log(data);
      setCurrentBand(data);
    }
    getData();
  }, []);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://bitter-grass-7071.fly.dev/bands");
      const data = await res.json();
      setBands(data);

      data.forEach(function (element, i) {
        element.liked = false;
        element.key = i;
      });
      console.log(data);
    }
    getData();
  }, []);

  function changePageApp(value) {
    setLineUpPage(value);
    // console.log("change the state to " + lineUpPage);
  }

  function checkPageApp(value) {
    if (lineUpPage == 1) {
      if (value === "home") return "homeOn";
    } else if (lineUpPage == 2) {
      if (value === "bands") return "bandsOn";
    } else if (lineUpPage == 3) {
      if (value === "schedule") return "scheduleOn";
    }
  }

  function openBurger() {
    setBurgerState(!burgerState);
    console.log("burger menu is open " + burgerState);
  }

  function openOneBand(band) {
    setSingleBandState(!singleBandState);
    console.log(band);

    //get the band name and find the same thing in the original array and get the data from that object
    // band name is under different keys:
    // in SingleBandList it's name
    // in SingleBandSchedule it's act

    bands.map((item) => {
      if (item.name === band) setOpenedband(item);
    });

    console.log("single band is open " + singleBandState);
  }

  return (
    <>
      {" "}
      <canvas id="myThreeJsCanvas" className="test3D" />
      <div className="appCont">
        {lineUpPage == 1 ? (
          <CurrentBand
            currentBand={currentBand}
            bands={bands}
            openOneBand={openOneBand}
            openedBand={openedBand}
            singleBandState={singleBandState}
            setSingleBandState={setSingleBandState}
          />
        ) : (
          ""
        )}
        {lineUpPage == 2 ? (
          <Bandslist
            bands={bands}
            openOneBand={openOneBand}
            openedBand={openedBand}
            singleBandState={singleBandState}
            setSingleBandState={setSingleBandState}
          />
        ) : (
          ""
        )}
        {lineUpPage == 3 ? (
          <Schedule
            currentBand={currentBand}
            bands={bands}
            openOneBand={openOneBand}
            openedBand={openedBand}
            singleBandState={singleBandState}
            setSingleBandState={setSingleBandState}
          />
        ) : (
          ""
        )}

        <div className="NavBarCont">
          <button
            onClick={() => changePageApp(1)}
            className={lineUpPage === 1 ? checkPageApp("home") : "homeOff"}
            value="home"
          ></button>
          <button
            onClick={() => changePageApp(2)}
            className={lineUpPage === 2 ? checkPageApp("bands") : "bandsOff"}
            value="bands"
          ></button>
          <button
            onClick={() => changePageApp(3)}
            className={
              lineUpPage === 3 ? checkPageApp("schedule") : "scheduleOff"
            }
            value="schedule"
          ></button>
        </div>
        {/* <Bandslist bands={bands} /> */}

        {!burgerState && (
          <button
            onClick={() => openBurger()}
            className="burger_off"
            button-name="openburg"
          >
            {" "}
          </button>
        )}
        {burgerState && (
          <>
            <button
              onClick={() => openBurger()}
              className="burger_on"
              button-name="klosburg"
            >
              {" "}
            </button>
            <Burger />
          </>
        )}
      </div>
    </>
  );
}

export default Lineup;
