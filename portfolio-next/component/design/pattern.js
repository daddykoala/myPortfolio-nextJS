import React from "react";

export default function aboutPattern1({ className }) {
  return (
    <svg
      className={className}
      id="10015.io"
      viewBox="0 0 1000 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="svg-pattern"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
          patternTransform="translate(10, 10) rotate(0) skewX(0)"
        >
          <svg width="10" height="10" viewBox="0 0 100 100">
            <g fill="#ffffff81" opacity="0.7">
              <circle cx="50" cy="50" r="50"></circle>
            </g>
          </svg>
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="rgba(139, 70, 250, 0)"
      ></rect>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        fill="url(#svg-pattern)"
      ></rect>
    </svg>
  );
}
