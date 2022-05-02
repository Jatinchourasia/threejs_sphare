import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

export const CustomGeometry = ({
  vertices,
  color,
  opacity,
  triangle,
  rectangle,
}) => {
  const ref = useRef();
  // console.log(vertices);
  useLayoutEffect(() => {
    ref.current.geometry.setFromPoints(
      vertices.map((point) => new THREE.Vector3(...point))
    );
  }, vertices);
  // const [state, setstate] = useState("white");
  // let show_animation = true;
  // let flag = true;
  // let dis = 0;
  // const d = new Date();

  // useFrame(() => {
  //   // console.log(clock.getElapsedTime());

  //   if (show_animation && triangle) {
  //     if (flag) {
  //       dis += 0.01;
  //       if (dis > 1) {
  //         flag = false;
  //         ref.current.material.color.r = 0.215;
  //         ref.current.material.color.g = 0.215;
  //         ref.current.material.color.b = 0.215;
  //       }
  //       if (parseFloat(dis.toFixed(2)) == 0.51) {
  //         ref.current.material.color.r = 0.215;
  //         ref.current.material.color.g = 0.215;
  //         ref.current.material.color.b = 0.215;
  //       }
  //     } else {
  //       dis -= 0.01;
  //       if (dis < 0) {
  //         flag = true;
  //         ref.current.material.color.r = 1;
  //         ref.current.material.color.g = 0;
  //         ref.current.material.color.b = 0;
  //       }
  //       if (parseFloat(dis.toFixed(2)) == 0.51) {
  //         ref.current.material.color.r = 0.215;
  //         ref.current.material.color.g = 0.215;
  //         ref.current.material.color.b = 0.215;
  //       }
  //     }
  //   }
  //   if (show_animation && rectangle) {
  //     if (flag) {
  //       dis += 0.01;
  //       if (dis > 1) {
  //         flag = false;
  //         ref.current.material.color.r = 0;
  //         ref.current.material.color.g = 1;
  //         ref.current.material.color.b = 0;
  //       }
  //       if (parseFloat(dis.toFixed(2)) == 0.51) {
  //         ref.current.material.color.r = 0.215;
  //         ref.current.material.color.g = 0.215;
  //         ref.current.material.color.b = 0.215;
  //       }
  //     } else {
  //       dis -= 0.01;
  //       if (dis < 0) {
  //         flag = true;

  //         ref.current.material.color.r = 0.215;
  //         ref.current.material.color.g = 0.215;
  //         ref.current.material.color.b = 0.215;
  //       }
  //       if (parseFloat(dis.toFixed(2)) == 0.51) {
  //         ref.current.material.color.r = 0.215;
  //         ref.current.material.color.g = 0.215;
  //         ref.current.material.color.b = 0.215;
  //       }
  //     }
  //   }
  // });
  // console.log(dis);

  // useFrame(() => {
  //   if (show_animation && triangle) {
  //     dis += 1;
  //     if (dis % 60 == 0) {
  //       setstate("green");
  //     } else if (dis % 40 == 0) {
  //       setstate("blue");
  //     } else if (dis % 20 == 0) {
  //       setstate("red");
  //     }
  //     console.log(dis);
  //     // console.log(dis);
  //   }
  // if (show_animation && rectangle) {
  //   if (flag) {
  //     dis += 0.01;
  //     if (dis > 1) {
  //       flag = false;
  //       ref.current.material.color.r = 0;
  //       ref.current.material.color.g = 1;
  //       ref.current.material.color.b = 0;
  //     }
  //   } else {
  //     dis -= 0.01;
  //     if (dis < 0) {
  //       flag = true;

  //       ref.current.material.color.r = 0.215;
  //       ref.current.material.color.g = 0.215;
  //       ref.current.material.color.b = 0.215;
  //     }
  //   }
  // }
  // });
  useEffect(() => {
    if (ref) {
      // console.log("ref", ref.current.material.color);
      // ref.current.rotation.x = 2;s
    }
  }, []);
  return (
    <>
      <mesh ref={ref}>
        <bufferGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color={color}
          side={THREE.DoubleSide}
          opacity={opacity ? opacity : 1}
          transparent
        />
      </mesh>
    </>
  );
};
