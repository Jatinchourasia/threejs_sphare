import React from "react";
import { Figure } from "./Figure";
import { CompFig } from "./CompFig";
import { Container } from "./components/new shapes/container";
import { CrossSaction2 } from "./components/new shapes/3d widget/crossectionWid";
import { CrossSection3D } from "./components/new shapes/cross-section/CrossSection";

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

  return (
    <>
      {/* <Figure /> */}
      {/* <CompFig {...daimentions} /> */}
      <Container />
      {/* <Container shape={"cylinder"} /> */}
      {/* <Container shape={"squarePyramid"} />/ */}
      {/* <Container shape={"triangularPyramid"} /> */}
      {/* <Container shape={"triangularPrism"} /> */}
      {/* <Container shape={"rectangularPrism"} /> */}
      {/* <Container shape={"sphare"} /> */}
      {/* <CrossSaction2 {...data} /> */}
      {/* <CrossSection3D {...data} /> */}
    </>
  );
};
//
