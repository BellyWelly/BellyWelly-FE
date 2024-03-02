import { css, styled } from "styled-components";

interface IconContainerProps {
  width: number;
  height: number;
}

export const HomeIcon = ({ width = 24, height = 24, type = false }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.40002 9.24369C2.40002 8.84967 2.60057 8.48001 2.93823 8.25167L11.2582 2.62515C11.7023 2.32482 12.2977 2.32482 12.7418 2.62515L21.0618 8.25167C21.3995 8.48001 21.6 8.84967 21.6 9.24369V19.774C21.6 20.7824 20.7404 21.5999 19.68 21.5999H4.32002C3.25964 21.5999 2.40002 20.7824 2.40002 19.774V9.24369Z"
          stroke={type ? "#FC843E" : "#C6C2C1"}
          stroke-width="2"
        />
      </svg>
    </IconContainer>
  );
};

export const ReportIcon = ({ width = 24, height = 24, type = false }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.55724 21.5574H4.75723C3.43174 21.5574 2.35723 20.4828 2.35724 19.1574L2.35733 4.75741C2.35734 3.43193 3.43185 2.35742 4.75733 2.35742H15.5576C16.8831 2.35742 17.9576 3.43194 17.9576 4.75742V9.55742M6.55761 7.15742H13.7576M6.55761 10.7574H13.7576M6.55761 14.3574H10.1576M13.1574 18.2484L18.2486 13.1573L21.6427 16.5514L16.5515 21.6426H13.1574V18.2484Z"
          stroke={type ? "#FC843E" : "#C6C2C1"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconContainer>
  );
};

export const ChatIcon = ({ width = 24, height = 24, type = false }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19.4667 9.86644V5.06644C19.4667 3.88823 18.5116 2.93311 17.3334 2.93311H4.53336C3.35515 2.93311 2.40002 3.88823 2.40002 5.06644V13.4143C2.40002 14.5925 3.35515 15.5476 4.53336 15.5476H6.20292V19.9998L10.6551 15.5476H10.9334M16.4406 18.2838L19.2232 21.0664V18.2838H19.4667C20.6449 18.2838 21.6 17.3287 21.6 16.1505V12.5331C21.6 11.3549 20.6449 10.3998 19.4667 10.3998H13.0667C11.8885 10.3998 10.9334 11.3549 10.9334 12.5331V16.1505C10.9334 17.3287 11.8885 18.2838 13.0667 18.2838H16.4406Z"
          stroke={type ? "#FC843E" : "#C6C2C1"}
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </IconContainer>
  );
};

export const MypageIcon = ({ width = 24, height = 24, type = false }) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.40002 20.5123C2.40002 16.7368 5.55431 13.6761 12 13.6761C18.4457 13.6761 21.6 16.7368 21.6 20.5123C21.6 21.113 21.1618 21.5999 20.6212 21.5999H3.37885C2.83826 21.5999 2.40002 21.113 2.40002 20.5123Z"
          stroke={type ? "#FC843E" : "#C6C2C1"}
          stroke-width="2"
        />
        <path
          d="M15.6 5.9999C15.6 7.98813 13.9882 9.5999 12 9.5999C10.0118 9.5999 8.40002 7.98813 8.40002 5.9999C8.40002 4.01168 10.0118 2.3999 12 2.3999C13.9882 2.3999 15.6 4.01168 15.6 5.9999Z"
          stroke={type ? "#FC843E" : "#C6C2C1"}
          stroke-width="2"
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
