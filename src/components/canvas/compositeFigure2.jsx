import { Box, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { Text3d } from "./text";
// import { Three } from './../three js/three';
// import * as THREE from "three";
import { Wireframe } from "./../new shapes/3d widget/wireframe";

export const CompositeFigure2 = ({
  position,
  position2,
  args,
  args2,
  color,
  color2,
  label,
  label2,
  rotation,
  animate,
  visiblity,
  dimentions,
}) => {
  const mesh = useRef(null);
  const labelRef = useRef(null);
  const textref = useRef(null);
  const rectangleA = useRef(null);

  const top = ["topFront", "leftTop", "topBack", "rightTop"];
  const bottom = ["bottomFront", "leftBottom", "bottomBack", "rightBottom"];
  const left = ["leftFront", "leftBottom", "leftTop", "leftLeft"];
  const right = ["rightFront", "rightBottom", "rightBack", "rightTop"];
  const front = ["bottomFront", "leftFront", "topFront", "rightFront"];
  const back = ["bottomBack", "topBack", "rightBack", "bottomBack"];

  const dataA = right;
  const dataB = left;
  let dis = 0;
  let flag = true;

  useEffect(() => {
    if (textref) {
      // textref.current.position.x += 1;
      console.log("textref", textref.current.position.x);
    }
    if (rectangleA) {
      // textref.current.position.x += 1;
      console.log("rectangleA", rectangleA.current.position.x);
    }
  }, []);

  useFrame(({ clock }, state) => {
    const elapsedTime = clock.getElapsedTime();
    if (rotation) {
      mesh.current.rotation.y -= 0.002;
    }
    if (animate) {
      if (flag) {
        textref.current.position.x += 0.005;
        labelRef.current.position.x += 0.005;
        if (textref.current.position.x > 1) {
          flag = false;
        }
      } else {
        textref.current.position.x -= 0.005;
        labelRef.current.position.x -= 0.005;
        if (textref.current.position.x < 0) {
          flag = true;
        }
      }
    } else {
      textref.current.position.x = 0;
      labelRef.current.position.x = 0;
    }
  });
  console.log(dis);
  return (
    <>
      <group ref={mesh}>
        <mesh ref={rectangleA} position={position}>
          <boxBufferGeometry attach="geometry" args={args} />
          <meshStandardMaterial
            attach="material"
            color={color}
            opacity={visiblity ? visiblity : 1}
            transparent
          />
        </mesh>
        <Wireframe hide={dataA} position={position} args={args} />
        <Wireframe hide={dataB} position={position2} args={args2} />
        <group ref={textref}>
          <mesh castShadow position={position2}>
            <boxBufferGeometry attach="geometry" args={args2} />
            <meshStandardMaterial
              attach="material"
              color={color2}
              opacity={visiblity ? visiblity : 1}
              // opacity={0.1}
              transparent
            />
          </mesh>
        </group>
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
        <Text3d
          position={[
            position2[0],
            position2[1],
            position2[2] + 0.01 + args2[2] / 2,
          ]}
          scale={4}
          tex={label2}
          direction="front"
        />
        <Text3d
          position={[
            position[0],
            position[1] + dis,
            position[2] + 0.01 + args2[2] / 2,
          ]}
          scale={4}
          tex={label}
          direction="front"
        />
        //front
        {/* <Text3d
          position={[
            position[0],
            position[1] + dis,
            position[2] + 0.01 + args2[2] / 2,
          ]}
          scale={4}
          tex={label}
          direction="front"
        />
        //back
        <Text3d
          position={[
            position[0],
            position[1] + dis,
            position[2] - 0.01 - args2[2] / 2,
          ]}
          scale={4}
          tex={dimentions.height1}
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
          tex={dimentions.width1}
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
          tex={dimentions.width1}
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
          tex={dimentions.base1}
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
          tex={dimentions.base1}
          direction="bottom"
        /> */}
        {/* 2nd figure */}
        <group ref={labelRef}>
          {/* //front
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
            tex={dimentions.height2}
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
            tex={dimentions.width2}
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
            tex={dimentions.width2}
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
            tex={dimentions.base2}
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
            tex={dimentions.base2}
            direction="bottom"
          /> */}
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
