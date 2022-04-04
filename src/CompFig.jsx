import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import "./gui.scss";
import CanvasRecorder from "./recorder";
import { CompositeFigure } from "./components/canvas/compositeFigure";

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

// let width = 2;
// let base1 = 1;
// let base2 = 3;
// let rectangle1.height = 3;
// let height2 = 1;
export const CompFig = ({
  height1,
  width1,
  base1,
  color1,
  height2,
  width2,
  base2,
  color2,
  verticalDistance,
  horizontalDistance,
  rotation,
  animate,
  visiblity,
}) => {
  //   const [state, setState] = useState({
  //     verticalDistance: 0.5,
  //     horizontalDistance: 0,
  //     width: 2,
  //     base1: 1,
  //     base2: 3,
  //     height1: 3,
  //     height2: 1,
  //     rotation: false,
  //     animate: false,
  //   });

  function calculatValue(h, w, b) {
    let ratio;
    let height;
    let width;
    let base;

    if (h > w) {
      ratio = h / w;
      height = 4;
      width = height / ratio;
    } else {
      ratio = w / h;
      width = 4;
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
      return Number.isInteger(val) ? val : parseFloat(val.toFixed(2));
    }

    return {
      height: oneDecimal(height),
      width: oneDecimal(width),
      base: oneDecimal(base),
    };
  }

  const rectangle1 = calculatValue(height1, width1, base1);
  const rectangle2 = calculatValue(height2, width2, base2);

  const [download, setDownload] = useState("");
  const [down, setDown] = useState(false);
  const ref = useRef();

  const startRecording = useCallback(() => {
    CanvasRecorder.createStream(ref.current);
    CanvasRecorder.start();

    setTimeout(function () {
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
  //   const {
  //     verticalDistance,
  //     horizontalDistance,
  //     width,
  //     height1,
  //     height2,
  //     base1,
  //     base2,
  //     rotation,
  //     animate,
  //   } = state;

  return (
    <>
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
                position={[
                  rectangle1.base * 0.5,
                  rectangle1.height * 0.5 + horizontalDistance,
                  0,
                ]}
                position2={[
                  rectangle2.base * verticalDistance + 1,
                  rectangle2.height * 0.5,
                  0,
                ]}
                args={[rectangle1.base, rectangle1.height, rectangle1.width]}
                args2={[rectangle2.base, rectangle2.height, rectangle2.width]}
                color={color1}
                color2={color2}
                label="A"
                label2="B"
                rotation={rotation}
                animate={animate}
                visiblity={visiblity}
              />
            </group>
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
//
