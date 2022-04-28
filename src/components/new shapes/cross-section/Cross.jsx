//@ts-nocheck
import React, { useRef, useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import { Rect } from "./Rect";
import { useFrame } from "@react-three/fiber";
import { CustomGeometry } from "./../3d widget/CustomGeometry";

export const Cross = ({
  plane,
  shape,
  opacity,
  plane_color,
  shape_color,
  cross_section_color,
  rotation,
}) => {
  const Shape = {
    CONE: "cone",
    CYLINDER: "cylinder",
    TRIANGULAR_PRISM: "triangular_prism",
    RECTANGULAR_PRISM: "rectangular_prism",
    SQUARE_PYRAMID: "square_pyramid",
    TRIANGULAR_PYRAMID: "triangular_pyramid",
    SPHERE: "sphere",
  };
  const meshRef = useRef(null);
  const horizontalShape = useRef(null);
  const verticalShape = useRef(null);
  const groupRef = useRef(null);
  const grRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    if (groupRef) {
      groupRef.current.position.x = -0.5;
    }
    if (innerRef) {
      // innerRef.current.position.x = -1 - radiusBottom / 2;
      innerRef.current.position.z = -1;
      innerRef.current.rotation.y = -2.36;
      // innerRef.current.position.z = -1 - radiusBottom / 2;
    }
    if (verticalShape) {
      if (plane === "vertical") {
        if (shape === Shape.SQUARE_PYRAMID) {
          verticalShape.current.rotation.y = -3.92;
        } else if (shape === Shape.TRIANGULAR_PYRAMID) {
          verticalShape.current.rotation.y = -3.18;
          verticalShape.current.position.x = 0.7;
          verticalShape.current.rotation.z = -0.1;
        } else if (
          shape === Shape.TRIANGULAR_PRISM ||
          shape === Shape.RECTANGULAR_PRISM
        ) {
          verticalShape.current.rotation.x = -1.59;
          if (shape === Shape.RECTANGULAR_PRISM) {
            verticalShape.current.rotation.y = -0.797; // -2.387
          } else {
            verticalShape.current.rotation.y = -2.1; //-2.12
            verticalShape.current.position.y = -0.5;
          }
        } else if (shape === Shape.SPHERE) {
          verticalShape.current.rotation.x = 1.59;
        } else {
          verticalShape.current.rotation.y = -1.57;
        }
      }
    }
    if (horizontalShape) {
      if (plane === "horizontal") {
        if (
          shape === Shape.TRIANGULAR_PRISM ||
          shape === Shape.RECTANGULAR_PRISM
        ) {
          horizontalShape.current.rotation.z = -1.57;
          if (shape === Shape.TRIANGULAR_PRISM) {
            horizontalShape.current.rotation.x = -0.01;
            horizontalShape.current.position.y = -0.01;
            // horizontalShape.current.rotation.z -= 0.5;
          }
        }
      }
    }
    if (meshRef) {
      if (
        shape === Shape.TRIANGULAR_PRISM ||
        shape === Shape.RECTANGULAR_PRISM
      ) {
        meshRef.current.rotation.x = -1.56;
        if (shape === Shape.TRIANGULAR_PRISM) {
          meshRef.current.position.y = -0.5;
        } else {
          meshRef.current.rotation.y = 2.35;
        }
      }
    }
  });

  // useFrame(() => {
  //   if (rotation) {
  //     grRef.current.rotation.y -= 0.02;
  //   }
  // });
  let radiusTop = 2;
  let radiusBottom = 2;
  let height = 4;
  let numberOfSides = 3;
  let heightSegment = 27;
  let openEnded = false;
  let thetaastart = 0;
  let thetaend = 6.283;
  const cyl = [
    Shape.CONE,
    Shape.CYLINDER,
    Shape.SQUARE_PYRAMID,
    Shape.TRIANGULAR_PYRAMID,
    Shape.TRIANGULAR_PRISM,
    Shape.RECTANGULAR_PRISM,
  ];

  const prismcross = [Shape.TRIANGULAR_PRISM, Shape.RECTANGULAR_PRISM];
  const cylcross = [
    Shape.CONE,
    Shape.CYLINDER,
    Shape.SQUARE_PYRAMID,
    Shape.TRIANGULAR_PYRAMID,
  ];
  if (shape === Shape.CONE) {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 64;
  }
  if (shape === Shape.SQUARE_PYRAMID) {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 4;
    thetaastart = 2.34;
    thetaend = 6.29;
  }
  if (shape === Shape.TRIANGULAR_PYRAMID) {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 3;
    thetaastart = 1.58;
    thetaend = 6.29;
  }
  if (shape === Shape.RECTANGULAR_PRISM) {
    height = 4;
    numberOfSides = 4;
  }
  if (shape === Shape.TRIANGULAR_PRISM) {
    height = 4;
    numberOfSides = 3;
  }
  if (shape === Shape.CYLINDER) {
    height = 4;

    numberOfSides = 40;
  }

  return (
    <>
      <mesh ref={grRef}>
        <group ref={groupRef}>
          {/* crosection */}
          {plane === "vertical" && (
            <mesh
              // opacity={opacity ? opacity : 1}
              ref={verticalShape}
              castShadow
              position={[0.5, 0, 0]}
            >
              {cylcross.includes(shape) && (
                // <cylinderBufferGeometry
                //   attach="geometry"
                //   args={[
                //     radiusTop,
                //     shape === Shape.SQUARE_PYRAMID ||
                //     shape === Shape.TRIANGULAR_PYRAMID
                //       ? radiusBottom / 1.4
                //       : radiusBottom,
                //     height,
                //     3,
                //     heightSegment,
                //     openEnded,
                //     thetaastart,
                //     thetaend,
                //   ]}
                //   color={cross_section_color ? cross_section_color : "#fd0000"}
                // />
                <group ref={innerRef}>
                  <CustomGeometry
                    vertices={[
                      [
                        (-radiusBottom / 1.4 + radiusBottom / 1.4) / 2,
                        height / 2,
                        (-radiusBottom / 1.4 + radiusBottom / 1.4) / 2,
                      ],
                      [-radiusBottom / 1.4, -height / 2, +radiusBottom / 1.4],
                      [radiusBottom / 1.4, -height / 2, -radiusBottom / 1.4],
                    ]}
                    opacity={1}
                    color="orange"
                  />
                </group>
              )}

              {prismcross.includes(shape) && (
                <cylinderBufferGeometry
                  attach="geometry"
                  args={[
                    radiusTop,
                    radiusBottom / 2,
                    0.001,
                    numberOfSides,
                    heightSegment,
                    openEnded,
                    thetaastart,
                    thetaend,
                  ]}
                  color={cross_section_color ? cross_section_color : "#fd0000"}
                />
              )}

              {shape === Shape.SPHERE && (
                <cylinderBufferGeometry
                  attach="geometry"
                  args={[
                    radiusTop,
                    radiusBottom,
                    0.001,
                    64,
                    heightSegment,
                    openEnded,
                    thetaastart,
                    thetaend,
                  ]}
                  color={cross_section_color ? cross_section_color : "#fd0000"}
                />
              )}

              <meshStandardMaterial
                attach="material"
                color={cross_section_color ? cross_section_color : "#fd0000"}
              />
            </mesh>
          )}{" "}
          {plane === "horizontal" && (
            <mesh
              // opacity={opacity ? opacity : 1}
              ref={horizontalShape}
              castShadow
              position={[0.5, 0, 0]}
            >
              {cyl.includes(shape) && (
                <cylinderBufferGeometry
                  attach="geometry"
                  args={[
                    radiusTop,
                    radiusBottom / 2,
                    0.001,
                    numberOfSides,
                    heightSegment,
                    openEnded,
                    thetaastart,
                    thetaend,
                  ]}
                  color={cross_section_color ? cross_section_color : "#fd0000"}
                />
              )}

              {prismcross.includes(shape) && (
                <cylinderBufferGeometry
                  attach="geometry"
                  args={[
                    radiusTop,

                    radiusTop,

                    shape === Shape.TRIANGULAR_PRISM
                      ? height / 2.4
                      : height / 1.4,
                    2,
                    heightSegment,
                    openEnded,
                    thetaastart,
                    thetaend,
                  ]}
                  color={cross_section_color ? cross_section_color : "#fd0000"}
                />
              )}

              {shape === Shape.SPHERE && (
                <cylinderBufferGeometry
                  attach="geometry"
                  args={[
                    radiusTop,
                    radiusBottom,
                    0.001,
                    64,
                    heightSegment,
                    openEnded,
                    thetaastart,
                    thetaend,
                  ]}
                  color={cross_section_color ? cross_section_color : "#fd0000"}
                />
              )}

              <meshStandardMaterial
                attach="material"
                color={cross_section_color ? cross_section_color : "#fd0000"}
              />
            </mesh>
          )}
          <mesh
            // opacity={opacity ? opacity : 1}
            ref={meshRef}
            castShadow
            position={[0.5, 0, 0]}
          >
            {cyl.includes(shape) && (
              <cylinderBufferGeometry
                attach="geometry"
                args={[
                  radiusTop,
                  radiusBottom,
                  height,
                  numberOfSides,
                  heightSegment,
                  openEnded,
                  thetaastart,
                  thetaend,
                ]}
                color={shape_color ? shape_color : "#86bae5"}
                opacity={opacity ? opacity : 1}
                transparent
              />
            )}

            {shape === Shape.SPHERE && (
              <sphereGeometry
                attach="geometry"
                color={shape_color ? shape_color : "#86bae5"}
                opacity={opacity ? opacity : 1}
                args={[radiusBottom, 64, 64]}
                transparent
              />
            )}
            <meshStandardMaterial
              attach="material"
              color={shape_color ? shape_color : "#86bae5"}
              opacity={opacity ? opacity : 1}
              transparent
            />
          </mesh>
          {/* <Line position={[1, height / 2, 1]} args={[-0.02, -0.02, 2]} /> */}
          {plane === "horizontal" && (
            <Rect
              position={[0.5, 0, 0]}
              args={[
                radiusBottom * 2.5,
                shape === Shape.SPHERE ? radiusBottom * 2.5 : height * 1.25,
                0.01,
              ]}
              opacity={0.5}
              rotate={true}
              color={plane_color ? plane_color : "green"}
            />
          )}
          {plane === "vertical" && (
            <Rect
              position={[0.5, 0, 0]}
              args={[
                radiusBottom * 2.5,
                shape === Shape.SPHERE ? radiusBottom * 2.5 : height * 1.25,
                0.02,
              ]}
              opacity={0.5}
              color={plane_color ? plane_color : "green"}
            />
          )}
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.5}
          />
        </group>
      </mesh>
    </>
  );
};
