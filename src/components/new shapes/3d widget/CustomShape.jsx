import { OrbitControls } from "@react-three/drei";
import React from "react";
import { CustomGeometry } from "./CustomGeometry";
import { Line2 } from "./Line2";

export const CustomShape = ({ position, args }) => {
  return (
    <>
      //height
      <Line2
        start={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] - args[0] / 2, //top bottom
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"black"}
      />
      //bottom front
      <Line2
        start={[
          position[0] - args[2] + args[1],
          position[1] - args[0] / 2,
          position[2] + args[2] + args[1],
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"blue"}
      />
      //left bottom
      <Line2
        start={[
          position[0] + args[2] - args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] - args[2] - args[1],
        ]}
        end={[
          -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"red"}
      />
      //bottom back
      <Line2
        start={[
          position[0] - args[2] - args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] + args[2] - args[1],
        ]}
        end={[
          -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"teal"}
      />
      //right bottom
      <Line2
        start={[
          position[0] + args[2] + args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] - args[2] + args[1],
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"green"}
      />
      //base
      <Line2
        start={[
          position[0] - args[2] + args[1],
          position[1] - args[0] / 2,
          position[2] + args[2] + args[1],
        ]}
        end={[
          position[0] + args[2] + args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] - args[2] + args[1],
        ]}
        color={"blue"}
      />
      <Line2
        start={[
          position[0] + args[2] - args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] - args[2] - args[1],
        ]}
        end={[
          position[0] - args[2] - args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] + args[2] - args[1],
        ]}
        color={"red"}
      />
      <Line2
        start={[
          position[0] + args[2] + args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] - args[2] + args[1],
        ]}
        end={[
          position[0] + args[2] - args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] - args[2] - args[1],
        ]}
        color={"green"}
      />
      <Line2
        start={[
          position[0] - args[2] - args[1],
          position[1] - args[0] / 2, //top bottom
          position[2] + args[2] - args[1],
        ]}
        end={[
          position[0] - args[2] + args[1],
          position[1] - args[0] / 2,
          position[2] + args[2] + args[1],
        ]}
        color={"teal"}
      />
      //topline
      <Line2
        start={[
          -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] + args[0] / 2, //top bottom
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"black"}
      />
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
