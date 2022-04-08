import { Box, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { Rect } from "./../components/canvas/rect";

export const CylinderCross = () => {
  const mesh = useRef(null);
  let animate = true;
  // let dis = 0;
  let flag = true;
  useFrame(() => {
    if (animate) {
      if (flag) {
        mesh.current.position.x += 0.003;
        mesh.current.rotation.z -= 0.001;
        if (mesh.current.position.x > 0.5) {
          flag = false;
        }
      } else {
        mesh.current.position.x -= 0.003;
        mesh.current.rotation.z += 0.001;

        if (mesh.current.position.x < -0.3) {
          flag = true;
        }
      }
    } else {
      mesh.current.position.x = 0.3;
    }
  });

  //   (radiustop,radius bottom, height , redialsegment,heightSegment,openended, thetaastart, thetaend)
  return (
    <>
      <group>
        <mesh castShadow position={[0.5, 0, 0]}>
          <cylinderBufferGeometry
            attach="geometry"
            args={[1, 1, 3, 27, 27, false, 0, 3.15]}
          />
          <meshStandardMaterial attach="material" color={"#6271ff"} />
          <Rect
            position={[0, 0, 0]}
            args={[0.01, 3, 2]}
            opacity={1}
            color="#b5bcff"
          />
        </mesh>
        <mesh castShadow position={[0.3, 0, 0]} ref={mesh}>
          {/* <cylinderBufferGeometry
          attach="geometry"
          args={[1, 1, 3, 27, 27, false, 0, 3.15]}
        />
        <meshStandardMaterial attach="material" color={"#6271ff"} />
        <Rect
          position={[0, 0, 0]}
          args={[0.01, 3, 2]}
          opacity={1}
          color="#b5bcff"
        />  */}

          <cylinderBufferGeometry
            attach="geometry"
            args={[1, 1, 3, 27, 27, false, 9.4, 3.15]}
          />
          <meshStandardMaterial attach="material" color={"#6271ff"} />
          <Rect
            position={[0, 0, 0]}
            args={[0.01, 3, 2]}
            opacity={1}
            color="#b5bcff"
          />
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
