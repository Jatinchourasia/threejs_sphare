import { Canvas, useFrame } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import { CylinderCross } from "../../crossection/cylinderCross";

import { Square } from "./square";
import { TriangularPrism } from "./3d widget/triangularPrism";
import { RectangularPrism } from "./3d widget/rectangularPrism";
import { CrossSection } from "./crosection";
import { Line2 } from "./3d widget/Line2";
import { CustomShape } from "./3d widget/CustomShape";
import { CustomShape2 } from "./3d widget/CustomShape2";
import { SquarePyramid } from "./Widgets/square/SquarePyramid";
import { TriangularPrism3D } from "./Widgets/triangular/TriangularPrism";

const CanvasContainer = styled.div`
  display: block;
  width: 800px;
  height: 800px;
  touch-action: none;
  border-radius: 8px;
  padding: 0.5px;
  border: 1.5px solid black;
  cursor: grab;
  :active {
    cursor: grabbing;
  }

  .vide {
    height: 20vw;
    width: 20vw;
  }
`;

export const Container = () => {
  const ref = useRef();
  const da = {
    plane: "horizontal",
    shape: "triangular_pyramid",
    opacity: 0.75,
    plane_color: "#42D540",
    shape_color: "#D8D8DF",
    cross_section_color: "#028500",
  };

  const props = {
    triangle_base: 2,
    triangle_left_side: 2,
    triangle_right_side: 3,
    triangle_height: 4,
    rectangle_length: 5,
    prism_height: 6,
    triangle_type: "triangularPrism",
    faces: [
      {
        id: 1,
        position: "front",
        color: "blue",
      },
      {
        id: 2,
        position: "back",
        color: "green",
      },
      {
        id: 3,
        position: "bottom",
        color: "blue",
      },
      {
        id: 4,
        position: "left",
        color: "blue",
      },
      {
        id: 5,
        position: "right",
        color: "blue",
      },
    ],
    edges: [
      {
        id: 1,
        face: "front",
        position: "left",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 2,
        face: "front",
        position: "right",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 3,
        face: "front",
        position: "bottom",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 4,
        face: "back",
        position: "left",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 5,
        face: "back",
        position: "right",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 6,
        face: "back",
        position: "bottom",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 7,
        face: "right",
        position: "top",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 8,
        face: "right",
        position: "bottom",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
      {
        id: 9,
        face: "left",
        position: "bottom",
        color: "grey", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
    ],
    unit: "in",
    show_default_labels: true,
    animation_sequences: [
      { faces: [1, 2, 3], edges: [1, 2, 3] }, //ids of faces and edges
      { faces: [1, 2, 3], edges: [1, 2, 3] },
    ],
    show_animation: false,
  };

  const props3D = {
    triangle_base: 2,
    triangle_left_side: 2,
    triangle_right_side: 3,
    triangle_height: 4,
    rectangle_length: 5,
    prism_height: 6,
    faces: [
      {
        id: 1,
        position: "front|back|top|bottom|left|right",
        color: "string",
      },
    ],
    edges: [
      {
        id: 1,
        face: "front|back|top|bottom|left|right",
        position: "left|right|top|bottom|altitude",
        color: "string", //default color is gray
        label: {
          text: "5yd",
          show_label: true, //default
        },
      },
    ],
    unit: "in",
    show_default_labels: true,
    animation_sequences: [
      { faces: [1, 2, 3], edges: [1, 2, 3] }, //ids of faces and edges
      { faces: [1, 2, 3], edges: [1, 2, 3] },
    ],
    show_animation: Boolean,
  };

  return (
    <>
      <CanvasContainer>
        <Canvas
          fill="white"
          ref={ref}
          shadowMap
          camera={{ position: [6, 4, 10], fov: 60 }}
        >
          {/* <color attach="background" args={["#e1e1e1"]} /> */}
          <Suspense fallback={null}>
            {/* <ambientLight intensity={0.1} />
            <directionalLight
              castShadow
              position={[0, 10, 0]}
              intensity={1.5}
              shadow-mapSize-width={1024}
              shadow-mapSize-height={1024}
              shadow-camera-far={50}
              shadow-camera-left={-10}
              shadow-camera-right={10}
              shadow-camera-top={10}
              shadow-camera-bottom={-10}
            /> */}
            <pointLight position={[10, 0, 20]} intensity={0.5} />
            <pointLight position={[-10, 0, -20]} intensity={0.5} />
            <pointLight position={[0, -10, 0]} intensity={1.5} />
            <pointLight position={[0, 10, 0]} intensity={1.5} />
            {/* <Square
              position={[0, 0, 0]}
              args={[3, 4, 3]}
              opacity={0.1}
              color="green"
            /> */}
            {/* <CustomShape /> */}

            {/* <CrossSection {...da} /> */}
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="SquarePrism"
            /> */}

            {/* <SquarePyramid position={[0, 0, 0]} args={[3, 1]} /> */}
            <TriangularPrism3D {...props} />
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="rightTriangularPrism"
            /> */}
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="triangularPrism"
            /> */}
            {/* <CustomShape2
              position={[0, 0, 0]}
              args={[3, 1, 1]}
              shape="squarePyramid"
            /> */}
            {/* args={[w,h,b]} */}
            {/* <CylinderCross /> */}

            {/* <TriangularPrism /> */}
            {/* <CrossSection {...data} /> */}

            {/* <RectangularPrism position={[0, 0, 0]} args={[3, 4, 3]} /> */}
            {/* <SquarePyramid /> */}
          </Suspense>
        </Canvas>
      </CanvasContainer>
    </>
  );
};
//
