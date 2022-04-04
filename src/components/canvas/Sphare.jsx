import { useFrame, useLoader } from "@react-three/fiber";
import React, { useRef } from "react";
import { TextureLoader } from "three";
import NormapMap from "../../static/texture/NormalMap.png";
import Golf from "../../static/texture/golf.jpg";
import { OrbitControls } from "@react-three/drei";
export const Sphare = (props) => {
  const [normalMap, golfMap] = useLoader(TextureLoader, [NormapMap, Golf]);

  const sphareRef = useRef(null);
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    sphareRef.current.rotation.y = elapsedTime / 2;
  });
  return (
    <>
      <pointLight position={[1, -1.9, -1.6]} intensity={10} color="#3a1b8d" />
      <pointLight position={[-1, 0.5, -1.6]} intensity={10} color="#640707" />
      <ambientLight intensity={2} />
      <mesh ref={sphareRef}>
        <sphereGeometry args={[2, 64, 64]} />
        {/* <meshPhongMaterial color="red" /> */}
        <meshStandardMaterial
          metalness={0.7}
          roughness={0.2}
          map={golfMap}
          normalMap={normalMap}
        />

        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.5}
        />
      </mesh>
    </>
  );
};
