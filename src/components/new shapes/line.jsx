import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";

export const Line = ({ position, args, location }) => {
  // console.log(position);
  const mesh = useRef(null);

  useEffect(() => {
    if (mesh) {
      if (location === "rightFront") {
        mesh.current.rotation.z += 0.5;
        mesh.current.rotation.x -= 0.5;
      }
    }
  }, []);
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
