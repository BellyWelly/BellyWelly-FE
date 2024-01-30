import { css, styled } from "styled-components";

interface IconContainerProps {
  width: number;
  height: number;
}

export const PlaneIcon = ({ width = 24, height = 24 }) => {
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

export const KakaoLoginIcon = ({ width = 22, height = 20 }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="22"
        height="20"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.7789 -0.000478745C4.82654 -0.000478745 0 3.74484 0 8.36767C0 11.3371 1.99908 13.9442 5.00123 15.4323L3.98557 19.1583C3.9467 19.2726 3.97894 19.3937 4.0633 19.4762C4.12138 19.5337 4.1989 19.5654 4.28304 19.5654C4.34797 19.5654 4.41246 19.54 4.47076 19.4955L8.83794 16.5958C9.47221 16.6848 10.1193 16.7356 10.7789 16.7356C16.7313 16.7356 21.5583 12.9905 21.5583 8.36767C21.5583 3.74484 16.7313 -0.000478745 10.7789 -0.000478745Z"
          fill="#3C1E1E"
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
