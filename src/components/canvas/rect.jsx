import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { Text3d } from "./text";

export const Rect = ({ position, args, color, opacity, rotate }) => {
  // useFrame(({ clock }) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   mesh.current.rotation.y = elapsedTime / 2;
  // });

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
        {/* <meshBasicMaterial
          attach="material"
          args={args}
          wireframe
          color="purple"
        /> */}
        {/* <Edges /> */}

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
        {/* <Text3d position={[0, 2, 2]} scale={4} tex="her" />
        <Text3d position={[2, 2, 2]} scale={4} tex="her" />
        <Text3d position={[2, 2, 2]} scale={4} tex="her" />
        <Text3d position={[2, 2, 2]} scale={4} tex="her" />
        <Text3d position={[2, 2, 2]} scale={4} tex="her" />
        <Text3d position={[2, 2, 2]} scale={4} tex="her" /> */}
      </mesh>
    </>
  );
};
