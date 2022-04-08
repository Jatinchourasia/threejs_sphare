import React from "react";
import { Line } from "./../line";

export const Wireframe = ({ hide, position, args }) => {
  return (
    <>
      //bottom front
      {hide.includes("bottomFront") ? null : (
        <Line
          position={[
            position[0],
            position[1] - args[1] / 2,
            position[2] + args[2] / 2,
          ]}
          args={[args[0], -0.02, -0.02]}
        />
      )}
      //left front
      {hide.includes("leftFront") ? null : (
        <Line
          position={[
            position[0] - args[0] / 2,
            position[1],
            position[2] + args[2] / 2,
          ]}
          args={[-0.02, args[1], -0.02]}
        />
      )}
      //left bottom
      {hide.includes("leftBottom") ? null : (
        <Line
          position={[
            position[0] - args[0] / 2,
            position[1] - args[1] / 2,
            position[2],
          ]}
          args={[-0.02, -0.02, args[2]]}
        />
      )}
      /////////// ///////////
      {/* top front */}
      {hide.includes("topFront") ? null : (
        <Line
          position={[
            position[0],
            position[1] + args[1] / 2,
            position[2] + args[2] / 2,
          ]}
          args={[args[0], -0.02, -0.02]}
        />
      )}
      {/* right front */}
      {hide.includes("rightFront") ? null : (
        <Line
          position={[
            position[0] + args[0] / 2,
            position[1],
            position[2] + args[2] / 2,
          ]}
          args={[-0.02, args[1], -0.02]}
        />
      )}
      //left top
      {hide.includes("leftTop") ? null : (
        <Line
          position={[
            position[0] - args[0] / 2,
            position[1] + args[1] / 2,
            position[2],
          ]}
          args={[-0.02, -0.02, args[2]]}
        />
      )}
      {/* ccccccccccccccccccccccccccc */}
      //bottom back
      {hide.includes("bottomBack") ? null : (
        <Line
          position={[
            position[0],
            position[1] - args[1] / 2,
            position[2] - args[2] / 2,
          ]}
          args={[args[0], -0.02, -0.02]}
        />
      )}
      //left left
      {hide.includes("leftLeft") ? null : (
        <Line
          position={[
            position[0] - args[0] / 2,
            position[1],
            position[2] - args[2] / 2,
          ]}
          args={[-0.02, args[1], -0.02]}
        />
      )}
      //right bottom
      {hide.includes("rightBottom") ? null : (
        <Line
          position={[
            position[0] + args[0] / 2,
            position[1] - args[1] / 2,
            position[2],
          ]}
          args={[-0.02, -0.02, args[2]]}
        />
      )}
      /////////// ///////////
      {/* top back */}
      {hide.includes("topBack") ? null : (
        <Line
          position={[
            position[0],
            position[1] + args[1] / 2,
            position[2] - args[2] / 2,
          ]}
          args={[args[0], -0.02, -0.02]}
        />
      )}
      {/* right back */}
      {hide.includes("rightBack") ? null : (
        <Line
          position={[
            position[0] + args[0] / 2,
            position[1],
            position[2] - args[2] / 2,
          ]}
          args={[-0.02, args[1], -0.02]}
        />
      )}
      //right top
      {hide.includes("rightTop") ? null : (
        <Line
          position={[
            position[0] + args[0] / 2,
            position[1] + args[1] / 2,
            position[2],
          ]}
          args={[-0.02, -0.02, args[2]]}
        />
      )}
    </>
  );
};
