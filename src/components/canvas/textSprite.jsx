import { Box, OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";

const TextS = ({
  children,
  position,
  scale,
  color = "black",
  fontSize = 45,
}) => {
  const canvas = useMemo(() => {
    var fontface = "Arial";
    var fontsize = fontSize;
    var borderThickness = 4;

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.textBaseline = "middle";
    context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`;

    var metrics = context.measureText(children);
    console.log(metrics);
    var textWidth = metrics.width;

    context.lineWidth = borderThickness;

    context.fillStyle = color;
    context.fillText(children, textWidth - textWidth * 0.8, fontsize);
    return canvas;
  }, [children]);
  return (
    <sprite scale={scale} position={position}>
      <spriteMaterial
        sizeAttenuation={false}
        attach="material"
        transparent
        alphaTest={0.5}
      >
        <canvasTexture attach="map" image={canvas} />
      </spriteMaterial>
    </sprite>
  );
};

export const TextSprite = ({ tex }) => {
  const mesh = useRef(null);
  // let data = position;
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.z;
  //   data = [];
  // });
  //   console.log("data");

  return (
    <>
      <mesh castShadow position={[1, 2, 2]} ref={mesh}>
        <TextS scale={[0.4, 0.4, 0.4]} opacity={1} position={[0, 0, 0]}>
          {tex}
        </TextS>
      </mesh>
    </>
  );
};
