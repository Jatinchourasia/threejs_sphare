import React, { useRef, useEffect } from "react";
import { Line2 } from "./Line2";

export const DashedLine = ({ from, to, height, base, strait, color }) => {
  let segment = [];
  let init = to[1];
  // let init2 = from[0] - to[0];
  let init2 = from[0];
  const meshRef = useRef(null);
  console.log(from);
  console.log(to);
  let diff = init / 20;
  let diff2 = init2 / 20;
  console.log(diff2);

  for (let i = -init + diff; i < init; i = i + diff) {
    let val = i - diff;
    // let value = init2- diff2
    segment.push({
      start: parseFloat(val.toFixed(2)),
      end: parseFloat(i.toFixed(2)),
      value: parseFloat(i.toFixed(2)),
    });
  }
  // useEffect(() => {
  //   if (meshRef) {
  //     meshRef.current.rotation.x += 0.5;
  //     // meshRef.current.rotation.y += 0.5;
  //     // meshRef.current.rotation.z += 0.5;
  //   }
  // }, []);
  return (
    <mesh ref={meshRef}>
      {segment.map((data, i) => {
        if (i % 3) {
          let a = strait ? from[0] : from[0] * 1 - data.end / height - 0.5;

          let b = strait ? from[2] : from[2] * 1 - data.start / height - 0.5;

          console.log("start", [
            parseFloat(a.toFixed(2)),

            data.end, //top bottom
            parseFloat(a.toFixed(2)),
          ]);
          console.log("end", [
            parseFloat(b.toFixed(2)),

            data.start, //top bottom

            parseFloat(b.toFixed(2)),
          ]);

          return (
            <>
              {" "}
              <Line2
                key={i}
                start={[
                  parseFloat(a.toFixed(2)),

                  data.end, //top bottom
                  parseFloat(a.toFixed(2)),
                ]}
                end={[
                  parseFloat(b.toFixed(2)),

                  data.start, //top bottom

                  parseFloat(b.toFixed(2)),
                ]}
                color={color ? color : "black"}

                //   dashed={true}
              />
            </>
          );
        }
      })}
    </mesh>
  );
};

// import React from "react";
// import { Line2 } from "./Line2";

// export const DashedLine = ({ from, to, height, base, strait, color }) => {
//   let segment = [];
//   let init = to[1];
//   let init2 = from[0] - to[0];
//   // let init2 = from[0];

//   // console.log(from);
//   // console.log(to);
//   let diff = init / 20;
//   let diff2 = init2 / 40;
//   // console.log(diff2);
//   let value = init;
//   for (let i = -init + diff; i < init; i = i + diff) {
//     let val = i - diff;
//     value = value - diff2;
//     segment.push({
//       start: parseFloat(val.toFixed(2)),

//       end: parseFloat(i.toFixed(2)),
//       value: value,
//     });
//   }
//   // console.log(segment.length);
//   return (
//     <>
//       {segment.map((data, i) => {
//         if (i % 3) {
//           // let a = strait ? from[0] : from[0] * 1 - data.end / height - 0.5;

//           // let b = strait ? from[2] : from[2] * 1 - data.start / height - 0.5;

//           // console.log("start", [
//           //   data.value,

//           //   data.end, //top bottom
//           //   parseFloat(a.toFixed(2)),
//           // ]);
//           // console.log("end", [
//           //   parseFloat(b.toFixed(2)),

//           //   data.start, //top bottom

//           //   parseFloat(b.toFixed(2)),
//           // ]);
//           let cal;
//           let cal2;
//           if ((i + 1) % 3) {
//             console.log(i, "is true");
//             if (segment.length - 1 === i) {
//               cal = segment[i - 1].end;
//               cal2 = segment[i - 1].value;
//             } else {
//               cal = segment[i + 1].end;
//               cal2 = segment[i + 1].value;
//             }
//           } else {
//             console.log(i);
//             if (segment.length - 1 === i) {
//               cal = segment[i - 1].end;
//               cal2 = segment[i - 1].value;
//             } else {
//               cal = segment[i + 2].end;
//               cal2 = segment[i + 2].value;
//             }
//           }

//           // console.log("I",i, segment[i + 1]);
//           // console.log("start", [
//           //   data.value,

//           //   data.start, //top bottom
//           //   data.value,
//           // ]);
//           // console.log("end", [
//           //   data.value,

//           //   data.start, //top bottom

//           //   data.value,
//           // ]);
//           return (
//             <>
//               {(i + 1) % 3 && (
//                 <Line2
//                   key={i}
//                   start={[data.value, data.start, data.value]}
//                   end={[cal2, cal, cal2]}
//                   color={color ? color : "black"}

//                   //   dashed={true}
//                 />
//               )}
//             </>
//           );
//         }
//       })}
//     </>
//   );
// };
