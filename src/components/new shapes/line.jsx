import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Line = ({ position, args }) => {
  console.log(position);
  const mesh = useRef(null);
  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   mesh.current.rotation.y = elapsedTime / 2;
  // });
  return (
    <>
      <mesh castShadow position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial attach="material" color={"black"} />
      </mesh>
    </>
  );
};
