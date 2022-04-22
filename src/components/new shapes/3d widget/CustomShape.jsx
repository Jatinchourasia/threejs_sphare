import { OrbitControls } from "@react-three/drei";
import React from "react";
import { CustomGeometry } from "./CustomGeometry";
import { Line2 } from "./Line2";

export const CustomShape = ({ position, args }) => {
  const b = 1;
  const w = 4;

  console.log((position[0] - b + w + position[0] + args[0] + b + w) / 2);
  return (
    <>
      //height
      <Line2
        start={[
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] - args[1] / 2, //top bottom
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        end={[
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        color={"black"}
      />
      //bottom front
      <Line2
        start={[
          position[0] - b + w,
          position[1] - args[1] / 2,
          position[2] + args[2] + b + w,
        ]}
        end={[
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        color={"blue"}
      />
      //left bottom
      <Line2
        start={[
          position[0] + b - w,
          position[1] - args[1] / 2, //top bottom
          position[2] - args[2] - b - w,
        ]}
        end={[
          -(position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          -(position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        color={"red"}
      />
      //bottom back
      <Line2
        start={[
          position[0] - args[0] - b - w,
          position[1] - args[1] / 2, //top bottom
          position[2] + b - w,
        ]}
        end={[
          -(position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          -(position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        color={"teal"}
      />
      //right bottom
      <Line2
        start={[
          position[0] + args[0] + b + w,
          position[1] - args[1] / 2, //top bottom
          position[2] - b + w,
        ]}
        end={[
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        color={"green"}
      />
      //base
      <Line2
        start={[
          position[0] - b + w,
          position[1] - args[1] / 2,
          position[2] + args[2] + b + w,
        ]}
        end={[
          position[0] + args[0] + b + w,
          position[1] - args[1] / 2, //top bottom
          position[2] - b + w,
        ]}
        color={"blue"}
      />
      <Line2
        start={[
          position[0] + b - w,
          position[1] - args[1] / 2, //top bottom
          position[2] - args[2] - b - w,
        ]}
        end={[
          position[0] - args[0] - b - w,
          position[1] - args[1] / 2, //top bottom
          position[2] + b - w,
        ]}
        color={"red"}
      />
      <Line2
        start={[
          position[0] + args[0] + b + w,
          position[1] - args[1] / 2, //top bottom
          position[2] - b + w,
        ]}
        end={[
          position[0] + b - w,
          position[1] - args[1] / 2, //top bottom
          position[2] - args[2] - b - w,
        ]}
        color={"green"}
      />
      <Line2
        start={[
          position[0] - args[0] - b - w,
          position[1] - args[1] / 2, //top bottom
          position[2] + b - w,
        ]}
        end={[
          position[0] - b + w,
          position[1] - args[1] / 2,
          position[2] + args[2] + b + w,
        ]}
        color={"teal"}
      />
      //topline
      <Line2
        start={[
          -(position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          -(position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        end={[
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
          position[1] + args[1] / 2, //top bottom
          (position[0] - b + w + position[0] + args[0] + b + w) / 2,
        ]}
        color={"black"}
      />
      //bottom front
      {/* <Line2
        start={[position[0], position[1] - args[1] / 2, position[2] + args[2]]}
        end={[
          0 + args[0] / 2,
          position[1] + args[1] / 2, //top bottom
          0 + args[2] / 2,
        ]}
        color={"blue"}
      />
      //left bottom
      <Line2
        start={[
          position[0],
          position[1] - args[1] / 2, //top bottom
          position[2] - args[2],
        ]}
        end={[
          0 - args[0] / 2,
          position[1] + args[1] / 2, //top bottom
          0 - args[2] / 2,
        ]}
        color={"red"}
      />
      //bottom back
      <Line2
        start={[
          position[0] - args[0],
          position[1] - args[1] / 2, //top bottom
          position[2],
        ]}
        end={[
          0 - args[0] / 2,
          position[1] + args[1] / 2, //top bottom
          0 - args[2] / 2,
        ]}
        color={"teal"}
      />
      //right bottom
      <Line2
        start={[
          position[0] + args[0],
          position[1] - args[1] / 2, //top bottom
          position[2],
        ]}
        end={[
          0 + args[0] / 2,
          position[1] + args[1] / 2, //top bottom
          0 + args[2] / 2,
        ]}
        color={"green"}
      />
      //base
      <Line2
        start={[position[0], position[1] - args[1] / 2, position[2] + args[2]]}
        end={[
          position[0] + args[0],
          position[1] - args[1] / 2, //top bottom
          position[2],
        ]}
        color={"blue"}
      />
      <Line2
        start={[
          position[0] + args[0],
          position[1] - args[1] / 2, //top bottom
          position[2],
        ]}
        end={[
          position[0],
          position[1] - args[1] / 2, //top bottom
          position[2] - args[2],
        ]}
        color={"green"}
      />
      <Line2
        start={[
          position[0],
          position[1] - args[1] / 2, //top bottom
          position[2] - args[2],
        ]}
        end={[
          position[0] - args[0],
          position[1] - args[1] / 2, //top bottom
          position[2],
        ]}
        color={"red"}
      />
      <Line2
        start={[
          position[0] - args[0],
          position[1] - args[1] / 2, //top bottom
          position[2],
        ]}
        end={[position[0], position[1] - args[1] / 2, position[2] + args[2]]}
        color={"teal"}
      />
      <Line2
        start={[
          0 + args[0] / 2,
          position[1] + args[1] / 2, //top bottom
          0 + args[2] / 2,
        ]}
        end={[
          0 - args[0] / 2,
          position[1] + args[1] / 2, //top bottom
          0 - args[2] / 2,
        ]}
        color={"black"}
      /> */}
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.5}
      />
    </>
  );
};
