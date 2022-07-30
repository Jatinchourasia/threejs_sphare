import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { PointLight } from "three";

export const Text3d = ({ position, scale, color, tex }) => {
  const mesh = useRef();

  useFrame((state) => {
    mesh.current.rotation.y = Math.atan2(
      state.camera.position.x - mesh.current.position.x,
      state.camera.position.z - mesh.current.position.z
    );
  });

  return (
    <>
      <mesh position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[1, -0.5, 0.001]} />
        <ambientLight />
        <meshStandardMaterial
          attach="material"
          color={color}
          opacity={0.5}
          transparent
        />
        <Text
          scale={scale}
          color="blue" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          {tex}
        </Text>
      </mesh>
    </>
  );
};
