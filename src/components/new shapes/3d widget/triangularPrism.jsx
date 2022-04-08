import { Box, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef, useEffect } from "react";
import { Line } from "./../line";

export const TriangularPrism = () => {
  const mesh = useRef(null);
  let animate = true;
  let radiusTop = 2;
  let radiusBottom = 2;
  let height = 3;
  let numberOfSides = 3;
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
            color={"#86bae5"}
            opacity={0.3}
          />
          <meshStandardMaterial
            attach="material"
            color={"#86bae5"}
            opacity={0.3}
            transparent
          />
        </mesh>
        <Line position={[1, height / 2, 1]} args={[-0.02, -0.02, 2]} />
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
