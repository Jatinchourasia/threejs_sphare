import React from "react";
import { Line } from "./../line";
import { Line2 } from "./Line2";

export const PyramidWireframe = ({ position, args }) => {
  {
    /*
let count = 0
const seg=[]
for(let i = -1.5+0.15; i<1.5;i=i+0.15){

 let val = i-0.15
seg.push({start:parseFloat(val.toFixed(2)),end:parseFloat(i.toFixed(2))})
}

console.log(seg)

seg.map((data,i)=>{
if(i%3){

console.log(i)
}


})*/
  }
  let hide = [];
  let segment = [];
  let init = args[1] / 2;
  let diff = init / 20;
  for (let i = -init + diff; i < init; i = i + diff) {
    let val = i - diff;

    segment.push({
      start: parseFloat(val.toFixed(2)),
      end: parseFloat(i.toFixed(2)),
    });
  }

  console.log(segment);
  return (
    <>
      //bottom front
      {hide.includes("bottomFront") ? null : (
        // <Line
        //   position={[
        //     position[0],
        //     position[1] - args[1] / 2,
        //     position[2] + args[2] / 2,
        //   ]}
        //   args={[args[0], -0.02, -0.02]}
        // />

        <Line2
          start={[
            position[0],
            position[1] - args[1] / 2,
            position[2] + args[2],
          ]}
          end={[
            0,
            position[1] + args[1] / 2, //top bottom
            0,
          ]}
          color={"blue"}
        />
      )}
      //left bottom
      {hide.includes("leftBottom") ? null : (
        <Line2
          start={[
            position[0],
            position[1] - args[1] / 2, //top bottom
            position[2] - args[2],
          ]}
          end={[
            0,
            position[1] + args[1] / 2, //top bottom
            0,
          ]}
          color={"red"}
        />
      )}
      /////////// ///////////
      {/* ccccccccccccccccccccccccccc */}
      //bottom back
      {hide.includes("bottomBack") ? null : (
        <Line2
          start={[
            position[0] - args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ]}
          end={[
            0,
            position[1] + args[1] / 2, //top bottom
            0,
          ]}
          color={"teal"}
        />
      )}
      //right bottom
      {hide.includes("rightBottom") ? null : (
        <Line2
          start={[
            position[0] + args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ]}
          end={[
            0,
            position[1] + args[1] / 2, //top bottom
            0,
          ]}
          color={"green"}
        />
      )}
      {/* ------------BASE----------- */}
      {hide.includes("bluetogreen") ? null : (
        <Line2
          start={[
            position[0],
            position[1] - args[1] / 2,
            position[2] + args[2],
          ]}
          end={[
            position[0] + args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ]}
          color={"blue"}
        />
      )}
      {/* right front */}
      {hide.includes("greentored") ? null : (
        <Line2
          start={[
            position[0] + args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ]}
          end={[
            position[0],
            position[1] - args[1] / 2, //top bottom
            position[2] - args[2],
          ]}
          color={"green"}
        />
      )}
      //left left
      {hide.includes("redtoteal") ? null : (
        <Line2
          start={[
            position[0],
            position[1] - args[1] / 2, //top bottom
            position[2] - args[2],
          ]}
          end={[
            position[0] - args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ]}
          color={"red"}
        />
      )}
      {/* right back */}
      {hide.includes("rightBack") ? null : (
        <Line2
          start={[
            position[0] - args[0],
            position[1] - args[1] / 2, //top bottom
            position[2],
          ]}
          end={[position[0], position[1] - args[1] / 2, position[2] + args[2]]}
          color={"teal"}
        />
      )}
      {segment.map((data, i) => {
        if (i % 3) {
          return (
            <Line2
              key={i}
              start={[
                0,
                data.start, //top bottom
                0,
              ]}
              end={[
                0,
                data.end, //top bottom
                0,
              ]}
              color={"black"}
              //   dashed={true}
            />
          );
        }
      })}
    </>
  );
};
