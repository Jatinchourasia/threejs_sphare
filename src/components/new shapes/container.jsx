import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import { CylinderCross } from "../../crossection/cylinderCross";

import { Square } from "./square";
import { TriangularPrism } from "./3d widget/triangularPrism";
import { RectangularPrism } from "./3d widget/rectangularPrism";
import { CrossSection } from "./crosection";
import { SquarePyramid } from "./3d widget/squarePyramid";
import { Line2 } from "./3d widget/Line2";
import { CustomShape } from "./3d widget/CustomShape";
import { CustomShape2 } from "./3d widget/CustomShape2";

const CanvasContainer = styled.div`
  display: block;
  width: 800px;
  height: 800px;
  touch-action: none;
  border-radius: 8px;
  padding: 0.5px;
  border: 1.5px solid black;
  cursor: grab;
  :active {
    cursor: grabbing;
  }

  .vide {
    height: 20vw;
    width: 20vw;
  }
`;

export const Container = () => {
  const ref = useRef();

  return (
    <>
      <CanvasContainer>
        <Canvas
          frameloop="demand"
          fill="white"
          ref={ref}
          shadowMap
          camera={{ position: [6, 4, 10], fov: 60 }}
        >
          {/* <color attach="background" args={["#e1e1e1"]} /> */}
          <Suspense fallback={null}>
            {/* <ambientLight intensity={0.1} />
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
            /> */}
            <pointLight position={[10, 0, 20]} intensity={0.5} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <pointLight position={[0, 10, 0]} intensity={1.5} />
            {/* <Square
              position={[0, 0, 0]}
              args={[3, 4, 3]}
              opacity={0.1}
              color="green"
            /> */}
            {/* <CustomShape /> */}

            <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="rectangularPrism"
            />
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="rightTriangularPrism"
            /> */}
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="triangularPrism"
            /> */}
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="squarePyramid"
            /> */}
            {/* args={[w,h,b]} */}
            {/* <CylinderCross /> */}

            {/* <TriangularPrism /> */}
            {/* <CrossSection {...data} /> */}

            {/* <RectangularPrism position={[0, 0, 0]} args={[3, 4, 3]} /> */}
            {/* <SquarePyramid /> */}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
//
