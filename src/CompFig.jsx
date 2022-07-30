import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import "./gui.scss";
import CanvasRecorder from "./recorder";
import { CompositeFigure } from "./components/canvas/compositeFigure";
import { CompositeFigure2 } from "./components/canvas/compositeFigure2";

const CanvasContainer = styled.div`
  display: block;
  width: 600px;
  height: 600px;
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
  verticalDistanceB,
  verticalDistanceA,
  horizontalDistanceB,
  horizontalDistanceA,
  rotation,
  animate,
  visiblity,
}) => {
  //   const [state, setState] = useState({
  //     verticalDistanceB: 0.5,
  //     horizontalDistanceA: 0,
  //     width: 2,
  //     base1: 1,
  //     base2: 3,
  //     height1: 3,
  //     height2: 1,
  //     rotation: false,
  //     animate: false,
  //   });

  function calculatValue(h, w, b, h1, w1, b1) {
    let ratio;
    let height;
    let width;
    let base;
    let height1;
    let width1;
    let base1;

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

    let heigtRatio = h1 / h;
    let widthRatio = w1 / w;
    let baseRatio = b1 / b;

    height1 = height * heigtRatio;
    width1 = width * widthRatio;
    base1 = base * baseRatio;
    let oneUnit = base1 / b1;

    function Decimal(val, count) {
      return Number.isInteger(val) ? val : parseFloat(val.toFixed(count));
    }

    return { 
      height: Decimal(height, 2),
      width: Decimal(width, 2),
      base: Decimal(base, 2),
      height1: Decimal(height1, 2),
      width1: Decimal(width1, 2),
      base1: Decimal(base1, 2),
      oneUnit: Decimal(oneUnit, 3),
    };
  }

  const rectangledata = calculatValue(
    height1,
    width1,
    base1,
    height2,
    width2,
    base2
  );
  // const rectangle2 = calculatValue(height2, width2, base2);

  const rectangle2 = {
    height: rectangledata.height1,
    width: rectangledata.width1,
    base: rectangledata.base1,
  };
  const rectangle1 = {
    height: rectangledata.height,
    width: rectangledata.width,
    base: rectangledata.base,
  };
  console.log("rectangle 1", rectangle1);
  console.log("rectangle 2", rectangle2);
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
  //     verticalDistanceB,
  //     horizontalDistanceA,
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
      {/* <button onClick={startRecording}>Start Recording</button> */}
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
              </mesh>
              {/* position={[base1 * 0.5, height1 * 0.5 + distance2, 0]}
              position2={[base2 * distance + 1, height2 * 0.5, 0]} */}
              <CompositeFigure2
                position={[
                  0 + verticalDistanceA * rectangledata.oneUnit,
                  0 + horizontalDistanceA * rectangledata.oneUnit,
                  0,
                ]}
                position2={[
                  0 + verticalDistanceB * rectangledata.oneUnit,
                  0 + horizontalDistanceB * rectangledata.oneUnit,
                  0,
                ]}
                args={[rectangle1.base, rectangle1.height, rectangle1.width]}
                args2={[rectangle2.base, rectangle2.height, rectangle2.width]}
                color={color1}
                color2={color2}
                label="A"
                label2="B"
                dimentions={{ height1, width1, base1, height2, width2, base2 }}
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
