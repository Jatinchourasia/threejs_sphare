import React from "react";
import { Figure } from "./Figure";
import { CompFig } from "./CompFig";

const daimentions = {
  height1: 1,
  width1: 1,
  base1: 1,
  color1: "#9dfff7",
  height2: 1,
  width2: 1,
  base2: 1,
  color2: "#9dfff7",
  verticalDistance: 1,
  horizontalDistance: 1,
  rotation: false,
  animate: false,
  visiblity: 1,
};

export const App = () => {
  return (
    <>
      {/* <Figure /> */}
      <CompFig {...daimentions} />
    </>
  );
};
//
