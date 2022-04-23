import React, { useRef, useLayoutEffect } from "react";
import * as THREE from "three";

export const CustomGeometry = ({ vertices, color, opacity }) => {
  const ref = useRef();
  console.log(vertices);
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      vertices.map((point) => new THREE.Vector3(...point))
    );
  }, vertices);
  return (
    <>
      {/* <pointLight color="blue" position={[10, 0, 20]} intensity={0.5} /> */}
      {/* <pointLight position={[10, 0, 10]} intensity={1.5} /> */}
      <mesh ref={ref}>
        <bufferGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color={color ? color : "#D6D6D6"}
          side={THREE.DoubleSide}
          opacity={opacity ? opacity : 1}
          transparent
        />
      </mesh>
    </>
  );
};
