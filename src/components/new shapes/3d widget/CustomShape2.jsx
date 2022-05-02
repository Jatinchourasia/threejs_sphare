import { OrbitControls } from "@react-three/drei";
import React from "react";
import { CustomGeometry } from "./CustomGeometry";
import { Line2 } from "./Line2";
import { DashedLine } from "./DashedLine";
import { Text3d } from "../../canvas/text";
import { Plane } from "./Plane";

export const CustomShape2 = ({ position, args, shape }) => {
  //   let shape==="rightTriangularPrism" = false;
  //   let shape = "rectangularPrism";
  const diff = 0.1;
  const sideDiff = 0.2;
  let height = args[0];
  let length = args[1];
  let base = args[2];
  let h = [
    position[0] + base + length,
    position[1] + height / 2,
    position[2] - base + length,
  ];
  let g = [
    position[0] + base - length,
    position[1] + height / 2,
    position[2] - base - length,
  ];
  if (shape === "squarePyramid") {
    base = length;
  }

  let a = [
    position[0] - base + length,
    position[1] - height / 2,
    position[2] + base + length,
  ];
  const b = [
    position[0] + base + length,
    position[1] - height / 2,
    position[2] - base + length,
  ];

  const c = [
    position[0] + base - length,
    position[1] - height / 2,
    position[2] - base - length,
  ];

  let d = [
    position[0] - base - length,
    position[1] - height / 2,
    position[2] + base - length,
  ];

  let e = [
    (position[0] - base + length + position[0] + base + length) / 2,
    position[1] + height / 2,
    (position[0] - base + length + position[0] + base + length) / 2,
  ];
  let f = [
    -(position[0] - base + length + position[0] + base + length) / 2,
    position[1] + height / 2,
    -(position[0] - base + length + position[0] + base + length) / 2,
  ];
  let centerFront = [
    (position[0] - base + length + position[0] + base + length) / 2,
    position[1] - height / 2,
    (position[0] - base + length + position[0] + base + length) / 2,
  ];
  const centerBack = [
    -(position[0] - base + length + position[0] + base + length) / 2,
    position[1] - height / 2,
    -(position[0] - base + length + position[0] + base + length) / 2,
  ];
  if (shape === "squarePyramid") {
    e = [0, position[1] + height / 2, 0];
    f = [0, position[1] + height / 2, 0];
    centerFront = [0, position[1], 0];
  }
  if (shape === "rightTriangularPrism" || shape === "rectangularPrism") {
    e = [
      position[0] - base + length,
      position[1] + height / 2,
      position[2] + base + length,
    ];
    f = [
      position[0] - base - length,
      position[1] + height / 2,
      position[2] + base - length,
    ];
  }

  return (
    <group>
      //height
      {shape === "rightTriangularPrism" ||
      shape === "rectangularPrism" ? null : (
        <>
          <DashedLine from={centerFront} to={e} />
          {/* angle */}
          <Line2
            start={[
              position[0] + 0.1,
              position[1] - height / 2,
              position[0] - 0.1,
            ]}
            end={[
              (position[0] - base + length + position[0] + base + length) / 2 +
                0.1,
              position[1] - height / 2 + 0.14,
              (position[0] - base + length + position[0] + base + length) / 2 -
                0.1,
            ]}
            color={"red"}
          />{" "}
          <Line2
            start={[position[0], position[1] - height / 2, position[0]]}
            end={[position[0], position[1] - height / 2 + 0.14, position[0]]}
            color={"blue"}
          />
          <Line2
            start={[
              (position[0] - base + length + position[0] + base + length) / 2 +
                0.1,
              position[1] - height / 2 + 0.14,
              position[0] / 2 - 0.1,
            ]}
            end={[position[0], position[1] - height / 2 + 0.14, position[0]]}
            color={"green"}
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
        end={shape === "rectangularPrism" ? g : f}
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
        end={shape === "rectangularPrism" ? h : e}
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
      {shape === "rectangularPrism" && (
        <>
          {/* top */}
          <Line2
            start={f}
            end={g}
            // color={"black"}
          />
          <Line2
            start={g}
            end={h}
            // color={"black"}
          />
          <Line2
            start={h}
            end={e}
            // color={"black"}
          />
          {/* top */}
          <Plane vertices={[e, f, g, h]} opacity={0.3} color="#1900ff" />
        </>
      )}
      {/* bottom */}
      <Plane vertices={[a, b, c, d]} opacity={0.3} color="#1900ff" />
      {/* right */}
      {/* left */}
      <Plane vertices={[e, a, d, f]} opacity={0.3} color="green" />
      {/* front and back */}
      {shape === "rectangularPrism" ? (
        <>
          <Plane vertices={[e, a, b, h]} opacity={0.3} color="green" />
          <Plane vertices={[f, d, c, g]} opacity={0.3} color="green" />
          {/* right */}
          <Plane vertices={[b, c, g, h]} opacity={0.3} color="green" />
        </>
      ) : (
        <>
          <CustomGeometry vertices={[a, b, e]} opacity={0.3} color="blue" />
          <CustomGeometry vertices={[d, c, f]} opacity={0.3} color="blue" />
          {/* right */}
          <CustomGeometry vertices={[e, b, c]} opacity={0.3} color="orange" />
          <CustomGeometry vertices={[e, f, c]} opacity={0.3} color="orange" />
        </>
      )}
      {shape === "triangularPrism" && (
        <Text3d
          position={[
            position[0] - base + length + diff - 2 * sideDiff + height / 4,
            position[1],
            position[2] + base + length + diff + 2 * sideDiff - height / 4,
          ]}
          scale={4}
          tex={"p"}
        />
      )}
      <Text3d
        position={[
          (position[0] - base + length + position[0] + base + length) / 2 +
            diff,
          position[1] - height / 2 - diff - diff,
          (position[0] - base + length + position[0] + base + length) / 2 +
            diff,
        ]}
        scale={4}
        tex={"b"}
      />
      <Text3d
        position={[
          -(position[2] - base + length + position[2] - base - length) / 2 +
            sideDiff,
          position[1] - height / 2,
          (position[2] - base + length + position[2] - base - length) / 2 -
            sideDiff,
        ]}
        scale={4}
        tex={"w"}
      />
      {shape === "rectangularPrism" ? (
        <Text3d
          position={[
            position[0] - base + length + diff - sideDiff,
            position[1],
            position[2] + base + length + diff + sideDiff,
          ]}
          scale={4}
          tex={"a"}
        />
      ) : (
        <>
          {shape === "rightTriangularPrism" && (
            <Text3d
              position={[
                position[0] - base + length + diff - sideDiff,
                position[1],
                position[2] + base + length + diff + sideDiff,
              ]}
              scale={4}
              tex={"h"}
            />
          )}
          <Text3d
            position={[
              (position[0] - base + length + position[0] + base + length) / 2 +
                diff +
                sideDiff,
              position[1],
              (position[0] - base + length + position[0] + base + length) / 2 +
                diff -
                sideDiff,
            ]}
            scale={4}
            tex={shape === "rightTriangularPrism" ? "p" : "h"}
          />
        </>
      )}
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
