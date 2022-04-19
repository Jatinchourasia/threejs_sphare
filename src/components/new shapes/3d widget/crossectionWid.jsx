import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import { CrossSection } from "./../crosection";

const CanvasContainer = styled.div`
  display: block;
  width: 400px;
  height: 400px;
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

export const CrossSaction2 = (props) => {
  return (
    <>
      <CanvasContainer>
        <Canvas
          //   frameloop="demand"
          fill="white"
          shadowMap
          camera={{ position: [6, 2, 10], fov: 60 }}
        >
          <Suspense fallback={null}>
            <ambientLight intensity={0.1} />

            <pointLight position={[10, 0, 20]} intensity={0.5} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <pointLight position={[0, 10, 0]} intensity={1.5} />

            <CrossSection {...props} />
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
