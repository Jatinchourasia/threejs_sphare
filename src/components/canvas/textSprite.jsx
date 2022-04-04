import { Box, OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";

export const TextSprite = ({ tex }) => {
  const mesh = useRef(null);
  let data = position;
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.z;
    data = [];
  });
  //   console.log("data");

  return (
    <>
      <mesh castShadow position={data} ref={mesh}>
        <Text
          scale={scale}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          {tex}
        </Text>
      </mesh>
    </>
  );
};
