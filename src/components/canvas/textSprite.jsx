import { Box, OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";

const TextS = ({
  children,
  position,
  scale,
  color = "black",
  fontSize = 20,
}) => {
  const canvas = useMemo(() => {
    function roundRect(ctx, x, y, w, h, r) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.lineTo(x + w - r, y);
      ctx.quadraticCurveTo(x + w, y, x + w, y + r);
      ctx.lineTo(x + w, y + h - r);
      ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      ctx.lineTo(x + r, y + h);
      ctx.quadraticCurveTo(x, y + h, x, y + h - r);
      ctx.lineTo(x, y + r);
      ctx.quadraticCurveTo(x, y, x + r, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
    }
    var fontface = "Arial";
    var fontsize = fontSize;
    var borderThickness = 4;

    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
    context.textBaseline = "middle";
    context.font = `bold ${fontSize}px -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif`;
    console.log("context", canvas);
    var metrics = context.measureText(children);
    console.log(metrics);
    var textWidth = metrics.width;
    context.fillStyle = "#be2d2d";

    context.lineWidth = borderThickness;
    roundRect(
      context,
      borderThickness / 2,
      borderThickness / 2,
      textWidth + borderThickness,
      fontsize * 1.4 + borderThickness,
      6
    );
    context.fillStyle = "#000000";
    context.fillText(children, textWidth - textWidth * 0.8, fontsize);
    return canvas;
  }, [children]);
  return (
    <sprite scale={scale} position={position}>
      <spriteMaterial
        sizeAttenuation={false}
        attach="material"
        transparent
        alphaTest={-1}
      >
        <canvasTexture attach="map" image={canvas} />
      </spriteMaterial>
    </sprite>
  );
};

export const TextSprite = ({ tex, position }) => {
  const mesh = useRef(null);
  // let data = position;
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.z;
  //   data = [];
  // });
  //   console.log("data");

  return (
    <>
      <mesh castShadow position={[2.5, -1.5, 1.5]} ref={mesh}>
        <TextS scale={[1, 0.4, 0.4]} opacity={1} position={(0.1, 0.1, 0.1)}>
          {tex}
        </TextS>
      </mesh>
    </>
  );
};
