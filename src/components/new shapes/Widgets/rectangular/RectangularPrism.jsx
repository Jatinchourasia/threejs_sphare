import { OrbitControls } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import { CustomGeometry } from "../../3d widget/CustomGeometry";
import { Line2 } from "../../3d widget/Line2";
import { DashedLine } from "../../3d widget/DashedLine";
import { Text3d } from "../../../canvas/text";
import { Plane } from "../../3d widget/Plane";
import { useFrame } from "@react-three/fiber";

export const RectangularPrism3D = ({
  triangle_base,
  triangle_left_side,
  triangle_right_side,
  triangle_height,
  rectangle_length,
  prism_height,
  faces,
  edges,
  unit,
  show_default_labels,
  animation_sequences,
  show_animation,
  altitude,
  triangle_type,
}) => {
  //    colors
  let configuration = {
    faceColor: {
      bottomColor: "",
      TopColor: "",
      topColor: "",
      leftColor: "",
      rightColor: "",
      frontColor: "",
      backColor: "",
    },
    edgesConfig: {
      frontLeft: {
        color: "gray",
        label: "",
        show_label: true,
      },
      frontRight: {
        color: "gray",
        label: "",
        show_label: true,
      },
      frontBottom: {
        color: "gray",
        label: "",
        show_label: true,
      },
      frontTop: {
        color: "gray",
        label: "",
        show_label: true,
      },
      backLeft: {
        color: "gray",
        label: "",
        show_label: true,
      },
      backRight: {
        color: "gray",
        label: "",
        show_label: true,
      },
      backBottom: {
        color: "gray",
        label: "",
        show_label: true,
      },
      backTop: {
        color: "gray",
        label: "",
        show_label: true,
      },
      rightTop: {
        color: "gray",
        label: "",
        show_label: true,
      },
      rightBottom: {
        color: "gray",
        label: "",
        show_label: true,
      },
      leftBottom: {
        color: "gray",
        label: "",
        show_label: true,
      },
      leftTop: {
        color: "gray",
        label: "",
        show_label: true,
      },
    },
  };
  let { faceColor, edgesConfig } = configuration;

  // let bottomColor = "blue";
  // let leftColor = "green";
  // let rightColor = "orange";
  // let frontColor = "orange";
  // let backColor = "orange";

  faces.map((data) => {
    switch (data.position) {
      case "front":
        faceColor.frontColor = data.color;
        break;
      case "back":
        faceColor.backColor = data.color;
        break;
      case "right":
        faceColor.rightColor = data.color;
        break;
      case "left":
        faceColor.leftColor = data.color;
        break;
      case "bottom":
        faceColor.bottomColor = data.color;
        break;
    }
  });

  edges.map((data) => {
    switch (data.face) {
      case "front": {
        switch (data.position) {
          case "left":
            edgesConfig.frontLeft.color = data.color;
            edgesConfig.frontLeft.label = data.label.text;
            edgesConfig.frontLeft.show_label = data.label.show_label;
            break;
          case "right":
            edgesConfig.frontRight.color = data.color;
            edgesConfig.frontRight.label = data.label.text;
            edgesConfig.frontRight.show_label = data.label.show_label;
            break;
          case "bottom":
            edgesConfig.frontBottom.color = data.color;
            edgesConfig.frontBottom.label = data.label.text;
            edgesConfig.frontBottom.show_label = data.label.show_label;
            break;
        }
      }

      case "back": {
        switch (data.position) {
          case "left":
            edgesConfig.backLeft.color = data.color;
            edgesConfig.backLeft.label = data.label.text;
            edgesConfig.backLeft.show_label = data.label.show_label;
            break;
          case "right":
            edgesConfig.backRight.color = data.color;
            edgesConfig.backRight.label = data.label.text;
            edgesConfig.backRight.show_label = data.label.show_label;
            break;
          case "bottom":
            edgesConfig.backBottom.color = data.color;
            edgesConfig.backBottom.label = data.label.text;
            edgesConfig.backBottom.show_label = data.label.show_label;
            break;
        }
      }
      case "right": {
        switch (data.position) {
          case "left":
            edgesConfig.frontRight.color = data.color;
            edgesConfig.frontRight.label = data.label.text;
            edgesConfig.frontRight.show_label = data.label.show_label;
            break;
          case "right":
            edgesConfig.backRight.color = data.color;
            edgesConfig.backRight.label = data.label.text;
            edgesConfig.backRight.show_label = data.label.show_label;
            break;
          case "bottom":
            edgesConfig.rightBottom.color = data.color;
            edgesConfig.rightBottom.label = data.label.text;
            edgesConfig.rightBottom.show_label = data.label.show_label;
            break;
          case "top":
            edgesConfig.rightTop.color = data.color;
            edgesConfig.rightTop.label = data.label.text;
            edgesConfig.rightTop.show_label = data.label.show_label;
            break;
        }
      }
      case "left": {
        switch (data.position) {
          case "left":
            edgesConfig.backLeft.color = data.color;
            edgesConfig.backLeft.label = data.label.text;
            edgesConfig.backLeft.show_label = data.label.show_label;
            break;
          case "right":
            edgesConfig.frontLeft.color = data.color;
            edgesConfig.frontLeft.label = data.label.text;
            edgesConfig.frontLeft.show_label = data.label.show_label;
            break;
          case "bottom":
            edgesConfig.leftBottom.color = data.color;
            edgesConfig.leftBottom.label = data.label.text;
            edgesConfig.leftBottom.show_label = data.label.show_label;
            break;
          case "top":
            edgesConfig.rightTop.color = data.color;
            edgesConfig.rightTop.label = data.label.text;
            edgesConfig.rightTop.show_label = data.label.show_label;
            break;
        }
      }
    }
  });

  console.log(configuration);

  const args = [2, 1, 1];
  const position = [0, 0, 0];
  // let triangle_type = "triangularPrism";
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
    position[0] - base + length,
    position[1] + height / 2,
    position[2] + base + length,
  ];
  let f = [
    position[0] - base - length,
    position[1] + height / 2,
    position[2] + base - length,
  ];
  let centerFront = [
    (position[0] - base + length + position[0] + base + length) / 2,
    position[1] - height / 2,
    (position[0] - base + length + position[0] + base + length) / 2,
  ];
  // const centerBack = [
  //   -(position[0] - base + length + position[0] + base + length) / 2,
  //   position[1] - height / 2,
  //   -(position[0] - base + length + position[0] + base + length) / 2,
  // ];

  return (
    <group>
      //height
      <Line2 start={a} end={e} color={edgesConfig.frontLeft.color} />
      <Line2 start={d} end={f} color={edgesConfig.backLeft.color} />
      <Line2 start={a} end={b} color={edgesConfig.frontBottom.color} />
      <Line2 start={c} end={d} color={edgesConfig.backBottom.color} />
      <Line2 start={b} end={c} color={edgesConfig.rightBottom.color} />
      <Line2 start={d} end={a} color={edgesConfig.leftBottom.color} />
      <Line2 start={e} end={f} color={edgesConfig.rightTop.color} />
      <Line2 start={b} end={h} color={edgesConfig.frontRight.color} />
      <Line2 start={c} end={g} color={edgesConfig.backRight.color} />
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
      //sides
      {/* top */}
      <Plane vertices={[e, f, g, h]} opacity={0.3} color="#1900ff" />
      {/* front and back */}
      <Plane vertices={[e, a, b, h]} opacity={0.3} color="green" />
      <Plane vertices={[f, d, c, g]} opacity={0.3} color="green" />
      {/* right */}
      <Plane vertices={[b, c, g, h]} opacity={0.3} color="green" />
      {/* bottom */}
      <Plane
        vertices={[a, b, c, d]}
        opacity={0.3}
        color={faceColor.bottomColor ? faceColor.bottomColor : "gray"}
      />
      {/* left */}
      <Plane
        vertices={[e, a, d, f]}
        opacity={0.3}
        color={faceColor.leftColor ? faceColor.leftColor : "gray"}
      />
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
      <Text3d
        position={[
          position[0] - base + length + diff - sideDiff,
          position[1],
          position[2] + base + length + diff + sideDiff,
        ]}
        scale={4}
        tex={"a"}
      />
      <>
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
          tex={"h"}
        />
      </>
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
