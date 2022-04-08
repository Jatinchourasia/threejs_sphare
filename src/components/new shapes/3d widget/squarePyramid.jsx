import { Box, Edges, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";

export const SquarePyramid = () => {
  const mesh = useRef(null);
  let animate = true;
  let radiusTop = 0;
  let radiusBottom = 2;
  let height = 3;
  let numberOfSides = 4;
  let heightSegment = 27;
  let openEnded = false;
  let thetaastart = 0;
  let thetaend = 6.29;
  // let dis = 0;
  const meshRef = useRef(null);
  useEffect(() => {
    if (meshRef) {
      //   meshRef.current.rotation.x -= 3;
    }
  }, []);
  //   (radiustop,radius bottom, height , redialsegment,heightSegment,openended, thetaastart, thetaend)
  return (
    <>
      <group>
        <mesh castShadow ref={meshRef} position={[0.5, 0, 0]}>
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
          />
          <meshStandardMaterial attach="material" color={"#6271ff"} />
          <Edges scale={1} threshold={15} color="black" />
          <Edges scale={1} threshold={15} color="black" />
        </mesh>

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
