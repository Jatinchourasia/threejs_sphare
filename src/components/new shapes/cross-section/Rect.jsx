//@ts-nocheck
import { OrbitControls } from "@react-three/drei";

import React, { useRef, useEffect } from "react";

export const Rect = ({ position, args, color, opacity, rotate, rotation }) => {
  const meshRef = useRef(null);
  useEffect(() => {
    if (meshRef) {
      if (rotate) {
        meshRef.current.rotation.x = 1.56;
      }
    }
  }, []);
  return (
    <>
      <mesh castShadow position={position} ref={meshRef}>
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial
          attach="material"
          color={color}
          opacity={opacity ? opacity : 1}
          transparent
        />

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
