import { Box, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Text3d } from "./text";
// import { Three } from './../three js/three';
// import * as THREE from "three";

export const CompositeFigure2 = ({
  position,
  position2,
  args,
  args2,
  color,
  color2,
  opacity,
  label,
  label2,
  rotation,
  animate,
}) => {
  const mesh = useRef(null);
  const labelRef = useRef(null);
  const textref = useRef(null);
  // const vec = new THREE.Vector3();
  const [clicked, setClicked] = useState(false);

  let dis = 0;
  let flag = true;

  useFrame(({ clock }, state) => {
    const elapsedTime = clock.getElapsedTime();
    if (rotation) {
      // mesh.current.rotation.y = elapsedTime / -8;
      // mesh.current.rotation.z += 0.001;
      mesh.current.rotation.y -= 0.002;
      // mesh.current.rotation.x += 0.001;
    }
    //
    if (animate) {
      if (flag) {
        textref.current.position.x += 0.005;
        labelRef.current.position.x += 0.005;
        // dis += 0.01;
        if (textref.current.position.x > 1) {
          flag = false;
        }
      } else {
        textref.current.position.x -= 0.005;
        labelRef.current.position.x -= 0.005;
        // dis -= 0.01;
        if (textref.current.position.x < 0) {
          flag = true;
        }
      }
    } else {
      textref.current.position.x = 0;
      labelRef.current.position.x = 0;
    }
    // console.log(labelRef.current.position.y);
    // if (textref.current.position.x < 4 && textref.current.position.x >= 0) {
    //   textref.current.position.x += 0.01;
    // }
    // console.log(textref.current.position.x);
    // } if (textref.current.position.x > 4) {
    //   textref.current.position.x -= 0.01;
    // }
    // if (textref.current.position.x < 4 && textref.current.position.x >= 0) {
    //   textref.current.position.x += 0.01;
    // }

    // if (flag) {
    //   dis = dis + 0.01;
    //   textref.current.position.x += dis;

    //   if ((dis = 0.05)) {
    //     flag = false;
    //   }
    // } else {
    //   dis = dis - 0.01;
    //   textref.current.position.x -= dis;

    //   if ((dis = 0)) {
    //     flag = true;
    //   }
    // }
    // console.log(state);
    // if (clicked) {
    //   state.camera.lookAt(textref.current.position);
    //   state.camera.position.lerp(
    //     vec.set(xPosition, yPosition, zPosition),
    //     0.01
    //   );
    //   state.camera.updateProjectionMatrix();
    // }
    // return null;

    // textref.rotation.y = elapsedTime / -8;
    // mesh.current.rotation.x = elapsedTime / -8;
    // mesh.current.rotation.z = elapsedTime / -8;
  });
  console.log(dis);
  return (
    <>
      <group ref={mesh}>
        <mesh
          onCLick={() => setClicked(!clicked)}
          castShadow
          position={position}
        >
          <boxBufferGeometry attach="geometry" args={args} />
          <meshStandardMaterial
            attach="material"
            color={color}
            opacity={0.2}
            transparent
          />
        </mesh>
        <group ref={textref}>
          <mesh castShadow position={position2}>
            <boxBufferGeometry attach="geometry" args={args2} />
            <meshStandardMaterial
              attach="material"
              color={color2}
              opacity={opacity ? opacity : 1}
              // opacity={0.1}
              transparent
            />
            {/* <meshBasicMaterial
              attach="material"
              // args={args}
              wireframe
              color="black"
            /> */}
          </mesh>
        </group>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />{" "}
        {/* <Text3d
          position={[
            position2[0],
            position2[1],
            position2[2] + 0.01 + args2[2] / 2,
          ]}
          scale={4}
          tex={label2}
        /> */}
        //front
        <Text3d
          position={[
            position[0],
            position[1] + dis,
            position[2] + 0.01 + args2[2] / 2,
          ]}
          scale={4}
          tex={label}
          direction="front"
        />{" "}
        //back
        <Text3d
          position={[
            position[0],
            position[1] + dis,
            position[2] - 0.01 - args2[2] / 2,
          ]}
          scale={4}
          tex={"2"}
          direction="back"
        />{" "}
        //right
        <Text3d
          position={[
            position[0] + 0.01 + args[0] / 2,
            position[1] + dis,
            position[2],
          ]}
          scale={4}
          tex={"1"}
          direction="right"
        />
        //left
        <Text3d
          position={[
            position[0] - 0.01 - args[0] / 2,
            position[1] + dis,
            position[2],
          ]}
          scale={4}
          tex={"2"}
          direction="left"
        />
        //top
        <Text3d
          position={[
            position[0],
            position[1] + dis + 0.01 + args[1] / 2,
            position[2],
          ]}
          scale={4}
          tex={"2"}
          direction="top"
        />
        //bottom
        <Text3d
          position={[
            position[0],
            position[1] + dis - 0.01 - args[1] / 2,
            position[2],
          ]}
          scale={4}
          tex={"2"}
          direction="bottom"
        />
        {/* 2nd figure */}
        <group ref={labelRef}>
          //front
          <Text3d
            position={[
              position2[0],
              position2[1],
              position2[2] + 0.01 + args2[2] / 2,
            ]}
            scale={4}
            tex={label2}
            direction="front"
          />{" "}
          //back
          <Text3d
            position={[
              position2[0],
              position2[1],
              position2[2] - 0.01 - args2[2] / 2,
            ]}
            scale={4}
            tex={"2"}
            direction="back"
          />{" "}
          //right
          <Text3d
            position={[
              position2[0] + 0.01 + args2[0] / 2,
              position2[1],
              position2[2],
            ]}
            scale={4}
            tex={"1"}
            direction="right"
          />
          //left
          <Text3d
            position={[
              position2[0] - 0.01 - args2[0] / 2,
              position2[1],
              position2[2],
            ]}
            scale={4}
            tex={"2"}
            direction="left"
          />
          //top
          <Text3d
            position={[
              position2[0],
              position2[1] + 0.01 + args2[1] / 2,
              position2[2],
            ]}
            scale={4}
            tex={"2"}
            direction="top"
          />
          //bottom
          <Text3d
            position={[
              position2[0],
              position2[1] - 0.01 - args2[1] / 2,
              position2[2],
            ]}
            scale={4}
            tex={"2"}
            direction="bottom"
          />
        </group>
        {/* <Text3d position={[0, 2, 2]} scale={[5, 5, 5]} tex={"2"} /> */}
        {/* <Text3d position={[2, 1, 0]} scale={[10, 10, 10]} tex={"3"} /> */}
        {/* <Text3d
          ref={textref}
          position={[-2, 1, 0]}
          scale={[10, 10, 10]}
          tex={"4"}
        /> */}
        {/* <Text3d position={[0, 2.8, 0]} scale={[10, 10, 10]} tex={"5"} /> */}
        {/* <Text3d position={[0, -0.8, 0]} scale={[10, 10, 10]} tex={"6"} /> */}
      </group>
    </>
  );
};
