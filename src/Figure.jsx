import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { softShadows } from "@react-three/drei";

import DatGui, { DatBoolean, DatNumber } from "react-dat-gui";
import "./gui.scss";
import CanvasRecorder from "./recorder";
import { CompositeFigure } from "./components/canvas/compositeFigure";
import { Cylinder } from "./components/canvas/cylinder";
import { Rect } from "./components/canvas/rect";

const CanvasContainer = styled.div`
  display: block;
  width: 60vw;
  height: 60vh;
  touch-action: none;
  padding-right: 10rem;
  .knxtOR {
    background: "#dfe7ff";
  }
  .vide {
    height: 20vw;
    width: 20vw;
  }
`;

softShadows();

// let width = 2;
// let base1 = 1;
// let base2 = 3;
// let height1 = 3;
// let height2 = 1;
export const Figure = ({}) => {
  const [state, setState] = useState({
    distance: 0.5,
    distance2: 0,
    width: 2,
    base1: 1,
    base2: 3,
    height1: 3,
    height2: 1,
    rotation: false,
    animate: false,
  });
  // });const [state, setState] = useState({
  //   data: {
  //     distance: 0.5,
  //     distance2: 0,
  //     width: 2,
  //     base1: 1,
  //     base2: 3,
  //     height1: 3,
  //     height2: 1,
  //     rotation: false,
  //     animate: false,
  //   },
  // });

  function calculatValue(h, w, b) {
    let ratio;
    let height;
    let width;
    let base;

    if (h > w) {
      ratio = h / w;
      height = 10;
      width = height / ratio;
    } else {
      ratio = w / h;
      width = 10;
      height = width / ratio;
    }

    if (height > width) {
      ratio = h / b;
      base = height / ratio;
    } else {
      ratio = w / b;
      base = width / ratio;
    }

    if (height == b) {
      base = height;
    }
    if (width == b) {
      base = width;
    }

    function oneDecimal(val) {
      return Number.isInteger(val) ? val : parseFloat(val.toFixed(1));
    }

    return {
      height: oneDecimal(height),
      width: oneDecimal(width),
      base: oneDecimal(base),
    };
  }

  // const handleUpdate = (newData) => {
  //   setState((prevState) => ({
  //     data: { ...prevState.data, ...newData },
  //   }));
  // };
  const mesh = useRef(null);
  const [download, setDownload] = useState("");
  const [down, setDown] = useState(false);
  const ref = useRef();
  const videoRef = useRef(null);

  const startRecording = useCallback(() => {
    CanvasRecorder.createStream(ref.current);
    CanvasRecorder.start();

    setTimeout(function () {
      // console.log("hryyyyyyyyyyyyy");

      stopRecording();
    }, 4000);
  }, [ref]);

  const stopRecording = useCallback(() => {
    CanvasRecorder.stop();
    const file = CanvasRecorder.save();
    console.log(file);

    console.log("Stop");
    const url = window.URL.createObjectURL(file);

    setDownload(url);
    setDown(true);
  }, []);

  // const { data } = state;
  const {
    distance,
    distance2,
    width,
    height1,
    height2,
    base1,
    base2,
    rotation,
    animate,
  } = state;
  // const {
  //   distance,
  //   distance2,
  //   width,
  //   height1,
  //   height2,
  //   base1,
  //   base2,
  //   rotation,
  //   animate,
  // } = data;

  return (
    <>
      {/* <DatGui
        className="react-dat-gui-relative-position"
        data={data}
        onUpdate={handleUpdate}
      >
        <DatNumber
          path="distance"
          label="Distance"
          min={-1}
          max={1}
          step={0.01}
        />
        <DatNumber
          path="distance2"
          label="Distance2"
          min={-2}
          max={2}
          step={0.01}
        />
        <DatNumber path="width" label="Width" min={0.2} max={4} step={0.2} />
        <DatNumber path="height1" label="Height" min={0.2} max={4} step={0.2} />
        <DatNumber
          path="height2"
          label="Height2"
          min={0.2}
          max={4}
          step={0.2}
        />
        <DatNumber path="base2" label="Base1" min={0.2} max={4} step={0.2} />
        <DatNumber path="base1" label="Base2" min={0.2} max={4} step={0.2} />
        <DatBoolean path="rotation" label="Rotation" />
        <DatBoolean path="animate" label="Animate" />
      </DatGui> */}
      <button onClick={startRecording}>Start Recording</button>
      {down && (
        <>
          <video
            style={{
              height: "40vw",
              width: " 40vw",
            }}
            src={download}
            id="recorded"
            playsinline={true}
            loop
            autoPlay
          ></video>
          <a href={download} download="gif.webm">
            Download
          </a>
        </>
      )}
      <CanvasContainer>
        {/* <h1>hey</h1> */}
        <Canvas
          // frameloop="demand"
          fill="white"
          ref={ref}
          shadowMap
          camera={{ position: [6, 2, 10], fov: 60 }}
        >
          <color attach="background" args={["#e1e1e1"]} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            />
            <pointLight position={[10, 0, 20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />

            <group>
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[2, -3, 0]}
                receiveShadow
              >
                <planeBufferGeometry attach="geometry" args={[100, 100]} />
                <shadowMaterial attach="material" opacity={0.3} />
              </mesh>
              <CompositeFigure
                position={[base1 * 0.5, height1 * 0.5 + distance2, 0]}
                position2={[base2 * distance + 1, height2 * 0.5, 0]}
                args={[base1, height1, width]}
                args2={[base2, height2, width]}
                color="lightblue"
                color2="lightblue"
                label="A"
                label2="B"
                rotation={rotation}
                animate={animate}
              />
              {/* <Rect position={[0, -2, -2.4]} args={[2, 2, 2]} color="lightblue" /> */}
              //rectangle
              {/* <Rect
                position={[base1 * 0.5, height1 * 0.5, 0]}
                args={[base1, height1, width]}
                color="red"
              />
              <Rect
                position={[base2 * distance + 1, height2 * 0.5, 0]}
                args={[base2, height2, width]}
                color="blue"
              /> */}
              {/* <Sphr position={[0, 1, -2]} args={[0.4, 1, 1]} color="lightblue" /> */}
              {/* <Cylinder
                position={[0, 0, 0]}
                args={[1, 1, 3]}
                color="lightblue"
              />
              <Rect
                position={[0, 0, 0]}
                args={[3, 4, 0.01]}
                opacity={0.3}
                color="green"
              /> */}
              {/* <Flustrum position={[0, 1, 0]} args={[2, 2, 2]} color="lightblue" /> */}
              {/* <Sphr position={[0, 1, 2]} args={[0.4, 1, 1]} color="lightblue" />
            <Sphr position={[2, 1, 0]} args={[0.4, 1, 1]} color="lightblue" />
            <Sphr position={[-2, 1, 0]} args={[0.4, 1, 1]} color="lightblue" />
            <Sphr position={[0, 2.8, 0]} args={[0.4, 1, 1]} color="lightblue" />
            <Sphr
              position={[0, -0.8, 0]}
              args={[0.4, 1, 1]}
              color="lightblue"
            /> */}
              {/* <Text3d position={[0, 1, -2]} scale={[-10, 10, 10]} tex={"1"} /> */}
              {/* <Text3d position={[0, 1, 2]} scale={[10, 10, 10]} tex={"2"} />
            <Text3d position={[2, 1, 0]} scale={[10, 10, 10]} tex={"3"} />
            <Text3d position={[-2, 1, 0]} scale={[10, 10, 10]} tex={"4"} />
            <Text3d position={[0, 2.8, 0]} scale={[10, 10, 10]} tex={"5"} />
            <Text3d position={[0, -0.8, 0]} scale={[10, 10, 10]} tex={"6"} /> */}
            </group>
            {/* <Sphare /> */}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
//
