import React from "react";
import { CustomGeometry } from "./CustomGeometry";

export const PyramidStruct = ({ position, args }) => {
  return (
    <>
      {/* bottom */}

      <CustomGeometry
        vertices={[
          [position[0], position[1] - args[1] / 2, position[2] + args[2]],
          [position[0] + args[0], position[1] - args[1] / 2, position[2]],
          [position[0] - args[0], position[1] - args[1] / 2, position[2]],
        ]}
      />
      <CustomGeometry
        vertices={[
          [position[0] + args[0], position[1] - args[1] / 2, position[2]],
          [position[0], position[1] - args[1] / 2, position[2] - args[2]],
          [position[0] - args[0], position[1] - args[1] / 2, position[2]],
        ]}
      />
      {/* front  */}
      <CustomGeometry
        vertices={[
          [position[0], position[1] - args[1] / 2, position[2] + args[2]],
          [position[0], position[1] + args[1] / 2, position[2]],
          [position[0] + args[0], position[1] - args[1] / 2, position[2]],
        ]}
        color="teal"
      />
      {/* left  */}
      <CustomGeometry
        vertices={[
          [
            position[0] - args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ],
          [position[0], position[1] + args[1] / 2, position[2]],
          [position[0], position[1] - args[1] / 2, position[2] + args[2]],
        ]}
        color="green"
      />
      {/* back  */}
      <CustomGeometry
        vertices={[
          [position[0], position[1] - args[1] / 2, position[2] - args[2]],
          [position[0], position[1] + args[1] / 2, position[2]],
          [position[0] - args[0], position[1] - args[1] / 2, position[2]],
        ]}
        color="yellow"
      />
      {/* right  */}
      <CustomGeometry
        vertices={[
          [position[0] + args[0], position[1] - args[1] / 2, position[2]],
          [position[0], position[1] + args[1] / 2, position[2]],
          [position[0], position[1] - args[1] / 2, position[2] - args[2]],
        ]}
        color="blue"
      />
    </>
  );
};
