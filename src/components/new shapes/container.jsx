import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useState, useRef, useCallback } from "react";
import styled from "styled-components";
import { CylinderCross } from "../../crossection/cylinderCross";

import { Square } from "./square";
import { TriangularPrism } from "./3d widget/triangularPrism";
import { RectangularPrism } from "./3d widget/rectangularPrism";
import { CrossSection } from "./crosection";

const CanvasContainer = styled.div`
  display: block;
  width: 300px;
  height: 300px;
  touch-action: none;
  padding-right: 1rem;

  .knxtOR {
    background: "#dfe7ff";
  }
  .vide {
    height: 20vw;
    width: 20vw;
  }
`;

export const Container = ({ shape }) => {
  const ref = useRef();
  const data = {
    vertical: true,
    horizontal: true,
    shape: shape,
  };
  return (
    <>
      <CanvasContainer>
        <Canvas
          //   frameloop="demand"
          fill="white"
          ref={ref}
          shadowMap
          camera={{ position: [6, 2, 10], fov: 60 }}
        >
          <color attach="background" args={["#e1e1e1"]} />
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />
            {/* <directionalLight
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

            {/* <CylinderCross /> */}

            {/* <TriangularPrism /> */}
            <CrossSection {...data} />

            {/* <RectangularPrism /> */}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
//
