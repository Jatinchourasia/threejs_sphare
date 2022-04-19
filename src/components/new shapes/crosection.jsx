import React, { useRef, useEffect } from "react";
import { Rect } from "./../canvas/rect";
import { OrbitControls } from "@react-three/drei";
export const CrossSection = ({
  vertical,
  horizontal,
  shape,
  opacity,
  panelColor,
  shapeColor,
  crossectionColor,
}) => {
  const meshRef = useRef(null);
  const horizontalShape = useRef(null);
  const verticalShape = useRef(null);
  useEffect(() => {
    console.log("hehjehjehjehjeh");

    if (verticalShape) {
      if (vertical) {
        if (shape === "squarePyramid") {
          verticalShape.current.rotation.y -= 2.34;
        }
        if (shape === "triangularPyramid") {
          verticalShape.current.rotation.y -= 1.59;
          verticalShape.current.position.x += 0.2;
          verticalShape.current.rotation.z -= 0.1;
        }
        if (shape === "triangularPrism" || shape === "rectangularPrism") {
          verticalShape.current.rotation.x -= 1.59;
          if (shape === "rectangularPrism") {
            verticalShape.current.rotation.y -= 0.797;
          } else {
            verticalShape.current.rotation.y -= 0.53;
            verticalShape.current.position.y -= 0.5;
          }
        }
        if (shape === "sphare") {
          verticalShape.current.rotation.x = 1.59;
        } else {
          verticalShape.current.rotation.y -= 1.59;
        }
      }
    }
    if (horizontalShape) {
      if (horizontal) {
        if (shape === "triangularPrism" || shape === "rectangularPrism") {
          horizontalShape.current.rotation.z -= 1.59;
          if (shape === "rectangularPrism") {
            // horizontalShape.current.rotation.y -= 0.797;
          } else {
            // horizontalShape.current.rotation.y -= 0.53;
            // horizontalShape.current.position.y -= 0.5;
          }
        }
      }
    }
    if (meshRef) {
      if (shape === "triangularPrism" || shape === "rectangularPrism") {
        meshRef.current.rotation.x -= 1.56;
        if (shape === "triangularPrism") {
          meshRef.current.position.y -= 0.5;
        } else {
          meshRef.current.rotation.y = 2.35;
        }
      }
    }
  }, []);
  let radiusTop = 2;
  let radiusBottom = 2;
  let height = 4;
  let numberOfSides = 3;
  let heightSegment = 27;
  let openEnded = false;
  let thetaastart = 0;
  let thetaend = 6.283;
  // let dis = 0;
  // square pyramid, triangular pyramid,triangular prism, rectangle,sphare,cone
  const cyl = [
    "cone",
    "cylinder",
    "squarePyramid",
    "triangularPyramid",
    "triangularPrism",
    "rectangularPrism",
  ];

  const prismcross = ["triangularPrism", "rectangularPrism"];
  const cylcross = ["cone", "cylinder", "squarePyramid", "triangularPyramid"];
  if (shape === "cone") {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 64;
  }
  if (shape === "squarePyramid") {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 4;
    thetaastart = 2.34;
    thetaend = 6.29;
  }
  if (shape === "triangularPyramid") {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 3;
    thetaastart = 1.58;
    thetaend = 6.29;
  }
  if (shape === "rectangularPrism") {
    height = 4;
    numberOfSides = 4;
  }
  if (shape === "triangularPrism") {
    height = 4;
    numberOfSides = 3;
  }
  if (shape === "cylinder") {
    height = 4;

    numberOfSides = 40;
  }

  return (
    <>
      <group>
        {/* crosection */}
        {vertical && (
          <mesh
            // opacity={opacity ? opacity : 1}
            ref={verticalShape}
            castShadow
            position={[0.5, 0, 0]}
          >
            {cylcross.includes(shape) && (
              <cylinderBufferGeometry
                attach="geometry"
                args={[
                  radiusTop,
                  shape === "squarePyramid" || shape === "triangularPyramid"
                    ? radiusBottom / 1.4
                    : radiusBottom,
                  height,
                  2,
                  heightSegment,
                  openEnded,
                  thetaastart,
                  thetaend,
                ]}
                color={crossectionColor ? crossectionColor : "#fd0000"}
              />
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
                color={crossectionColor ? crossectionColor : "#fd0000"}
              />
            )}

            {shape === "sphare" && (
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
                color={crossectionColor ? crossectionColor : "#fd0000"}
              />
            )}

            <meshStandardMaterial
              attach="material"
              color={crossectionColor ? crossectionColor : "#fd0000"}
            />
          </mesh>
        )}{" "}
        {horizontal && (
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
                color={crossectionColor ? crossectionColor : "#fd0000"}
              />
            )}

            {prismcross.includes(shape) && (
              <cylinderBufferGeometry
                attach="geometry"
                args={[
                  radiusTop,

                  radiusTop,

                  shape === "triangularPrism" ? height / 2.4 : height / 1.4,
                  2,
                  heightSegment,
                  openEnded,
                  thetaastart,
                  thetaend,
                ]}
                color={crossectionColor ? crossectionColor : "#fd0000"}
              />
            )}

            {shape === "sphare" && (
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
                color={crossectionColor ? crossectionColor : "#fd0000"}
              />
            )}

            <meshStandardMaterial
              attach="material"
              color={crossectionColor ? crossectionColor : "#fd0000"}
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
              color={shapeColor ? shapeColor : "#86bae5"}
              opacity={opacity ? opacity : 1}
              transparent
            />
          )}

          {shape === "sphare" && (
            <sphereGeometry
              attach="geometry"
              color={shapeColor ? shapeColor : "#86bae5"}
              opacity={opacity ? opacity : 1}
              args={[radiusBottom, 64, 64]}
              transparent
            />
          )}
          <meshStandardMaterial
            attach="material"
            color={shapeColor ? shapeColor : "#86bae5"}
            opacity={opacity ? opacity : 1}
            transparent
          />
        </mesh>
        {/* <Line position={[1, height / 2, 1]} args={[-0.02, -0.02, 2]} /> */}
        {horizontal && (
          <Rect
            position={[0.5, 0, 0]}
            args={[
              radiusBottom * 2.5,
              shape === "sphare" ? radiusBottom * 2.5 : height * 1.25,
              0.01,
            ]}
            opacity={0.8}
            rotate={true}
            color={panelColor ? panelColor : "green"}
          />
        )}
        {vertical && (
          <Rect
            position={[0.5, 0, 0]}
            args={[
              radiusBottom * 2.5,
              shape === "sphare" ? radiusBottom * 2.5 : height * 1.25,
              0.01,
            ]}
            opacity={0.8}
            color={panelColor ? panelColor : "green"}
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
    </>
  );
};
