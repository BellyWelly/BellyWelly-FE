import { styled } from "styled-components";

export const MainIcon = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Container width={width} height={height}>
      MainIcon
    </Container>
  );
};

const Container = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => (height ? `${height}px` : "100%")};
  background: blue;
`;
