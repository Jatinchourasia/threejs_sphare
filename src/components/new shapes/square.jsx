import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Text3d } from "../canvas/text";
import { TextSprite } from "../canvas/textSprite";
import { Wireframe } from "./3d widget/wireframe";
import { Line } from "./line";

export const Square = ({ position, args, color, opacity }) => {
  const mesh = useRef(null);
  // useEffect(() => {
  //   if (mesh) {
  //     console.log(mesh.current.vertices);
  //   }
  // }, []);
  console.log("Position", position);
  return (
    <>
      <mesh castShadow position={position} ref={mesh}>
        <boxBufferGeometry
          attach="geometry"
          args={args}
          opacity={opacity ? opacity : 1}
          transparent
        />
        <meshBasicMaterial
          attach="material"
          args={args}
          color={color}
          opacity={opacity ? opacity : 1}
          transparent
        />
        {/* <Edges /> */}
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
        {/* <lineSegments> */}
        {/* <edgesGeometry attach="geometry" args={args} /> */}
        {/* <Edges scale={1} threshold={15} color="black" /> */}
        {/* </lineSegments>  */}
      </mesh>
      <Wireframe position={position} args={args} hide={[""]} />
      {/* <Line position={position} args={[0, 0.1, 2]} />
      <Line position={position} args={[0.1, 2, 0]} /> */}
      <TextSprite tex={"b"} position={[0, 0, 0]} />
      {/* <TextSprite tex={"h"} position={[]} />
      <TextSprite tex={"w"} position={[]} /> */}

      {/* <Text3d tex={"h"} /> */}
    </>
  );
};
