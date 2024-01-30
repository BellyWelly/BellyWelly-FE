import { css, styled } from "styled-components";

interface IconContainerProps {
  width: number;
  height: number;
}

export const PlaneIcon = ({ width = 24, height = 24, enable = false }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.0703 2.92998L10.4063 13.5939M3.271 8.23566L19.8769 2.47443C20.8995 2.11964 21.8807 3.10076 21.5259 4.12339L15.7646 20.7293C15.37 21.8669 13.7725 21.8981 13.3337 20.7768L10.6968 14.038C10.5651 13.7015 10.2988 13.4352 9.96226 13.3035L3.22354 10.6666C2.10219 10.2278 2.13338 8.63034 3.271 8.23566Z"
          stroke="#434240"
          stroke-width="2"
          stroke-linecap="round"
        />
      </svg>
    </IconContainer>
  );
};

const IconContainer = styled.div<IconContainerProps>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;