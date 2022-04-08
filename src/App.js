import React from "react";
import { Figure } from "./Figure";
import { CompFig } from "./CompFig";
import { Container } from "./components/new shapes/container";

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
  height1: 5,
  width1: 2,
  base1: 4,
  color1: "#9dfff7",
  height2: 3,
  width2: 2,
  base2: 6,
  color2: "#9dfff7",
  verticalDistanceA: 0, //fora
  verticalDistanceB: 0,
  horizontalDistanceA: 3,
  horizontalDistanceB: 0, //forb
  rotation: true,
  animate: false,
  visiblity: 0.4,
};

export const App = () => {
  return (
    <>
      <Figure />
      {/* <CompFig {...daimentions} /> */}
      {/* <Container /> */}
    </>
  );
};
//
