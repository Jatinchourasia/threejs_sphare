import React from "react";
import styles from "./Rectangle.module.scss";

//  export interface IRectangleProps {
//    height: number;
//    width: number;
//    height_label?: string;
//    width_label?: string;
//    unit: string;
//    height_highlight?: string;
//    base_highlight?: string;
//    fill?: string;
//    outline?: string;
//  }
export const Rectangle = ({
  unit,
  base_highlight,
  height_highlight,
  height_label,
  width_label,
  fill,
  height,
  width,
  outline,
}) => {
  const margin = 20;
  let WIDTH = 340;
  let HEIGHT = 180;
  let h;
  let w;
  const stringToFraction = (val) => {
    if (val.indexOf("/") >= 0) {
      const before = val.substring(0, val.indexOf(" "));
      const frac = val.substring(val.indexOf(" ") + 1);
      const numerator = frac.substring(0, frac.indexOf("/"));
      const denominator = frac.substring(frac.indexOf("/") + 1);
      if (before) {
        return (
          <span>
            {before}
            <sup>{numerator}</sup>&frasl;<sub>{denominator}</sub>
          </span>
        );
      } else {
        return val;
      }
    }
    return val;
  };
  if (width > height) {
    h = HEIGHT;
    w = HEIGHT;
    let ratio = width / height;
    h = w / ratio;
  }
  if (width < height) {
    h = HEIGHT - margin;
    w = HEIGHT - margin;
    let ratio = height / width;
    w = w / ratio + margin;
  }
  if (width == height) {
    h = HEIGHT - margin / 2;
    w = HEIGHT - margin / 2;
  }
  HEIGHT = h + margin;
  WIDTH = w + margin;
  // console.log("rectangle", h, w);

  return (
    <div className={styles.svgContainer}>
      <div
        style={{
          width: (390 - w + 10) / 2,
          height: h - margin,
          color: height_highlight ? height_highlight : "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "right",
          position: "absolute",
          fontSize: "14px",
          left: "0",
        }}
      >
        {height_label ? stringToFraction(height_label) : height} {unit}
      </div>
      <svg width={WIDTH} viewBox={`0 0 ${WIDTH} ${HEIGHT}`}>
        <text x="300" y="100" writing-mode="tb">
          SVG
        </text>
        <polygon
          points={`${margin} ,${margin} ,${w},${margin} , ${w},${h}, ${margin} ,${h}`}
          fill={fill ? fill : "none"}
          stroke={outline ? outline : "#000000"}
          strokeWidth={2}
        />
        {base_highlight && (
          <line
            x1={margin}
            x2={w}
            y1={h}
            y2={h}
            stroke={base_highlight ? base_highlight : "none"}
            strokeWidth={3}
          />
        )}
        {height_highlight && (
          <line
            x1={margin}
            x2={margin}
            y1={margin}
            y2={h}
            stroke={height_highlight ? height_highlight : "none"}
            strokeWidth={3}
            strokeLinecap="round"
          />
        )}
      </svg>

      {width && (
        <div
          style={{
            width: "200px",
            color: base_highlight ? base_highlight : "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            fontSize: "14px",
            bottom: (190 - h) / 2 - 10,
          }}
        >
          {width_label ? stringToFraction(width_label) : width} {unit}
        </div>
      )}
    </div>
  );
};
