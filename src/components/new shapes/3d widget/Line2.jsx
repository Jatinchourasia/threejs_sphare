import * as THREE from "three";
import React, { useLayoutEffect, useRef } from "react";
import { Line } from "@react-three/drei";

export const Line2 = ({ start, end, color, dashed }) => {
  if (!dashed) {
    dashed = false;
  }
  const materialProp = {
    dashSize: 0.2,
    gapSize: 0.1,
  };

  return (
    <Line
      points={[start, end]}
      dashed={dashed}
      {...materialProp}
      color={color ? color : "black"}
      lineWidth={1}
    />
  );
};
