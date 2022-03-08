import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import { Sphare } from "./components/canvas/Sphare";

const CanvasContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const App = () => {
  return (
    <CanvasContainer>
      <Canvas>
        <Suspense fallback={null}>
          <Sphare />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
};
//
