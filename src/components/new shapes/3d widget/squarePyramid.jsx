import { Box, Edges, OrbitControls } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { PyramidWireframe } from "./pyramidWireframe";
import { PyramidStruct } from "./PyramidStruct";

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
      // meshRef.current.rotation.y = 0.8;
    }
  }, []);
  //   (radiustop,radius bottom, height , redialsegment,heightSegment,openended, thetaastart, thetaend)
  return (
    <>
      <group>
        <mesh castShadow ref={meshRef} position={[0, 0, 0]}>
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
            opacity={0.3}
            transparent
          />
          <meshStandardMaterial
            attach="material"
            color={"#6271ff"}
            opacity={0.3}
            transparent
          />
          {/* <Edges scale={1} threshold={3} color="black" /> */}
          {/* <Edges scale={1} threshold={15} color="black" /> */}
        </mesh>
        <PyramidWireframe
          position={[0, 0, 0]}
          args={[radiusBottom, height, radiusBottom]}
        />
        {/* <PyramidStruct
          position={[0, 0, 0]}
          args={[radiusBottom, height, radiusBottom]}
        /> */}
        {/* <Wireframe position={[0, 0, 0]} args={[1, 1, 1]} /> */}
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
