import { OrbitControls } from "@react-three/drei";
import React, { useRef, useEffect, useState } from "react";
import { CustomGeometry } from "./../../3d widget/CustomGeometry";
import { Line2 } from "./../../3d widget/Line2";
import { DashedLine } from "./../../3d widget/DashedLine";
import { Text3d } from "./../../../canvas/text";
import { Plane } from "./../../3d widget/Plane";
import { useFrame } from "@react-three/fiber";

export const TriangularPrism3D = ({
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
    bottomColor: "",
    leftColor: "",
    rightColor: "",
    frontColor: "",
    backColor: "",
  });
  // const [color, setColor] = useState("red");
  // let show_animation = true;
  let flag = true;
  let dis = 0;

  let configuration = {
    faceColor: {
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
      case "bottom":
        property.bottomColor = data.color;
        break;
    }
  };

  faces.map((data) => {
    faceCheck(data, faceColor);
    // switch (data.position) {
    //   case "front":
    //     faceColor.frontColor = data.color;
    //     break;
    //   case "back":
    //     faceColor.backColor = data.color;
    //     break;
    //   case "right":
    //     faceColor.rightColor = data.color;
    //     break;
    //   case "left":
    //     faceColor.leftColor = data.color;
    //     break;
    //   case "bottom":
    //     faceColor.bottomColor = data.color;
    //     break;
    // }
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
            bottomColor: "",
            leftColor: "",
            rightColor: "",
            frontColor: "",
            backColor: "",
          };

          setConfig({
            bottomColor: "gray",
            leftColor: "gray",
            rightColor: "gray",
            frontColor: "gray",
            backColor: "gray",
          });
          await new Promise((resolve) => setTimeout(resolve, 1000));

          animation_sequences[i].faces.map((data) => {
            const faceData = getColors(faces, data);
            // console.log(faceData.position);
            faceCheck(faceData, faceColors);

            // switch (faceData.position) {
            //   case "front":
            //     faceColors.frontColor = faceData.color;
            //     break;
            //   case "back":
            //     faceColors.backColor = faceData.color;
            //     break;
            //   case "right":
            //     faceColors.rightColor = faceData.color;
            //     break;
            //   case "left":
            //     faceColors.leftColor = faceData.color;
            //     break;
            //   case "bottom":
            //     faceColors.bottomColor = faceData.color;
            //     break;
            // }
          });

          setConfig({
            bottomColor: faceColors.bottomColor
              ? faceColors.bottomColor
              : "gray",
            leftColor: faceColors.leftColor ? faceColors.leftColor : "gray",
            rightColor: faceColors.rightColor ? faceColors.rightColor : "gray",
            frontColor: faceColors.frontColor ? faceColors.frontColor : "gray",
            backColor: faceColors.backColor ? faceColors.backColor : "gray",
          });
          // console.log(faceColors);

          await new Promise((resolve) => setTimeout(resolve, 2000));

          if (i === animation_sequences.length - 1) {
            i = i - animation_sequences.length;
          }
        }
      })();
    }
  }, []);

  const args = [2, 1, 1];
  const position = [0, 0, 0];
  const diff = 0.1;
  const sideDiff = 0.2;
  let height = args[0];
  let length = args[1];
  let base = args[2];

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
  // const centerBack = [
  //   -(position[0] - base + length + position[0] + base + length) / 2,
  //   position[1] - height / 2,
  //   -(position[0] - base + length + position[0] + base + length) / 2,
  // ];

  if (triangle_type === "rightTriangularPrism") {
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
      {triangle_type === "rightTriangularPrism"
        ? null
        : altitude.show_altitude && (
            <>
              <DashedLine
                from={centerFront}
                to={e}
                color={altitude.color ? altitude.color : "black"}
              />
              {/* angle */}
              <Line2
                start={[
                  (position[0] - base + length + position[0] + base + length) /
                    2 +
                    0.1,

                  position[1] - height / 2,

                  (position[0] - base + length + position[0] + base + length) /
                    2 -
                    0.1,
                ]}
                end={[
                  (position[0] - base + length + position[0] + base + length) /
                    2 +
                    0.1,

                  position[1] - height / 2 + 0.14,

                  (position[0] - base + length + position[0] + base + length) /
                    2 -
                    0.1,
                ]}
                color={altitude.color ? altitude.color : "black"}
              />{" "}
              <Line2
                start={[
                  (position[0] - base + length + position[0] + base + length) /
                    2,

                  position[1] - height / 2,

                  (position[0] - base + length + position[0] + base + length) /
                    2,
                ]}
                end={[
                  (position[0] - base + length + position[0] + base + length) /
                    2,

                  position[1] - height / 2 + 0.14,

                  (position[0] - base + length + position[0] + base + length) /
                    2,
                ]}
                color={altitude.color ? altitude.color : "black"}
              />
              <Line2
                start={[
                  (position[0] - base + length + position[0] + base + length) /
                    2 +
                    0.1,

                  position[1] - height / 2 + 0.14,

                  (position[0] - base + length + position[0] + base + length) /
                    2 -
                    0.1,
                ]}
                end={[
                  (position[0] - base + length + position[0] + base + length) /
                    2,

                  position[1] - height / 2 + 0.14,

                  (position[0] - base + length + position[0] + base + length) /
                    2,
                ]}
                color={altitude.color ? altitude.color : "black"}
              />
            </>
          )}
      <Line2 start={a} end={e} color={edgesConfig.frontLeft.color} />
      <Line2 start={c} end={f} color={edgesConfig.backRight.color} />
      <Line2 start={d} end={f} color={edgesConfig.backLeft.color} />
      <Line2 start={b} end={e} color={edgesConfig.frontRight.color} />
      <Line2 start={a} end={b} color={edgesConfig.frontBottom.color} />
      <Line2 start={c} end={d} color={edgesConfig.backBottom.color} />
      <Line2 start={b} end={c} color={edgesConfig.rightBottom.color} />
      <Line2 start={d} end={a} color={edgesConfig.leftBottom.color} />
      //topline
      <Line2 start={e} end={f} color={edgesConfig.rightTop.color} />
      //sides
      {/* rectangles */}
      {/* bottom */}
      {/* front and back */}
      <CustomGeometry
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
      />
      <CustomGeometry
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
        vertices={[e, b, c, f]}
        opacity={0.3}
        color={
          show_animation
            ? config.rightColor
            : faceColor.rightColor
            ? faceColor.rightColor
            : "gray"
        }
      />
      {/* <CustomGeometry vertices={[e, b, c]} opacity={0.3} color="orange" />
      <CustomGeometry vertices={[e, f, c]} opacity={0.3} color="orange" /> */}
      {triangle_type === "triangularPrism" && (
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
      <>
        {triangle_type === "rightTriangularPrism" && (
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
          tex={triangle_type === "rightTriangularPrism" ? "p" : "h"}
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
