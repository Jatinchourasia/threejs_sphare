import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { TextSprite } from "../../canvas/textSprite";
import { Wireframe } from "./wireframe";
import { Text3d } from "./../../canvas/text";

export const RectangularPrism = ({ position, args, color, opacity }) => {
  const mesh = useRef(null);
  useEffect(() => {
    if (mesh) {
      // console.log(mesh.current.vertices);
    }
  }, []);

  return (
    <>
      <mesh castShadow position={position} ref={mesh}>
        <boxBufferGeometry attach="geometry" args={args} />
        <meshStandardMaterial
          attach="material"
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
      {/* <Wireframe args={args} position={position} hide={["bottomFront"]} /> */}

      {/* <TextSprite tex={"sd"} position={position} /> */}
      <Text3d
        position={[position[0], position[1], position[2] + 0.01 + args[2] / 2]}
        scale={4}
        tex={"label"}
        // direction="front"
      />
    </>
  );
};
