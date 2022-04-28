import React, { useRef, useLayoutEffect, useEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const CustomGeometry = ({ vertices, color, opacity, triangle }) => {
  const ref = useRef();
  // console.log(vertices);
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      vertices.map((point) => new THREE.Vector3(...point))
    );
  }, vertices);

  let show_animation = true;
  let coloro = "blue";
  let flag = true;
  let dis = 0;
  const d = new Date();
  // useFrame(({ clock }, state) => {
  //   // console.log(clock.getElapsedTime());
  //   if (show_animation && triangle) {
  //     if (flag) {
  //       dis += 0.01;
  //       if (dis > 1) {
  //         flag = false;
  //         ref.current.material.color.r = 1;
  //         ref.current.material.color.g = 0;
  //         ref.current.material.color.b = 0;
  //       }
  //     } else {
  //       dis -= 0.01;
  //       if (dis < 0) {
  //         flag = true;
  //         ref.current.material.color.r = 0;
  //         ref.current.material.color.g = 0;
  //         ref.current.material.color.b = 0;
  //       }
  //     }
  //   }
  // });
  // console.log(dis);
  useEffect(() => {
    if (ref) {
      // console.log("ref", ref.current.material.color);
    }
  }, []);
  return (
    <>
      {/* <pointLight color="blue" position={[10, 0, 20]} intensity={0.5} /> */}
      {/* <pointLight position={[10, 0, 10]} intensity={1.5} /> */}
      <mesh ref={ref}>
        <bufferGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color={color ? color : "#d7d7d7"}
          side={THREE.DoubleSide}
          opacity={opacity ? opacity : 1}
          transparent
        />
      </mesh>
    </>
  );
};
