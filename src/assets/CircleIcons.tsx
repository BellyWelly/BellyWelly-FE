import { css, styled } from "styled-components";

interface IconContainerProps {
  width: number;
  height: number;
  type?: string;
}

export const CircleIcons = ({ width = 38, height = 38, type = "check" }) => {
  return (
    <IconContainer width={width} height={height}>
      {type === "check" ? (
        <svg
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="19" cy="19" rx="19" ry="19" fill="#FC843E" />
          <path
            d="M26.0459 13.8145L14.9462 24.977L11.1626 21.172"
            stroke="white"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
        >
          <circle cx="19" cy="19" r="19" fill="#F5F4F2" />
          <path
            d="M18.9998 10.8574L18.9998 27.1431M27.1426 19.0003L10.8569 19.0003"
            stroke="#868281"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
      )}
    </IconContainer>
  );
};

const IconContainer = styled.div<IconContainerProps>`
  ${({ width, height }) => css`
    width: ${width}px;
    height: ${height}px;
  `}
`;
