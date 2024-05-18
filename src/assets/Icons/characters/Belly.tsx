import { IconContainer } from "./BellyFaces";
import { IconContainerProps } from "../Icons";

export const MagnifierBelly = ({ width, height }: IconContainerProps) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 146 143"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          y="0.5"
          width="100%"
          height="100%"
          fill="url(#pattern0_470_2448)"
        />
        <defs>
          <pattern
            id="pattern0_470_2448"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              xlinkHref="#image0_470_2448"
              transform="matrix(0.000974659 0 0 0.00100211 0 -0.0140845)"
            />
          </pattern>
          <image
            id="image0_470_2448"
            width="1026"
            height="1026"
          />
        </defs>
      </svg>
    </IconContainer>
  );
};