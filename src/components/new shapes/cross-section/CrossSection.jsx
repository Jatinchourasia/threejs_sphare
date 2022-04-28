//@ts-nocheck

import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Cross } from "./Cross";
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
export const CrossSection3D = (props) => {
  const [rotation, setRotation] = useState(false);
  return (
    <CanvasContainer>
      <div
        onClick={() => {
          setRotation(!rotation);
        }}
      >
        ✋
      </div>

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

          <Cross {...props} rotation={rotation} />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};
