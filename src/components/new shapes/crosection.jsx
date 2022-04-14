import React, { useRef, useEffect } from "react";
import { Rect } from "./../canvas/rect";
import { OrbitControls } from "@react-three/drei";
export const CrossSection = ({ vertical, horizontal, shape }) => {
  const meshRef = useRef(null);
  useEffect(() => {
    if (meshRef) {
      if (shape === "triangularPrism" || shape === "rectangularPrism") {
        meshRef.current.rotation.x -= 1.59;
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
  let height = 3;
  let numberOfSides = 27;
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
  if (shape == "cone") {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 64;
  }
  if (shape == "squarePyramid") {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 4;
    thetaastart = 2.34;
    thetaend = 6.29;
  }
  if (shape == "triangularPyramid") {
    radiusTop = 0;
    radiusBottom = 2;
    height = 4;
    numberOfSides = 3;
    thetaastart = 1.58;
    thetaend = 6.29;
  }
  if (shape == "rectangularPrism") {
    height = 4;
    numberOfSides = 4;
  }

  return (
    <>
      <group>
        <mesh ref={meshRef} castShadow position={[0.5, 0, 0]}>
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
              color={"#86bae5"}
              opacity={0.3}
            />
          )}

          {shape === "sphare" && (
            <sphereGeometry args={[radiusBottom, 64, 64]} />
          )}
          <meshStandardMaterial
            attach="material"
            color={"#86bae5"}
            opacity={0.3}
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
            opacity={0.3}
            rotate={true}
            color="green"
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
            opacity={0.3}
            color="green"
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
