import React from "react";
import { Figure } from "./Figure";
import { CompFig } from "./CompFig";
import { Container } from "./components/new shapes/container";
import { CrossSaction2 } from "./components/new shapes/3d widget/crossectionWid";
import { CrossSection3D } from "./components/new shapes/cross-section/CrossSection";
import { Container2 } from "./components/new shapes/Container2";
import { SquarePyramid3D } from "./components/new shapes/Widgets/square/SquarePyramid3";
import { Rectangle } from "./basic/Rectangle";
import { ChartImp } from "./basic/graph/graph";

// const daimentions = {
//   height1: 5,
//   width1: 2,
//   base1: 4,
//   color1: "#9dfff7",
//   height2: 3,
//   width2: 2,
//   base2: 6,
//   color2: "#9dfff7",
//   verticalDistanceA: 0, //fora
//   verticalDistanceB: 1,
//   horizontalDistanceA: 1,
//   horizontalDistanceB: 0, //forb
//   rotation: false,
//   animate: false,
//   visiblity: 0.4,
// };

const daimentions = {
  height1: 6,
  width1: 4,
  base1: 2,
  color1: "#9dfff7",
  height2: 2,
  width2: 4,
  base2: 8,
  color2: "#9dfff7",
  verticalDistanceA: -5, //fora
  verticalDistanceB: 0,
  horizontalDistanceA: 2,
  horizontalDistanceB: 0, //forb
  rotation: false,
  animate: false,
  visiblity: 0.4,
};

export const App = () => {
  const data = {
    plane: "vertical",
    shape: "cone",
    opacity: 0.75,
    plane_color: "#42D540",
    shape_color: "#D8D8DF",
    cross_section_color: "#028500",
  };
  const pyramidProp = {
    triangle_base: 2,
    triangle_left_side: 2,
    triangle_right_side: 3,
    triangle_height: 4,
    rectangle_length: 5,
    prism_height: 6,
    triangle_type: "rightTriangularPrism",
    faces: [
      {
        id: 1,
        position: "front",
        color: "orange",
      },
      {
        id: 2,
        position: "back",
        color: "orange",
      },
      {
        id: 3,
        position: "bottom",
        color: "blue",
      },
      {
        id: 4,
        position: "left",
        color: "blue",
      },
      {
        id: 5,
        position: "right",
        color: "blue",
      },
      {
        id: 6,
        position: "top",
        color: "blue",
      },
    ],
    edges: [
      {
        id: 1,
        face: "front",
        position: "left",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 2,
        face: "front",
        position: "right",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 3,
        face: "front",
        position: "bottom",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 10,
        face: "front",
        position: "top",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 4,
        face: "back",
        position: "left",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 5,
        face: "back",
        position: "right",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 6,
        face: "back",
        position: "bottom",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 11,
        face: "back",
        position: "top",
        color: "red", //default color is gray
        label: "5 yd",
      },
      {
        id: 7,
        face: "right",
        position: "top",
        color: "blue", //default color is gray
        label: "5 yd",
      },
      {
        id: 8,
        face: "right",
        position: "bottom",
        color: "blue", //default color is gray
        label: "5 yd",
      },
      {
        id: 9,
        face: "left",
        position: "bottom",
        color: "blue", //default color is gray
        label: "5 yd",
      },
      {
        id: 9,
        face: "left",
        position: "top",
        color: "blue", //default color is gray
        label: "5 yd",
      },
    ],

    unit: "in",
    show_default_labels: false,
    altitude: {
      show_altitude: true,
      label: "12 yd",
      color: "red",
    },
    animation_sequences: [
      // { color: "green" },
      // { color: "blue" },

      { faces: [1], edges: [1, 2, 3, 4, 5, 6] }, //ids of faces and edges
      { faces: [2], edges: [1, 2, 3, 4, 5, 6] }, //ids of faces and edges
      { faces: [3], edges: [7, 8, 9] },
      { faces: [4], edges: [7, 8, 9] },
      { faces: [5], edges: [7, 8, 9] },
    ],
    show_animation: false,
  };

  const data2 = {
    height: 2,
    width: 2,
    height_label: "",
    width_label: "",
    unit: "in",
    height_highlight: "#ff7247",
    base_highlight: "#4983ff",
    fill: "#d5ffd0",
    outline: "#999999",
  };

  const ChartOptions = {
    options: {
      cellsize: 20,
      xMin: 0,
      yMin: 0,
      xMax: 10,
      yMax: 10,
      xInterval: 1,
      yInterval: 1,
    },
    margins: {
      top: 1,
      bottom: 1,
      left: 1,
      right: 1,
    },
    points: [
      {
        id: 0,
        x: 5,
        y: 5,
      },
    ],
  };

  return (
    <>
      {/* <Figure /> */}
      {/* <CompFig {...daimentions} /> */}
      {/* <Container2>
        <SquarePyramid3D {...pyramidProp} />
      </Container2> */}
      {/* <Container shape={"cylinder"} /> */}
      {/* <Container shape={"squarePyramid"} />/ */}
      {/* <Container shape={"triangularPyramid"} /> */}
      {/* <Container shape={"triangularPrism"} /> */}
      {/* <Container shape={"rectangularPrism"} /> */}
      {/* <Container shape={"sphare"} /> */}
      {/* <CrossSaction2 {...data} /> */}
      {/* <CrossSection3D {...data} /> */}
      <ChartImp ChartOptions={ChartOptions} />
    </>
  );
};
//
