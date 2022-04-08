import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";

export const RectangularPrism = ({ position, args, color, opacity }) => {
  const mesh = useRef(null);
  useEffect(() => {
    if (mesh) {
      console.log(mesh.current.vertices);
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

        {/* <lineSegments> */}
        {/* <edgesGeometry attach="geometry" args={args} /> */}
        <Edges scale={1} threshold={15} color="black" />
        {/* </lineSegments>  */}
      </mesh>
      {/* <TextSprite tex={"hey"} /> */}
    </>
  );
};
