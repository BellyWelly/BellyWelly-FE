import { styled } from "styled-components";

export const Column = styled.div<{
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "initial"};
`;

export const Row = styled.div<{
  gap?: number;
  alignItems?: string;
  justifyContent?: string;
}>`
  display: flex;
  gap: ${({ gap }) => (gap ? gap : 0)}px;
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "initial")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "initial"};
`;

export const ImgContainer = styled.div<{
  width: number;
  height: number;
}>`
  width: ${({ width }) => (width ? width : 0)}px;
  height: ${({ height }) => (height ? height : 0)}px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
`;
