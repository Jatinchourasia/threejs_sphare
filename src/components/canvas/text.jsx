import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";

export const Text3d = ({ position, scale, color, tex }) => {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y = Math.atan2(
      state.camera.position.x - mesh.current.position.x,
      state.camera.position.z - mesh.current.position.z
    );
  });
  useEffect(() => {
    if (mesh) {
      mesh.current.rotation.x = 0;
    }
  }, []);
  return (
    <>
      <mesh position={position} ref={mesh}>
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
