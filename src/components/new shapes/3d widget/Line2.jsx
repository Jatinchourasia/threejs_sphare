import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";

export const Line2 = ({ start, end, color }) => {
  const ref = useRef();

  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      [start, end].map((point) => new THREE.Vector3(...point))
    );
  }, [start, end]);
  return (
    <line ref={ref}>
      <bufferGeometry />
      <lineBasicMaterial color={color ? color : "black"} />
    </line>
  );
};
