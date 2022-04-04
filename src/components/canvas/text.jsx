import { Box, OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { Camera } from "three";

export const Text3d = ({ position, scale, color, tex, direction }) => {
  const mesh = useRef(null);

  // useFrame((state) => {
  //   // mesh.current.rotation.x = mesh.current.rotation.z;
  //   // mesh.lookAt(state.camera.position);
  //   // console.log(state.camera);
  //   // state.camera.position
  // });
  // useFrame(({ clock }, state) => {
  //   const elapsedTime = clock.getElapsedTime();
  //   mesh.current.rotation.x += 0.01;
  //   // mesh.lookAt(mesh.current.camera.position);
  //   // console.log(state.camera);
  //   // textref.rotation.y = elapsedTime / -8;
  //   // mesh.current.rotation.x = elapsedTime / -8;
  //   // mesh.current.rotation.z = elapsedTime / -8;
  // });
  // console.log(mesh.current.rotation);

  useEffect(() => {
    if (mesh) {
      mesh.current.rotation.x = 0;

      switch (direction) {
        case "top":
          mesh.current.rotation.x = -1.5;
          break;
        case "bottom":
          mesh.current.rotation.x = 1.5;
          break;
        case "left":
          mesh.current.rotation.y = -1.5;
          break;
        case "right":
          mesh.current.rotation.y = 1.5;
          break;
        case "front":
          mesh.current.rotation.x = 0;
          break;
        case "back":
          mesh.current.rotation.y = 3.1;

          break;
        default:
          mesh.current.rotation.x = 0;
      }
    }
  }, []);

  return (
    <>
      <mesh castShadow position={position} ref={mesh}>
        <Text
          scale={scale}
          color="black" // default
          anchorX="center" // default
          anchorY="middle" // default
        >
          {tex}
        </Text>
      </mesh>
    </>
  );
};
