import { Box, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const Sphr = ({ position, args, color }) => {
  const mesh = useRef(null);

  //   useFrame(() => {
  //     mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
  //   });

  return (
    <>
      <mesh castShadow position={position} ref={mesh}>
        <sphereGeometry attach="geometry" args={args} />
        <meshStandardMaterial attach="material" color={color} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
      </mesh>
    </>
  );
};
