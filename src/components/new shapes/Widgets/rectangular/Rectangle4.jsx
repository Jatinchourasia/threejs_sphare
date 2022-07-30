import { OrbitControls } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";
import { CustomGeometry } from "./../../3d widget/CustomGeometry";
import { Line2 } from "./../../3d widget/Line2";
import { DashedLine } from "./../../3d widget/DashedLine";
import { Text3d } from "./../../../canvas/text";
import { Plane } from "./../../3d widget/Plane";
import { useFrame } from "@react-three/fiber";

export const Rectangle3D = ({
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
  const [config, setConfig] = useState({
    topColor: "",
    bottomColor: "",
    leftColor: "",
    rightColor: "",
    frontColor: "",
    backColor: "",
  });

  const [edge, setEdge] = useState({
    frontLeft: "",
    frontRight: "",
    frontBottom: "",
    frontTop: "",
    backLeft: "",
    backRight: "",
    backBottom: "",
    backTop: "",
    rightTop: "",
    rightBottom: "",
    leftTop: "",
    leftBottom: "",
  });

  let configuration = {
    faceColor: {
      topColor: "",
      bottomColor: "",
      leftColor: "",
      rightColor: "",
      frontColor: "",
      backColor: "",
    },
    edgesConfig: {
      frontLeft: {
        color: "gray",
        label: "",
      },
      frontRight: {
        color: "gray",
        label: "",
      },
      frontBottom: {
        color: "gray",
        label: "",
      },
      frontTop: {
        color: "gray",
        label: "",
      },
      backLeft: {
        color: "gray",
        label: "",
      },
      backRight: {
        color: "gray",
        label: "",
      },
      backBottom: {
        color: "gray",
        label: "",
      },
      backTop: {
        color: "gray",
        label: "",
      },
      rightTop: {
        color: "gray",
        label: "",
      },
      rightBottom: {
        color: "gray",
        label: "",
      },
      leftBottom: {
        color: "gray",
        label: "",
      },
      leftTop: {
        color: "gray",
        label: "",
      },
    },
  };
  let { faceColor, edgesConfig } = configuration;

  // let bottomColor = "blue";
  // let leftColor = "green";
  // let rightColor = "orange";
  // let frontColor = "orange";
  // let backColor = "orange";

  const faceCheck = (data, property) => {
    switch (data.position) {
      case "front":
        property.frontColor = data.color;
        break;
      case "back":
        property.backColor = data.color;
        break;
      case "right":
        property.rightColor = data.color;
        break;
      case "left":
        property.leftColor = data.color;
        break;
      case "top":
        property.topColor = data.color;
        break;
      case "bottom":
        property.bottomColor = data.color;
        break;
    }
  };

  const edgeCheck = (data, property) => {
    switch (data.face) {
      case "front": {
        switch (data.position) {
          case "left":
            property.frontLeft.color = data.color;
            property.frontLeft.label = data.label;
            break;
          case "right":
            property.frontRight.color = data.color;
            property.frontRight.label = data.label;
            break;
          case "top":
            property.frontTop.color = data.color;
            property.frontTop.label = data.label;
            break;
          case "bottom":
            property.frontBottom.color = data.color;
            property.frontBottom.label = data.label;
            break;
        }
      }

      case "back": {
        switch (data.position) {
          case "left":
            property.backLeft.color = data.color;
            property.backLeft.label = data.label;
            break;
          case "right":
            property.backRight.color = data.color;
            property.backRight.label = data.label;
            break;
          case "bottom":
            property.backBottom.color = data.color;
            property.backBottom.label = data.label;
            break;
          case "top":
            property.backTop.color = data.color;
            property.backTop.label = data.label;
            break;
        }
      }
      case "right": {
        switch (data.position) {
          case "left":
            property.frontRight.color = data.color;
            property.frontRight.label = data.label;
            break;
          case "right":
            property.backRight.color = data.color;
            property.backRight.label = data.label;
            break;
          case "bottom":
            property.rightBottom.color = data.color;
            property.rightBottom.label = data.label;
            break;
          case "top":
            property.rightTop.color = data.color;
            property.rightTop.label = data.label;
            break;
        }
      }
      case "left": {
        switch (data.position) {
          case "left":
            property.backLeft.color = data.color;
            property.backLeft.label = data.label;
            break;
          case "right":
            property.frontLeft.color = data.color;
            property.frontLeft.label = data.label;
            break;
          case "bottom":
            property.leftBottom.color = data.color;
            property.leftBottom.label = data.label;
            break;
          case "top":
            property.leftTop.color = data.color;
            property.leftTop.label = data.label;
            break;
        }
      }
    }
  };

  faces.map((data) => {
    faceCheck(data, faceColor);
  });

  edges.map((data) => {
    edgeCheck(data, edgesConfig);
  });

  function getColors(data, id) {
    return data.find((val) => {
      return id == val.id;
    });
  }

  useEffect(() => {
    if (show_animation) {
      (async function main() {
        for (let i = 0; i < animation_sequences.length; i++) {
          // console.log(animation_sequences[i]);

          let faceColors = {
            topColor: "",
            bottomColor: "",
            leftColor: "",
            rightColor: "",
            frontColor: "",
            backColor: "",
          };
          let edgesConfigs = {
            frontLeft: {
              color: "gray",
              label: "",
            },
            frontRight: {
              color: "gray",
              label: "",
            },
            frontBottom: {
              color: "gray",
              label: "",
            },
            frontTop: {
              color: "gray",
              label: "",
            },
            backLeft: {
              color: "gray",
              label: "",
            },
            backRight: {
              color: "gray",
              label: "",
            },
            backBottom: {
              color: "gray",
              label: "",
            },
            backTop: {
              color: "gray",
              label: "",
            },
            rightTop: {
              color: "gray",
              label: "",
            },
            rightBottom: {
              color: "gray",
              label: "",
            },
            leftBottom: {
              color: "gray",
              label: "",
            },
            leftTop: {
              color: "gray",
              label: "",
            },
          };

          setConfig({
            topColor: "gray",
            bottomColor: "gray",
            leftColor: "gray",
            rightColor: "gray",
            frontColor: "gray",
            backColor: "gray",
          });
          setEdge({
            frontLeft: "gray",
            frontRight: "gray",
            frontBottom: "gray",
            frontTop: "gray",
            backLeft: "gray",
            backRight: "gray",
            backBottom: "gray",
            backTop: "gray",
            rightTop: "gray",
            rightBottom: "gray",
            leftTop: "gray",
            leftBottom: "gray",
          });
          await new Promise((resolve) => setTimeout(resolve, 1000));

          animation_sequences[i].faces.map((data) => {
            const faceData = getColors(faces, data);
            // console.log(faceData.position);
            faceCheck(faceData, faceColors);
          });
          animation_sequences[i].edges.map((data) => {
            const edgeData = getColors(edges, data);
            // console.log(edgeData);
            edgeCheck(edgeData, edgesConfigs);
            // console.log(faceData.position);
            // faceCheck(faceData, faceColors);
          });
          console.log(edgesConfigs.frontLeft.color);
          setEdge({
            frontLeft: edgesConfigs.frontLeft.color
              ? edgesConfigs.frontLeft.color
              : "gray",
            frontRight: edgesConfigs.frontRight.color
              ? edgesConfigs.frontRight.color
              : "gray",
            frontBottom: edgesConfigs.frontBottom.color
              ? edgesConfigs.frontBottom.color
              : "gray",
            frontTop: edgesConfigs.frontTop.color
              ? edgesConfigs.frontTop.color
              : "gray",
            backLeft: edgesConfigs.backLeft.color
              ? edgesConfigs.backLeft.color
              : "gray",
            backRight: edgesConfigs.backRight.color
              ? edgesConfigs.backRight.color
              : "gray",
            backBottom: edgesConfigs.backBottom.color
              ? edgesConfigs.backBottom.color
              : "gray",
            backTop: edgesConfigs.backTop.color
              ? edgesConfigs.backTop.color
              : "gray",
            rightTop: edgesConfigs.rightTop.color
              ? edgesConfigs.rightTop.color
              : "gray",
            rightBottom: edgesConfigs.rightBottom.color
              ? edgesConfigs.rightBottom.color
              : "gray",
            leftTop: edgesConfigs.leftTop.color
              ? edgesConfigs.leftTop.color
              : "gray",
            leftBottom: edgesConfigs.leftBottom.color
              ? edgesConfigs.leftBottom.color
              : "gray",
          });
          console.log(edge);

          setConfig({
            topColor: faceColors.topColor ? faceColors.topColor : "gray",
            bottomColor: faceColors.bottomColor
              ? faceColors.bottomColor
              : "gray",
            leftColor: faceColors.leftColor ? faceColors.leftColor : "gray",
            rightColor: faceColors.rightColor ? faceColors.rightColor : "gray",
            frontColor: faceColors.frontColor ? faceColors.frontColor : "gray",
            backColor: faceColors.backColor ? faceColors.backColor : "gray",
          });
          console.log(faceColors);

          await new Promise((resolve) => setTimeout(resolve, 2000));

          if (i === animation_sequences.length - 1) {
            i = i - animation_sequences.length;
          }
        }
      })();
    }
  }, []);

  const args = [1, 2, 2];
  const position = [0, 0, 0];
  const diff = 0.1;
  const sideDiff = 0.2;
  let height = args[0] * 2.5;
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

  return (
    <group>
      <Line2
        start={a}
        end={e}
        color={show_animation ? edge.frontLeft : edgesConfig.frontLeft.color}
      />
      <Line2
        start={c}
        end={g}
        color={show_animation ? edge.backRight : edgesConfig.backRight.color}
      />
      <Line2
        start={d}
        end={f}
        color={show_animation ? edge.backLeft : edgesConfig.backLeft.color}
      />
      <Line2
        start={b}
        end={h}
        color={show_animation ? edge.frontRight : edgesConfig.frontRight.color}
      />
      <Line2
        start={a}
        end={b}
        color={
          show_animation ? edge.frontBottom : edgesConfig.frontBottom.color
        }
      />
      <Line2
        start={c}
        end={d}
        color={show_animation ? edge.backBottom : edgesConfig.backBottom.color}
      />
      <Line2
        start={b}
        end={c}
        color={
          show_animation ? edge.rightBottom : edgesConfig.rightBottom.color
        }
      />
      <Line2
        start={d}
        end={a}
        color={show_animation ? edge.leftBottom : edgesConfig.leftBottom.color}
      />
      //topline
      <Line2
        start={e}
        end={f}
        color={show_animation ? edge.leftTop : edgesConfig.leftTop.color}
      />
      <Line2
        start={f}
        end={g}
        color={show_animation ? edge.backTop : edgesConfig.backTop.color}
      />
      <Line2
        start={g}
        end={h}
        color={show_animation ? edge.rightTop : edgesConfig.rightTop.color}
      />
      <Line2
        start={h}
        end={e}
        color={show_animation ? edge.frontTop : edgesConfig.frontTop.color}
      />
      //sides
      {/* rectangles */}
      {/* bottom */}
      {/* front and back */}
      {/* <CustomGeometry
        triangle={true}
        vertices={[a, b, e]}
        opacity={0.3}
        color={
          show_animation
            ? config.frontColor
            : faceColor.frontColor
            ? faceColor.frontColor
            : "gray"
        }
      /> */}
      {/* <CustomGeometry
        triangle={true}
        vertices={[d, c, f]}
        opacity={0.3}
        color={
          show_animation
            ? config.backColor
            : faceColor.backColor
            ? faceColor.backColor
            : "gray"
        }
      /> */}
      <Plane
        vertices={[e, a, b, h]}
        opacity={0.3}
        color={
          show_animation
            ? config.frontColor
            : faceColor.frontColor
            ? faceColor.frontColor
            : "gray"
        }
      />
      <Plane
        vertices={[f, d, c, g]}
        opacity={0.3}
        color={
          show_animation
            ? config.backColor
            : faceColor.backColor
            ? faceColor.backColor
            : "gray"
        }
      />
      <Plane
        vertices={[a, b, c, d]}
        opacity={0.3}
        color={
          show_animation
            ? config.bottomColor
            : faceColor.bottomColor
            ? faceColor.bottomColor
            : "gray"
        }
      />
      {/* <Plane vertices={[a, b, c, d]} opacity={0.3} color={color} /> */}
      {/* right */}
      {/* left */}
      <Plane
        vertices={[e, a, d, f]}
        opacity={0.3}
        color={
          show_animation
            ? config.leftColor
            : faceColor.leftColor
            ? faceColor.leftColor
            : "gray"
        }
      />
      <Plane
        vertices={[b, h, g, c]}
        opacity={0.3}
        color={
          show_animation
            ? config.rightColor
            : faceColor.rightColor
            ? faceColor.rightColor
            : "gray"
        }
      />
      <Plane
        vertices={[e, f, g, h]}
        opacity={0.3}
        color={
          show_animation
            ? config.TopColor
            : faceColor.TopColor
            ? faceColor.TopColor
            : "gray"
        }
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
        tex={`${triangle_base} ${unit}`}
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
        tex={`${rectangle_length} ${unit}`}
      />
      <Text3d
        position={[
          position[0] - base + length + diff - sideDiff,
          position[1],
          position[2] + base + length + diff + sideDiff,
        ]}
        scale={4}
        tex={`${triangle_height} ${unit}`}
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
