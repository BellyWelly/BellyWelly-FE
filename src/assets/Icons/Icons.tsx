import { css, styled } from "styled-components";

export interface IconContainerProps {
  width: number;
  height: number;
  display?: string;
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
          strokeWidth="2"
          strokeLinecap="round"
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

export const ArrowIcon = ({ width = 24, height = 24, rotate = 0 }) => {
  return (
    <IconContainer
      width={width}
      height={height}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.4001 16.7998L9.6001 11.9998L14.4001 7.19981"
          stroke="#434240"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </IconContainer>
  );
};

export const CameraIcon = ({ width = 64, height = 64 }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M52 14.5H44.8025L41.25 9.1675C41.1128 8.96185 40.9269 8.79329 40.7088 8.67684C40.4907 8.56038 40.2472 8.49964 40 8.5H24C23.7528 8.49964 23.5093 8.56038 23.2912 8.67684C23.0731 8.79329 22.8872 8.96185 22.75 9.1675L19.195 14.5H12C10.5413 14.5 9.14236 15.0795 8.11091 16.1109C7.07946 17.1424 6.5 18.5413 6.5 20V48C6.5 49.4587 7.07946 50.8576 8.11091 51.8891C9.14236 52.9205 10.5413 53.5 12 53.5H52C53.4587 53.5 54.8576 52.9205 55.8891 51.8891C56.9205 50.8576 57.5 49.4587 57.5 48V20C57.5 18.5413 56.9205 17.1424 55.8891 16.1109C54.8576 15.0795 53.4587 14.5 52 14.5ZM54.5 48C54.5 48.663 54.2366 49.2989 53.7678 49.7678C53.2989 50.2366 52.663 50.5 52 50.5H12C11.337 50.5 10.7011 50.2366 10.2322 49.7678C9.76339 49.2989 9.5 48.663 9.5 48V20C9.5 19.337 9.76339 18.7011 10.2322 18.2322C10.7011 17.7634 11.337 17.5 12 17.5H20C20.2472 17.5004 20.4907 17.4396 20.7088 17.3232C20.9269 17.2067 21.1128 17.0382 21.25 16.8325L24.8025 11.5H39.195L42.75 16.8325C42.8872 17.0382 43.0731 17.2067 43.2912 17.3232C43.5093 17.4396 43.7528 17.5004 44 17.5H52C52.663 17.5 53.2989 17.7634 53.7678 18.2322C54.2366 18.7011 54.5 19.337 54.5 20V48ZM32 22.5C29.9233 22.5 27.8932 23.1158 26.1665 24.2696C24.4398 25.4233 23.094 27.0632 22.2993 28.9818C21.5045 30.9005 21.2966 33.0116 21.7018 35.0484C22.1069 37.0852 23.1069 38.9562 24.5754 40.4246C26.0438 41.8931 27.9148 42.8931 29.9516 43.2982C31.9884 43.7034 34.0996 43.4955 36.0182 42.7007C37.9368 41.906 39.5767 40.5602 40.7304 38.8335C41.8842 37.1068 42.5 35.0767 42.5 33C42.5 30.2152 41.3938 27.5445 39.4246 25.5754C37.4555 23.6062 34.7848 22.5 32 22.5ZM32 40.5C30.5166 40.5 29.0666 40.0601 27.8332 39.236C26.5999 38.4119 25.6386 37.2406 25.0709 35.8701C24.5032 34.4997 24.3547 32.9917 24.6441 31.5368C24.9335 30.082 25.6478 28.7456 26.6967 27.6967C27.7456 26.6478 29.082 25.9335 30.5368 25.6441C31.9917 25.3547 33.4997 25.5032 34.8701 26.0709C36.2406 26.6386 37.4119 27.5999 38.236 28.8332C39.0601 30.0666 39.5 31.5166 39.5 33C39.5 34.9891 38.7098 36.8968 37.3033 38.3033C35.8968 39.7098 33.9891 40.5 32 40.5Z"
          fill="#C6C2C1"
        />
      </svg>
    </IconContainer>
  );
};

export const PlusIcon = ({ width = 38, height = 38 }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="38"
        height="39"
        viewBox="0 0 38 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="19" cy="19.5" r="19" fill="#F5F4F2" />
        <path
          d="M18.9998 11.3574L18.9998 27.6431M27.1426 19.5003L10.8569 19.5003"
          stroke="#868281"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </IconContainer>
  );
};

export const DropdwonIcon = ({ width = 24, height = 24 }) => {
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
          d="M21.5999 19.1998H2.3999M14.9999 11.9998H2.3999M21.5999 4.7998H2.3999"
          stroke="#353432"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </IconContainer>
  );
};

export const DropdwonArrowIcon = ({ width = 24, height = 24 }) => {
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
          d="M16.7998 9.60039L11.9998 14.4004L7.19981 9.60039"
          stroke="#434240"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
