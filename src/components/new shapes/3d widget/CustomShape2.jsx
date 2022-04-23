import { OrbitControls } from "@react-three/drei";
import React from "react";
import { CustomGeometry } from "./CustomGeometry";
import { Line2 } from "./Line2";
import { DashedLine } from "./DashedLine";
import { Text3d } from "../../canvas/text";

export const CustomShape2 = ({ position, args, shape }) => {
  //   let shape==="rightTriangularPrism" = false;
  const diff = 0.1;
  const sideDiff = 0.2;
  let height = args[0];
  let width = args[1];
  let base = args[2];

  if (shape === "squarePyramid") {
    base = width;
  }
  let a = [
    position[0] - base + width,
    position[1] - height / 2,
    position[2] + base + width,
  ];
  const b = [
    position[0] + base + width,
    position[1] - height / 2,
    position[2] - base + width,
  ];

  const c = [
    position[0] + base - width,
    position[1] - height / 2,
    position[2] - base - width,
  ];

  let d = [
    position[0] - base - width,
    position[1] - height / 2,
    position[2] + base - width,
  ];

  let e = [
    (position[0] - base + width + position[0] + base + width) / 2,
    position[1] + height / 2,
    (position[0] - base + width + position[0] + base + width) / 2,
  ];
  let f = [
    -(position[0] - base + width + position[0] + base + width) / 2,
    position[1] + height / 2,
    -(position[0] - base + width + position[0] + base + width) / 2,
  ];
  let centerFront = [
    (position[0] - base + width + position[0] + base + width) / 2,
    position[1] - height / 2,
    (position[0] - base + width + position[0] + base + width) / 2,
  ];
  const centerBack = [
    -(position[0] - base + width + position[0] + base + width) / 2,
    position[1] - height / 2,
    -(position[0] - base + width + position[0] + base + width) / 2,
  ];
  if (shape === "squarePyramid") {
    e = [0, position[1] + height / 2, 0];
    f = [0, position[1] + height / 2, 0];
    centerFront = [0, position[1], 0];
  }
  if (shape === "rightTriangularPrism") {
    e = [
      position[0] - base + width,
      position[1] + height / 2,
      position[2] + base + width,
    ];
    f = [
      position[0] - base - width,
      position[1] + height / 2,
      position[2] + base - width,
    ];
  }

  return (
    <group>
      //height
      {shape === "rightTriangularPrism" ? null : (
        <>
          <DashedLine from={centerFront} to={e} />
          {/* angle */}
          <Line2
            start={[
              (position[0] - base + width + position[0] + base + width) / 2 +
                0.1,
              position[1] - height / 2,
              (position[0] - base + width + position[0] + base + width) / 2 -
                0.1,
            ]}
            end={[
              (position[0] - base + width + position[0] + base + width) / 2 +
                0.1,
              position[1] - height / 2 + 0.14,
              (position[0] - base + width + position[0] + base + width) / 2 -
                0.1,
            ]}
            // color={"black"}
          />{" "}
          <Line2
            start={[
              (position[0] - base + width + position[0] + base + width) / 2,
              position[1] - height / 2,
              (position[0] - base + width + position[0] + base + width) / 2,
            ]}
            end={[
              (position[0] - base + width + position[0] + base + width) / 2,
              position[1] - height / 2 + 0.14,
              (position[0] - base + width + position[0] + base + width) / 2,
            ]}
            // color={"black"}
          />
          <Line2
            start={[
              (position[0] - base + width + position[0] + base + width) / 2 +
                0.1,
              position[1] - height / 2 + 0.14,
              (position[0] - base + width + position[0] + base + width) / 2 -
                0.1,
            ]}
            end={[
              (position[0] - base + width + position[0] + base + width) / 2,
              position[1] - height / 2 + 0.14,
              (position[0] - base + width + position[0] + base + width) / 2,
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
      {shape === "rightTriangularPrism" ? (
        <Text3d
          position={[
            position[0] - base + width + diff - sideDiff,
            position[1],
            position[2] + base + width + diff + sideDiff,
          ]}
          scale={4}
          tex={"h"}
        />
      ) : (
        <Text3d
          position={[
            position[0] - base + width + diff - 2 * sideDiff + height / 4,
            position[1],
            position[2] + base + width + diff + 2 * sideDiff - height / 4,
          ]}
          scale={4}
          tex={"p"}
        />
      )}
      <Text3d
        position={[
          (position[0] - base + width + position[0] + base + width) / 2 + diff,
          position[1] - height / 2 - diff - diff,
          (position[0] - base + width + position[0] + base + width) / 2 + diff,
        ]}
        scale={4}
        tex={"b"}
      />
      <Text3d
        position={[
          -(position[2] - base + width + position[2] - base - width) / 2 +
            sideDiff,
          position[1] - height / 2,
          (position[2] - base + width + position[2] - base - width) / 2 -
            sideDiff,
        ]}
        scale={4}
        tex={"w"}
      />
      <Text3d
        position={[
          (position[0] - base + width + position[0] + base + width) / 2 +
            diff +
            sideDiff,
          position[1],
          (position[0] - base + width + position[0] + base + width) / 2 +
            diff -
            sideDiff,
        ]}
        scale={4}
        tex={shape === "rightTriangularPrism" ? "p" : "h"}
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
