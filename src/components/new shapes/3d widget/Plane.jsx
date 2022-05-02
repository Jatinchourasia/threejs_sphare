import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { CustomGeometry } from "./CustomGeometry";

export const Plane = ({ vertices, opacity, color }) => {
  return (
    <>
      <CustomGeometry
        vertices={[vertices[0], vertices[1], vertices[2]]}
        opacity={opacity}
        color={color}
        rectangle={true}
      />
      <CustomGeometry
        vertices={[vertices[0], vertices[2], vertices[3]]}
        opacity={opacity}
        color={color}
        rectangle={true}
      />
    </>
  );
};
