import { OrbitControls } from "@react-three/drei";
import React from "react";
import { CustomGeometry } from "./CustomGeometry";
import { Line2 } from "./Line2";
import { DashedLine } from "./DashedLine";
import { Text3d } from "../../canvas/text";

export const CustomShape = ({ position, args }) => {
  let rightAngle = false;
  const diff = 0.1;
  const sideDiff = 0.2;

  let a = [
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

  let d = [
    position[0] - args[2] - args[1],
    position[1] - args[0] / 2,
    position[2] + args[2] - args[1],
  ];

  let e = [
    (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
    position[1] + args[0] / 2,
    (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
  ];
  let f = [
    -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
    position[1] + args[0] / 2,
    -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
  ];
  const centerFront = [
    (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
    position[1] - args[0] / 2,
    (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
  ];
  const centerBack = [
    -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
    position[1] - args[0] / 2,
    -(position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) / 2,
  ];

  if (rightAngle) {
    e = [
      position[0] - args[2] + args[1],
      position[1] + args[0] / 2,
      position[2] + args[2] + args[1],
    ];
    f = [
      position[0] - args[2] - args[1],
      position[1] + args[0] / 2,
      position[2] + args[2] - args[1],
    ];
  }

  return (
    <group>
      //height
      {rightAngle ? null : (
        <>
          <DashedLine from={centerFront} to={e} />
          {/* angle */}
          <Line2
            start={[
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2 +
                0.1,
              position[1] - args[0] / 2,
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2 -
                0.1,
            ]}
            end={[
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2 +
                0.1,
              position[1] - args[0] / 2 + 0.14,
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2 -
                0.1,
            ]}
            // color={"black"}
          />{" "}
          <Line2
            start={[
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2,
              position[1] - args[0] / 2,
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2,
            ]}
            end={[
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2,
              position[1] - args[0] / 2 + 0.14,
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2,
            ]}
            // color={"black"}
          />
          <Line2
            start={[
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2 +
                0.1,
              position[1] - args[0] / 2 + 0.14,
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2 -
                0.1,
            ]}
            end={[
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2,
              position[1] - args[0] / 2 + 0.14,
              (position[0] -
                args[2] +
                args[1] +
                position[0] +
                args[2] +
                args[1]) /
                2,
            ]}
            // color={"black"}
          />
        </>
      )}
      //bottom front
      <Line2
        start={a}
        end={e}
        // color={"blue"}
      />
      //left bottom
      <Line2
        start={c}
        end={f}
        // color={"red"}
      />
      //bottom back
      <Line2
        start={d}
        end={f}
        //  color={"teal"}
      />
      //right bottom
      <Line2
        start={b}
        end={e}
        // color={"green"}
      />
      //base
      <Line2
        start={a}
        end={b}
        // color={"blue"}
      />
      <Line2
        start={c}
        end={d}
        //  color={"red"}
      />
      <Line2
        start={b}
        end={c}
        // color={"green"}
      />
      <Line2
        start={d}
        end={a}
        // color={"teal"}
      />
      //topline
      <Line2
        start={e}
        end={f}
        // color={"black"}
      />
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
      {rightAngle ? (
        <Text3d
          position={[
            position[0] - args[2] + args[1] + diff - sideDiff,
            position[1],
            position[2] + args[2] + args[1] + diff + sideDiff,
          ]}
          scale={4}
          tex={"h"}
        />
      ) : (
        <Text3d
          position={[
            position[0] - args[2] + args[1] + diff - 2 * sideDiff + args[0] / 4,
            position[1],
            position[2] + args[2] + args[1] + diff + 2 * sideDiff - args[0] / 4,
          ]}
          scale={4}
          tex={"p"}
        />
      )}
      <Text3d
        position={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            diff,
          position[1] - args[0] / 2 - diff - diff,
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            diff,
        ]}
        scale={4}
        tex={"b"}
      />
      <Text3d
        position={[
          -(position[2] - args[2] + args[1] + position[2] - args[2] - args[1]) /
            2 +
            sideDiff,
          position[1] - args[0] / 2,
          (position[2] - args[2] + args[1] + position[2] - args[2] - args[1]) /
            2 -
            sideDiff,
        ]}
        scale={4}
        tex={"w"}
      />
      <Text3d
        position={[
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            diff +
            sideDiff,
          position[1],
          (position[0] - args[2] + args[1] + position[0] + args[2] + args[1]) /
            2 +
            diff -
            sideDiff,
        ]}
        scale={4}
        tex={rightAngle ? "p" : "h"}
      />
      <OrbitControls
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.5}
      />
    </group>
  );
};
