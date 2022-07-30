import { Fragment } from "react";
import "./graph.scss";
export function ChartImp({ options, margins, points }) {
  if (!options) {
    options = {
      xMin: 0,
      yMin: 0,
      cellsize: 20,
      yMax: 20,
      xMax: 10,
      xInterval: 1,
      yInterval: 2,
    };

    margins = {
      top: options.cellsize * 3,
      bottom: options.cellsize * 3,
      left: options.cellsize * 3,
      right: options.cellsize * 3,
    };

    points = {
      cordinate: [
        { id: 1, x: 2, y: 5 },
        { id: 1, x: 4, y: 10 },
        { id: 1, x: 5, y: 12 },
      ],
    };
  }

  const inputs = [
    {
      id: 0,
      value: "2",
    },
    {
      id: 1,
      value: ".",
    },
    {
      id: 2,
      value: "8",
    },
    {
      id: 3,
      value: ",",
    },
    {
      id: 4,
      value: "0",
    },
    {
      id: 5,
      value: "0",
    },
    {
      id: 6,
      value: "0",
    },
    {
      id: 7,
      value: ",",
    },
    {
      id: 8,
      value: "0",
    },
    {
      id: 9,
      value: "0",
    },
    {
      id: 10,
      value: "0",
    },
    {
      id: 11,
      value: ",",
    },
    {
      id: 12,
      value: "0",
    },
    {
      id: 13,
      value: "0",
    },
    {
      id: 14,
      value: "0",
    },
    {
      id: 14,
      value: ".",
    },
  ];

  const arrows = [
    {
      start: 14,
      end: 1,
      showArrow: true,
      from: "start",
      to: "end",
      color: "#B905BD ",
    },
    {
      start: 14,
      end: 3,
      showArrow: true,
      from: "start",
      to: "end",
      color: "#B905BD ",
    },
    {
      start: 14,
      end: 7,
      showArrow: true,
      from: "start",
      to: "end",
      color: "#B905BD ",
    },
    {
      start: 14,
      end: 11,
      showArrow: true,
      from: "start",
      to: "end",
      color: "#B905BD ",
    },
  ];

  const width =
    ((options.xMax - options.xMin) / options.xInterval) * options.cellsize +
    margins.left +
    margins.right;

  const height =
    ((options.yMax - options.yMin) / options.yInterval) * options.cellsize +
    margins.top +
    margins.bottom;

  console.log("Asdmamksbdhjagfh ashdnfjkbasrhgb jkfr", height, width);
  // const data = {
  //   start: 1,
  //   end: 4,
  //   showArrow: true,
  //   color: "black",
  // };

  // let difference = Math.abs(data.start - data.end);
  const symbols = [
    "!",
    "*",
    "(",
    ")",
    "{",
    "}",
    "[",
    "]",
    ":",
    ";",
    "'",
    "'",
    ".",
    ",",
    "|",
  ];

  // const oriantation = (val) => {
  //   if (val === "start") {
  //     return 0;
  //   } else if (val === "center") {
  //     return 31;
  //   }
  //   return 26;
  // };
  const oriantation2 = (val) => {
    if (val === "start") {
      return 0;
    } else if (val === "center") {
      return 5.5;
    } else if (val === "end") {
      return 11;
    }
    return 0;
  };
  const oriantation3 = (val) => {
    if (val === "start") {
      return -14 / 2;
    } else if (val === "center") {
      return -7 / 2;
    } else if (val === "end") {
      return 0;
    }
    return 0;
  };
  const pointVal = (val, start) => {
    const object = inputs.find((obj) => obj.id === val);
    let s = 0;
    const h = oriantation3(start);
    if (symbols.includes(object.value)) {
      s = 7 + h;
    }
    return s;
  };
  // const pointVal2 = (val) => {
  //   const object = inputs.find((obj) => obj.id === val);
  //   let s = 0;
  //   if (symbols.includes(object.value)) {
  //     s = 5.5;
  //   }
  //   return s;
  // };

  const distance = (from, to) => {
    let initial = inputs.findIndex((x) => x.id === from);
    let end = inputs.findIndex((x) => x.id === to);
    const count = inputs
      .slice(initial, end)
      .filter((data) => symbols.includes(data.value)).length;
    return count;
  };

  const font = 18;
  return (
    <div className="svg-chart-container">
      <svg
        height={height}
        width={width}
        className="svg-chart"
        viewBox={`0 0 ${width} ${height}`}
      >
        {/* <defs>
          <marker
            viewBox="0 0 10 10"
            id={`lin`}
            orient="auto-start-reverse"
            markerWidth={16}
            markerHeight={16}
            refX="3.1"
            refY="2"
          >
            <line x1="0" y1="0" x2="0" y2="200" fill="#000" />
          </marker>
        </defs> */}
        <text fontSize={font} x={0} y={20}>
          {inputs.map((data) => (
            <tspan
              id={`s${data.id}`}
              fill={data.color ? data.color : "#000000"}
            >
              {data.value}
            </tspan>
          ))}
        </text>
        {arrows.map(
          (data, i) => (
            // Math.abs(data.start - data.end) > 1 ? (
            <>
              <defs>
                <marker
                  viewBox="0 0 10 10"
                  id={`revhead-${1}`}
                  orient="auto-start-reverse"
                  markerWidth={16}
                  markerHeight={16}
                  refX="3.1"
                  refY="2"
                >
                  <path d="M1,0.6 V3.3 L3.5,2 Z" fill={data.color} />
                </marker>
              </defs>
              <path
                d={`M 
                ${
                  oriantation2(data.from) -
                  pointVal(Math.min(data.start, data.end), data.from) +
                  Math.min(data.start, data.end) * 11 -
                  6 * distance(0, Math.min(data.start, data.end))
                }
                ${font + 5} Q ${
                  // (pointVal(Math.max(data.start, data.end)) -
                  //   pointVal(Math.min(data.start, data.end))) /
                  //   2 +
                  // (11 * Math.max(data.start, data.end)) / 2 +
                  // (11 * Math.min(data.start, data.end) + 1) / 2 +
                  // Math.abs(oriantation2(data.from) + oriantation2(data.to)) / 2

                  (oriantation2(data.from) -
                    pointVal(Math.min(data.start, data.end), data.from) +
                    Math.min(data.start, data.end) * 11 -
                    6 * distance(0, Math.min(data.start, data.end)) +
                    (oriantation2(data.to) -
                      pointVal(Math.max(data.start, data.end), data.to) +
                      Math.max(data.start, data.end) * 11 -
                      6 * distance(0, Math.max(data.start, data.end)))) /
                  2
                } ${23 + 10 + 10 * i}, 
                
                ${
                  oriantation2(data.to) -
                  pointVal(Math.max(data.start, data.end), data.to) +
                  Math.max(data.start, data.end) * 11 -
                  6 * distance(0, Math.max(data.start, data.end))
                }
                ${font + 5}`}
                // d={`M ${50 - 30} 25 A 3.5 5 0 0 1 ${35 - 30} 25`}
                // d={`M ${48 - 25 + 10 * i} 25 A 4 4 0 0 1 ${38 - 25 + 10 * i} 25`}
                // d={`M10,0 L380,0 A180,180 0 0,1 20,0 z`}\
                // hops
                //  `M ${48 - 25 + 10 * i} 23 A 4 4 0 0 1 ${
                // 38 - 25 + 10 * i
                // } 23`
                stroke={data.color}
                className="paath"
                marker-start={
                  data.showArrow && data.start > data.end
                    ? `url(#revhead-${1})`
                    : ""
                }
                marker-end={
                  data.showArrow && data.end > data.start
                    ? `url(#revhead-${1})`
                    : ""
                }
                fill="transparent"
              />

              {/* <path
              // d={`M ${10} ${20 + 5} Q ${16} ${35}, ${8 + 15} ${20 + 5}`}
              // d={`M ${50 - 30} 25 A 3.5 5 0 0 1 ${35 - 30} 25`}
              d={`M ${48 - 25 + 10 * i} 23 A 4 4 0 0 1 ${38 - 25 + 10 * i} 23`}
              // d={`M10,0 L380,0 A180,180 0 0,1 20,0 z`}
              stroke={data.color}
              className="paath"
              fill="transparent"
              marker-start={data.end ? `url(#revhead-${i})` : ""}
              marker-end={data.start ? `url(#revhead-${i})` : ""}
            /> */}
            </>
          )
          // ) : (
          //   <>
          //     <defs>
          //       <marker
          //         viewBox="0 0 10 10"
          //         id={`revhead-${i}`}
          //         orient="auto-start-reverse"
          //         markerWidth={16}
          //         markerHeight={16}
          //         refX="3.1"
          //         refY="2"
          //       >
          //         <path d="M2,0.6 V3.3 L4,2 Z" fill={data.color} />
          //       </marker>
          //     </defs>
          //     <path
          //       // d={`M ${10} ${20 + 5} Q ${16} ${35}, ${8 + 15} ${20 + 5}`}
          //       // d={`M ${50 - 30} 25 A 3.5 5 0 0 1 ${35 - 30} 25`}
          //       d={`M ${
          //         48 -
          //         oriantation(data.from) +
          //         10 * Math.min(data.start, data.end)
          //       } 25 A 4 4 0 0 1 ${
          //         38 -
          //         oriantation(data.from) +
          //         10 * Math.min(data.start, data.end)
          //       } 25`}
          //       stroke={data.color}
          //       className="paath"
          //       fill="transparent"
          //       marker-start={data.end ? `url(#revhead-${i})` : ""}
          //       marker-end={data.start ? `url(#revhead-${i})` : ""}
          //     />
          //   </>
          // )
        )}
      </svg>
    </div>
  );
}

//sucess 1
// d={`M ${0 + data.start * 11} ${font + 5} Q ${
//   (11 * Math.abs(data.end)) / 2 + (11 * data.start + 1) / 2
// } ${25 + Math.abs(data.start - data.end) * 5}, ${
//   0 + data.end * 11
// } ${font + 5}`}
