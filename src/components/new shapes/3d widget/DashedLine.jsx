import React from "react";
import { Line2 } from "./Line2";

export const DashedLine = ({ from, to, color }) => {
  let segment = [];
  let init = to[1];
  let diff = init / 20;
  for (let i = -init + diff; i < init; i = i + diff) {
    let val = i - diff;

    segment.push({
      start: parseFloat(val.toFixed(2)),
      end: parseFloat(i.toFixed(2)),
    });
  }
  // console.log("segment", segment);
  return (
    <>
      {segment.map((data, i) => {
        if (i % 3) {
          return (
            <Line2
              key={i}
              start={[
                from[0],
                data.start, //top bottom
                from[2],
              ]}
              end={[
                from[2],
                data.end, //top bottom
                from[0],
              ]}
              color={color ? color : "black"}
              //   dashed={true}
            />
          );
        }
      })}
    </>
  );
};
