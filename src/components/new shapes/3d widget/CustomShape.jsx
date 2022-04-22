import { OrbitControls } from "@react-three/drei";
import React from "react";
import { CustomGeometry } from "./CustomGeometry";
import { Line2 } from "./Line2";
import { DashedLine } from "./DashedLine";

export const CustomShape = ({ position, args }) => {
  const a = [
    position[0] - args[2] + args[1],
    position[1] - args[0] / 2,
    position[2] + args[2] + args[1],
  ];
  const b = [
    position[0] + args[2] + args[1],
    position[1] - args[0] / 2,
    position[2] - args[2] + args[1],
  ];

  const c = [
    position[0] + args[2] - args[1],
    position[1] - args[0] / 2,
    position[2] - args[2] - args[1],
  ];

  const d = [
    position[0] - args[2] - args[1],
    position[1] - args[0] / 2,
    position[2] + args[2] - args[1],
  ];

  const e = [
    (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
    position[1] + args[0] / 2,
    (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
  ];
  const f = [
    -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
    position[1] + args[0] / 2,
    -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
  ];
  return (
    <>
      //height
      <DashedLine
        from={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] - args[0] / 2,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        to={e}
      />
      {/* angle */}
      <Line2
        start={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            0.1,
          position[1] - args[0] / 2,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 -
            0.1,
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            0.1,
          position[1] - args[0] / 2 + 0.14,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 -
            0.1,
        ]}
        color={"black"}
      />{" "}
      <Line2
        start={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] - args[0] / 2,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] - args[0] / 2 + 0.14,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"black"}
      />
      <Line2
        start={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            0.1,
          position[1] - args[0] / 2 + 0.14,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 -
            0.1,
        ]}
        end={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
          position[1] - args[0] / 2 + 0.14,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2,
        ]}
        color={"black"}
      />
      //bottom front
      <Line2 start={a} end={e} color={"blue"} />
      //left bottom
      <Line2 start={c} end={f} color={"red"} />
      //bottom back
      <Line2 start={d} end={f} color={"teal"} />
      //right bottom
      <Line2 start={b} end={e} color={"green"} />
      //base
      <Line2 start={a} end={b} color={"blue"} />
      <Line2 start={c} end={d} color={"red"} />
      <Line2 start={b} end={c} color={"green"} />
      <Line2 start={d} end={a} color={"teal"} />
      //topline
      <Line2 start={e} end={f} color={"black"} />
      //sides
      {/* rectangles */}
      {/* bottom */}
      <CustomGeometry vertices={[a, b, c]} opacity={0.3} />
      <CustomGeometry vertices={[a, c, d]} opacity={0.3} />
      {/* right */}
      <CustomGeometry vertices={[e, b, c]} opacity={0.3} />
      <CustomGeometry vertices={[e, f, c]} opacity={0.3} />
      {/* left */}
      <CustomGeometry vertices={[e, a, d]} opacity={0.3} />
      <CustomGeometry vertices={[e, f, d]} opacity={0.3} />
      {/* triangle */}
      {/* front */}
      <CustomGeometry vertices={[a, b, e]} opacity={0.3} />
      {/* back */}
      <CustomGeometry vertices={[d, c, f]} opacity={0.3} />
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
