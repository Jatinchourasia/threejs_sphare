import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import styled from "styled-components";

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

export const Container2 = ({ children }) => {
  const ref = useRef();

  return (
    <>
      <CanvasContainer>
        <Canvas
          fill="white"
          ref={ref}
          shadowMap
          camera={{ position: [6, 4, 10], fov: 60 }}
        >
          <Suspense fallback={null}>
            {/* <pointLight position={[10, 0, 20]} intensity={0.5} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <pointLight position={[0, 10, 0]} intensity={1.5} /> */}
            {children}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
//
